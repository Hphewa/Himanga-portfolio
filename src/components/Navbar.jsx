export default function Navbar({ onNavigate }) {
  const navItem =
    "text-sm font-semibold text-slate-700 hover:text-slate-900";

  return (
    <header className="border-b border-black/10 bg-[#f8f5ef]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="text-sm font-bold text-slate-900"
        >
          Himanga Portfolio
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          <button className={navItem} onClick={() => onNavigate("about")}>
            About
          </button>
          <button className={navItem} onClick={() => onNavigate("projects")}>
            Projects
          </button>
          <button className={navItem} onClick={() => onNavigate("skills")}>
            Skills
          </button>
          <button className={navItem} onClick={() => onNavigate("achievements")}>
            Achievements
          </button>
          <button className={navItem} onClick={() => onNavigate("contact")}>
            Contact
          </button>

          {/* ✅ direct download */}
          <a
            href="/cv.pdf"
            download
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Download CV
          </a>
        </nav>

        {/* mobile: just CV + menu shortcuts */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/cv.pdf"
            download
            className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
