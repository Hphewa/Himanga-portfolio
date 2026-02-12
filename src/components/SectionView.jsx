export default function SectionView({ open, title, onClose, backgroundImage, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/35 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal container */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_35px_120px_rgba(15,23,42,0.25)]">
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
          <div className="absolute inset-0 bg-white/50" />

          {/* content */}
          <div className="relative p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {title}
                </h1>
                <p className="mt-1 text-sm text-slate-600">
                  Click ✕ or outside to return Home
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-slate-800
                           shadow-sm hover:bg-white transition"
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* glass card */}
            <div className="mt-6 rounded-2xl border border-black/10 bg-white/75 p-5 sm:p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <div className="text-slate-800">{children}</div>

              <p className="mt-5 text-sm text-slate-600">
                Tip: Click ✕ to return to Home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
