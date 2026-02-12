export default function Contact() {
  return (
    <section className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-emerald-700 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span>Let’s connect</span>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
        <div className="space-y-3 text-sm text-slate-800">
          <p>
            Whether it’s an internship, a freelance project, or simply a chance to talk about
            ideas, feel free to reach out using the details on the right.
          </p>
          <p className="text-slate-600">
            I’m most active on email and LinkedIn, and I’m always happy to connect about software
            engineering opportunities, collaborations, and learning.
          </p>
        </div>

        <div className="space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
          <a
            className="block rounded-2xl bg-slate-900 px-4 py-2.5 text-center text-xs font-semibold text-white shadow-[0_14px_35px_rgba(15,23,42,0.35)] transition hover:bg-slate-800"
            href="mailto:hphewa2@gmail.com"
          >
            Email me · hphewa2@gmail.com
          </a>

          <a
            className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-center text-xs font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-white"
            href="https://www.linkedin.com/in/hphewa"
            target="_blank"
            rel="noreferrer"
          >
            View my LinkedIn profile
          </a>
        </div>
      </div>
    </section>
  );
}
