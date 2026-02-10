export default function Skills() {
  const skills = ["React", "Tailwind", "Java", "Spring Boot", "MySQL", "Git/GitHub"];

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {skills.map((s) => (
        <span
          key={s}
          className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200"
        >
          {s}
        </span>
      ))}
    </div>
  );
}
