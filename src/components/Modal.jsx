import { useEffect } from "react";

export default function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Modal"}
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-1 text-slate-600 hover:bg-slate-100"
            aria-label="Close modal"
            title="Close"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[75vh] overflow-auto px-5 py-5">
          {children}
        </div>
      </div>
    </div>
  );
}
