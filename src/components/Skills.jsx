export default function Skills() {
  const skills = [
    "C / C++",
    "Java",
    "Python",
    "JavaScript",
    "React.js",
    "Node.js",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "MERN stack",
    "MySQL",
    "MongoDB",
    "Git / GitHub",
    "Kotlin (Android)",
    "Figma",
  ];

  return (
    <section className="space-y-5">
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50/80 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-amber-700 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        <span>My skills</span>
      </div>

      <p className="text-sm text-slate-700 max-w-xl">
        A snapshot of the main technologies and tools I use most often across full‑stack
        development and UI/UX work.
      </p>

      <div className="flex flex-wrap gap-2.5">
        {skills.map((s) => (
          <span
            key={s}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
