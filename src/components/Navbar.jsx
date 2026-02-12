export default function Navbar({ onOpen, onNavigate }) {
  const go = onOpen || onNavigate;

  const navItem =
    "text-sm font-semibold text-slate-700 hover:text-slate-950 transition";

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f8f5ef]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <button
          type="button"
          onClick={() => go?.("home")}
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-slate-900 uppercase shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.5)]" />
          Himanga&nbsp;<span className="text-amber-600">Portfolio</span>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          <button className={navItem} onClick={() => go?.("about")}>About</button>
          <button className={navItem} onClick={() => go?.("projects")}>Projects</button>
          <button className={navItem} onClick={() => go?.("skills")}>Skills</button>
          <button className={navItem} onClick={() => go?.("achievements")}>Achievements</button>
          <button className={navItem} onClick={() => go?.("contact")}>Contact</button>

          <a
            href="/cv.pdf"
            download
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white
                       shadow-[0_12px_30px_rgba(15,23,42,0.18)]
                       hover:bg-slate-800 transition"
          >
            Download CV
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/cv.pdf"
            download
            className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
