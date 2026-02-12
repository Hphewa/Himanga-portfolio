import { useEffect, useState } from "react";
import deskHero from "../assets/desk-hero.png";

const DEBUG_HOTSPOTS = false;

export default function SceneHero({ onOpen }) {
  const [showIntro, setShowIntro] = useState(false);

  // auto show on first load + hide after 6s
  useEffect(() => {
    setShowIntro(true);
    const t = setTimeout(() => setShowIntro(false), 6000);
    return () => clearTimeout(t);
  }, []);

  const base =
    "group absolute rounded-xl transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-slate-900/15";

  // warm cream glow
  const hoverGlow =
    "hover:outline hover:outline-2 hover:outline-amber-200 hover:shadow-[0_0_0_7px_rgba(251,191,36,0.20)]";

  const debugClass = DEBUG_HOTSPOTS
    ? "bg-white/25 outline outline-1 outline-white"
    : "bg-transparent";

  const hotspots = [
    { key: "about", label: "About", top: 7, left: 18, w: 13.5, h: 15 },
    { key: "projects", label: "Projects", top: 8, left: 33, w: 13, h: 14.5 },
    { key: "skills", label: "Skills", top: 9, left: 47, w: 12.5, h: 14 },
    { key: "achievements", label: "Achievements", top: 9.5, left: 60.2, w: 13, h: 14 },
    { key: "contact", label: "Contact", top: 10, left: 74, w: 11.2, h: 13 },
    { key: "cv", label: "CV", top: 25, left: 75, w: 10, h: 11.5 },
  ];

  const laptopScreenArea = { top: 47, left: 39, w: 30, h: 22 };

  const leftCircleCards = [
    { key: "about", label: "About" },
    { key: "projects", label: "Projects" },
    { key: "skills", label: "Skills" },
  ];

  const rightCircleCards = [
    { key: "achievements", label: "Achievements" },
    { key: "contact", label: "Contact" },
    { key: "cv", label: "CV" },
  ];

  // ✅ circle size + circle text size (6 buttons)
  const circleBtnClass =
    "flex h-[72px] w-[72px] items-center justify-center rounded-full border border-teal-200/60 bg-teal-500/80 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_35px_rgba(0,0,0,0.55)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-teal-300 hover:text-teal-900 hover:border-teal-200";

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* full-screen background image */}
      <div className="absolute inset-0">
        <img
          src={deskHero}
          alt="Hero scene"
          className="block h-full w-full object-cover"
          draggable="false"
        />
        {/* subtle dark vignette for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/45" />
      </div>

      {/* content overlay */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col px-4 pt-20 pb-10">
          {/* top text strip + side buttons */}
          <div className="mb-8 flex flex-col gap-4 text-white sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-amber-200 uppercase">
                Portfolio of Himanga Hewagamage
              </p>

              <div className="mt-3 flex gap-4">
                {/* left vertical circle buttons before hero text */}
                <div className="flex flex-col gap-3">
                  {leftCircleCards.map((card) => (
                    <button
                      key={card.key}
                      type="button"
                      onClick={() => onOpen(card.key)}
                      className={circleBtnClass}
                    >
                      <span>{card.label}</span>
                    </button>
                  ))}
                </div>

                {/* main hero text */}
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Undergraduate Software Engineering Student.
                  </h1>
                  <p className="mt-2 max-w-xl text-sm text-slate-100/90">
                    I love designing calm, user-friendly interfaces and building clean, maintainable
                    code behind them. This portfolio highlights who I am, what I build, and how you
                    can reach me.
                  </p>
                </div>
              </div>
            </div>

            {/* right side: availability pill + vertical buttons */}
            <div className="flex flex-col items-end gap-3">
              {/* ✅ ONLY THIS PILL SIZE INCREASED */}
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-black/35 px-4 py-2.5 text-sm text-white shadow-sm backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 shadow-[0_0_0_4px_rgba(52,211,153,0.6)]" />
                <span>Available for internships</span>
              </div>

              <div className="flex flex-col items-end gap-3">
                {rightCircleCards.map((card) => (
                  <button
                    key={card.key}
                    type="button"
                    onClick={() => onOpen(card.key)}
                    className={circleBtnClass}
                  >
                    {card.key === "achievements" ? (
                      <span className="px-1 text-[10px] leading-tight">
                        Achieve
                        <br />
                        ments
                      </span>
                    ) : (
                      <span>{card.label}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* interactive desk area */}
          <div className="relative flex-1">
            {/* Hotspots over the desk image */}
            {hotspots.map((hs) => (
              <button
                key={hs.key}
                type="button"
                onClick={() => onOpen(hs.key)}
                aria-label={hs.label}
                title={hs.label}
                className={`z-10 ${base} ${hoverGlow} ${debugClass}`}
                style={{
                  top: `${hs.top}%`,
                  left: `${hs.left}%`,
                  width: `${hs.w}%`,
                  height: `${hs.h}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
