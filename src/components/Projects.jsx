const projects = [
  {
    title: "Project 01 – (Add your project name)",
    desc: "1–2 lines about what it does and what you built.",
    tech: ["React", "Tailwind"],
    link: "https://github.com/your-username/your-repo",
  },
  {
    title: "Project 02 – (Add your project name)",
    desc: "1–2 lines about what it does and what you built.",
    tech: ["Java", "Spring Boot", "MySQL"],
    link: "https://github.com/your-username/your-repo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-14">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-slate-600"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-800/60 px-3 py-1 text-xs text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm text-indigo-400">View on GitHub →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
