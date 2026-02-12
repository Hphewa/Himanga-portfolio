import aboutMeImg from "../assets/aboutme.png";

export default function About() {
  return (
    <section className="space-y-7">
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50/80 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-amber-700 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        <span>About me</span>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2.4fr)] md:items-start">
        <div className="space-y-4 text-sm leading-relaxed text-slate-800">
          <p>
            I’m Himanga Piyumadi Hewagamage, a 3rd-year (Y3S1) undergraduate at SLIIT, following BSc
            (Hons) Information Technology (Software Engineering specialization). I focus on
            full-stack development and UI/UX design, and I love building interfaces that feel clean,
            calm, and easy to use—backed by code that’s readable and maintainable.
          </p>
          <p>
            So far, I’ve completed 3 group projects and 2 individual projects, and I’ve earned the
            Dean’s List award three times for academic excellence. Through this portfolio, I share
            the work I’m most proud of, the skills I’m growing, and how you can connect with me for
            software engineering opportunities.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-[0_18px_55px_rgba(15,23,42,0.18)]">
            <img
              src={aboutMeImg}
              alt="Himanga receiving an award"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
