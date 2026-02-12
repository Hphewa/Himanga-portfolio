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

  return (
    <section className="px-4 py-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* premium frame */}
        <div className="rounded-[28px] p-[1px] bg-gradient-to-r from-amber-300/35 via-white/40 to-slate-300/35 shadow-[0_30px_120px_rgba(15,23,42,0.14)]">
          <div className="relative overflow-hidden rounded-[26px] bg-white ring-1 ring-black/10">
            <div className="relative h-[600px] sm:h-[700px] md:h-[750px] w-full">
              <img
                src={deskHero}
                alt="Hero scene"
                className="h-full w-full object-cover block"
                draggable="false"
              />

              {/* soft vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10" />

              {/* Laptop hover intro bubble */}
              <div
                className="absolute z-20"
                style={{
                  top: `${laptopScreenArea.top}%`,
                  left: `${laptopScreenArea.left}%`,
                  width: `${laptopScreenArea.w}%`,
                  height: `${laptopScreenArea.h}%`,
                }}
                onMouseEnter={() => setShowIntro(true)}
                onMouseLeave={() => setShowIntro(false)}
              >
                <div className="h-full w-full rounded-xl" />

                <div
                  className={`pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[110%] w-[360px] max-w-[92vw] transition-all duration-200
                  ${showIntro ? "opacity-100 translate-y-[-120%]" : "opacity-0 translate-y-[-105%]"}`}
                >
                  <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur px-4 py-3 text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
                    <p className="text-sm leading-relaxed">
                      Hi, I’m <b>Himanga</b> 👋 Welcome to my portfolio!
                      <br />
                      Click the wall labels (About, Projects, Skills…) to explore.
                    </p>
                  </div>

                  <div className="mx-auto h-0 w-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-white/80" />
                </div>
              </div>

              {/* Hotspots */}
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

        <p className="mt-4 text-center text-sm text-slate-500">
          Click the wall labels or navbar items to open sections ✨
        </p>
      </div>
    </section>
  );
}
