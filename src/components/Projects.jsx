const projects = [
  {
    title: "Printing Shop Management System (Sahitha Printers)",
    desc: "A full‑stack MERN web app to manage orders, inventory, delivery workflows, and role‑based access for a printing shop.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Git/GitHub"],
    link: "https://github.com/Hphewa/SahithaPrintersProject",
  },
  {
    title: "Online Staff Management System (LUNO)",
    desc: "A role‑based staff management system using Java (JSP/Servlets) and MySQL to handle leave requests, tasks, salaries, and employee records.",
    tech: ["Java", "JSP", "Servlets", "MySQL", "MVC"],
    link: "https://github.com/Hphewa/OnlineStaffManagementSystem-LUNO-",
  },
  {
    title: "Online Pharmacy Portal (OurCare)",
    desc: "A multi‑vendor pharmacy platform that connects pharmacies across locations, supports deliveries, and manages orders and profiles.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://github.com/Hphewa/PharmacyPortal",
  },
  {
    title: "Wellness & Habit Tracking App (FlowLife)",
    desc: "A native Android app for tracking habits, mood, hydration, and wellness routines with local data persistence.",
    tech: ["Kotlin", "Android Studio", "SharedPreferences"],
    link: "https://github.com/Hphewa/WellnessTrackerApp",
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50/80 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-amber-700 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        <span>Selected work</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-slate-200/90 bg-white/80 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_22px_60px_rgba(15,23,42,0.14)]"
          >
            <h3 className="text-base font-semibold tracking-tight text-slate-950">
              {p.title}
            </h3>
            <p className="mt-2 text-xs text-slate-600">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 inline-flex items-center text-xs font-semibold text-amber-700">
              View on GitHub
              <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
