export default function Hero() {
  return (
    <section className="py-16">
      <p className="text-slate-400">Undergraduate Software Engineering Student</p>

      <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">
        Hi, I'm <span className="text-indigo-400">Himanga</span>.
        <br />I build modern web applications.
      </h1>

      <p className="mt-5 max-w-2xl text-slate-300">
        I'm learning full-stack development and building projects using React,
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
  );
}
