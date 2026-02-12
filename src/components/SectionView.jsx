export default function SectionView({ open, title, onClose, backgroundImage, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* backdrop */}
      <div className="absolute inset-0 bg-slate-900/35 backdrop-blur-sm" onClick={onClose} />

      {/* modal container */}
      <div className="absolute inset-0 flex items-center justify-center px-3 py-6 sm:p-6">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.30)]">
          {/* background image (your requirement) */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* cream overlay for readability */}
          <div className="absolute inset-0 bg-white/55" />

          {/* content */}
          <div className="relative p-5 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1.5">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                  Focused section
                </p>
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950">
                  {title}
                </h1>
                <p className="text-xs text-slate-500">
                  Click outside this card or use ✕ in the corner to return to the desk.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:bg-white"
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* glass card */}
            <div className="mt-6 rounded-[26px] border border-black/10 bg-white/80 p-5 sm:p-6 backdrop-blur-xl shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
              <div className="text-slate-800">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
