import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import SceneHero from "./components/SceneHero";
import Footer from "./components/Footer";
import SectionView from "./components/SectionView";

// ✅ popup background image
import sectionBg from "./assets/section-bg.png";

// ✅ use your components
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

// ✅ NEW: achievements carousel images (rename your files to these)
import achieve1 from "./assets/achieve-1.png";
import achieve2 from "./assets/achieve-2.png";

export default function App() {
  const [activeKey, setActiveKey] = useState(null);

  const handleOpen = (key) => {
    if (key === "home") {
      setActiveKey(null);
    } else {
      setActiveKey(key);
    }
  };

  // ✅ lock scrolling when modal is open
  useEffect(() => {
    if (activeKey) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [activeKey]);

  const content = useMemo(() => {
    const AchievementsBody = () => {
      const images = [
        { src: achieve1, alt: "Achievement image 1" },
        { src: achieve2, alt: "Achievement image 2" },
      ];

      const [idx, setIdx] = useState(0);

      // auto slide every 4s
      useEffect(() => {
        const t = setInterval(() => {
          setIdx((p) => (p + 1) % images.length);
        }, 4000);
        return () => clearInterval(t);
      }, [images.length]);

      const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);
      const next = () => setIdx((p) => (p + 1) % images.length);

      return (
        <div className="grid gap-6 md:grid-cols-[1.35fr_0.65fr] md:items-start">
          {/* LEFT: your existing content (unchanged) */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50/80 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-amber-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>Academic awards</span>
            </div>

            <div className="space-y-2 text-sm text-slate-800">
              <p>
                I’m grateful to have consistently maintained strong academic performance during my
                degree. I’ve been recognised on the Dean’s List across multiple semesters at SLIIT.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Dean’s List – Year 1, Semester 1 (2024)</li>
                <li>Dean’s List – Year 1, Semester 2 (2024)</li>
                <li>Dean’s List – Year 2, Semester 1 (2025)</li>
                <li>Dean’s List – Year 2, Semester 2 (2025)</li>
              </ul>
              <p className="mt-3 text-xs text-slate-600">
                By Sri Lanka Institute of Information Technology (SLIIT) for academic achievements.
              </p>
            </div>
          </div>

          {/* RIGHT: image carousel */}
          <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-sm backdrop-blur">
            {/* image */}
            <div className="relative aspect-[4/5] w-full">
              <img
                src={images[idx].src}
                alt={images[idx].alt}
                className="absolute inset-0 h-full w-full object-contain bg-white"

                draggable="false"
              />
              {/* soft gradient for readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
            </div>

            {/* controls */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 px-3 pb-3">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-800 shadow hover:bg-white transition"
              >
                Prev
              </button>

              {/* dots */}
              <div className="flex items-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdx(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === idx ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-800 shadow hover:bg-white transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      );
    };

    return {
      about: { title: "About", body: <About /> },
      projects: { title: "Projects", body: <Projects /> },
      skills: { title: "Skills", body: <Skills /> },
      achievements: {
        title: "Achievements",
        body: <AchievementsBody />,
      },
      contact: { title: "Contact", body: <Contact /> },
      cv: {
        title: "My CV",
        body: (
          <div className="space-y-4">
            <p className="text-slate-800">You can download my CV using the button below.</p>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition"
            >
              Download CV
            </a>
          </div>
        ),
      },
    };
  }, []);

  const active = activeKey ? content[activeKey] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f5ef]">
      <Navbar onOpen={handleOpen} />

      {/* ✅ Home always visible */}
      <main className="flex-1 w-full">
        <SceneHero onOpen={handleOpen} />
      </main>

      <Footer />

      {/* ✅ POPUP overlay */}
      <SectionView
        open={!!active}
        title={active?.title}
        onClose={() => setActiveKey(null)}
        backgroundImage={sectionBg}
      >
        {active?.body}
      </SectionView>
    </div>
  );
}
