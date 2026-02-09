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

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <a href="#top" className="font-semibold tracking-wide">
            Himanga
          </a>

          <nav className="flex gap-5 text-sm text-slate-300">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="py-16">
          <p className="text-slate-400">Undergraduate Software Engineering Student</p>

          <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">
            Hi, I’m <span className="text-indigo-400">Himanga</span>.
            <br />I build modern web applications.
          </h1>

          <p className="mt-5 max-w-2xl text-slate-300">
            I’m learning full-stack development and building projects using React,
            Tailwind, Java, Spring Boot, and databases.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-indigo-500 px-5 py-3 font-medium text-white hover:bg-indigo-400"
            >
              View Projects
            </a>

            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-5 py-3 font-medium hover:border-slate-500"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-700 px-5 py-3 font-medium hover:border-slate-500"
            >
              Contact
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-14">
          <h2 className="text-2xl font-semibold">About</h2>

          <p className="mt-4 max-w-3xl text-slate-300">
            I’m an undergraduate software engineering student. I enjoy building clean user interfaces,
            writing backend APIs, and learning best practices in software development.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Tailwind", "Java", "Spring Boot", "MySQL", "Git/GitHub"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
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

        {/* Contact */}
        <section id="contact" className="py-14">
          <h2 className="text-2xl font-semibold">Contact</h2>

          <div className="mt-4 space-y-2 text-slate-300">
            <p>
              Email:{" "}
              <a className="text-indigo-400 hover:underline" href="mailto:you@example.com">
                you@example.com
              </a>
            </p>

            <p>
              LinkedIn:{" "}
              <a
                className="text-indigo-400 hover:underline"
                href="https://www.linkedin.com/in/yourname/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/yourname
              </a>
            </p>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Himanga. Built with React + Tailwind.
        </footer>
      </main>
    </div>
  );
}
