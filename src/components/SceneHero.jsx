import { useEffect, useRef, useState } from "react";
import deskHero from "../assets/desk-hero.png";

const DEBUG_HOTSPOTS = false;

export default function SceneHero({ onOpen }) {
  const [showIntro, setShowIntro] = useState(false);

  // ✅ NEW: after auto-show, force hide even if mouse is still there
  const [forceHidden, setForceHidden] = useState(false);

  // keep timer reference so we can clear safely
  const autoTimerRef = useRef(null);

  // ✅ Auto show on first load (once per session) and auto hide after 6s
 useEffect(() => {
  setShowIntro(true);

  const t = setTimeout(() => {
    setShowIntro(false);
  }, 6000);

  return () => clearTimeout(t);
}, []);


  // ✅ Always-visible outline + nicer hover glow
  const base =
    "group absolute rounded-xl transition focus:outline-none focus:ring-4 focus:ring-slate-900/20";
  const alwaysOutline = "outline outline-2 outline-white/70";
  const hoverGlow =
    "hover:outline-white hover:shadow-[0_0_0_6px_rgba(255,255,255,0.25)]";

  const debugClass = DEBUG_HOTSPOTS
    ? "bg-white/25 outline outline-1 outline-white"
    : "bg-transparent";

  const hotspots = [
    { key: "about", label: "About", top: 6, left: 22, w: 16, h: 12 },
    { key: "projects", label: "Projects", top: 6, left: 40, w: 16, h: 12 },
    { key: "skills", label: "Skills", top: 6, left: 58, w: 14, h: 12 },
    { key: "achievements", label: "Achievements", top: 6, left: 73, w: 18, h: 12 },
    { key: "contact", label: "Contact", top: 6, left: 90, w: 12, h: 12 },
    { key: "cv", label: "CV", top: 20, left: 85, w: 10, h: 11 },
  ];

  // laptop hover area
  const laptopScreenArea = { top: 47, left: 39, w: 30, h: 22 };

  return (
    <section className="px-4 py-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
          <div className="relative h-[600px] sm:h-[700px] md:h-[750px] w-full">
            <img
              src={deskHero}
              alt="Hero scene"
              className="h-full w-full object-cover block"
              draggable="false"
            />

            {/* ✅ Laptop hover intro bubble */}
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
              {/* hover layer */}
              <div className="h-full w-full rounded-xl" />

              {/* bubble */}
              <div
                className={`pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[110%] w-[340px] max-w-[92vw] transition-all duration-200
                ${showIntro ? "opacity-100 translate-y-[-120%]" : "opacity-0 translate-y-[-105%]"}`}
              >
                <div className="rounded-2xl border border-white/40 bg-black/70 backdrop-blur px-4 py-3 text-white shadow-lg">
                  <p className="text-sm leading-relaxed">
                    Hi, I’m <b>Himanga</b> 👋 Welcome to my portfolio!
                    <br />
                    If you want to know more about me, click the wall labels
                    (About, Projects, Skills…) to explore.
                  </p>
                </div>

                {/* arrow */}
                <div className="mx-auto h-0 w-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-black/70" />
              </div>
            </div>

            {/* ✅ Hotspots */}
            {hotspots.map((hs) => (
              <button
                key={hs.key}
                type="button"
                onClick={() => onOpen(hs.key)}
                aria-label={hs.label}
                title={hs.label}
                className={`z-10 ${base} ${alwaysOutline} ${hoverGlow} ${debugClass}`}
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

        <p className="mt-3 text-center text-sm text-slate-500">
          Click the wall labels or navbar items to open sections ✨
        </p>
      </div>
    </section>
  );
}
