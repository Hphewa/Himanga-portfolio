import { useEffect } from "react";

export default function SectionView({
  open,
  title,
  onClose,
  backgroundImage,
  children,
}) {
  // ✅ ESC to close
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      aria-modal="true"
      role="dialog"
    >
      {/* ✅ Dim + blur background */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* ✅ Modal container */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div
          className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/30 shadow-2xl"
          onClick={(e) => e.stopPropagation()} // prevent outside click close
        >
          {/* ✅ Modal background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* ✅ Glass overlay */}
          <div className="absolute inset-0 bg-white/35" />

          {/* ✅ Content */}
          <div className="relative">
            {/* header */}
            <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-7 sm:py-5">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {title}
                </h1>
                <p className="mt-1 text-sm text-slate-700">
                  Explore more about me ✨
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-2xl border border-white/40 bg-white/70 px-4 py-3 text-slate-800 shadow-sm hover:bg-white transition"
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* body */}
            <div className="px-5 pb-6 sm:px-7 sm:pb-8">
              <div className="rounded-2xl border border-white/40 bg-white/75 backdrop-blur p-5 sm:p-6 shadow-sm">
                <div className="text-slate-800">{children}</div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <p className="text-xs sm:text-sm text-slate-600">
                    Tip: Press <b>ESC</b> or click outside to close.
                  </p>

                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm text-white hover:bg-slate-800 transition"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
