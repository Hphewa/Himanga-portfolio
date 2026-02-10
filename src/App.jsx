import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import SceneHero from "./components/SceneHero";
import Footer from "./components/Footer";
import SectionView from "./components/SectionView";

// ✅ popup background image
import sectionBg from "./assets/section-bg.png";

// ✅ use your components (adjust imports if your paths differ)
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const [activeKey, setActiveKey] = useState(null);

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
    return {
      about: { title: "About", body: <About /> },
      projects: { title: "Projects", body: <Projects /> },
      skills: { title: "Skills", body: <Skills /> },
      achievements: {
        title: "Achievements",
        body: (
          <div className="space-y-3">
            <p className="text-slate-800">
              Add your achievements content inside <b>Achievements</b> section.
            </p>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Dean’s List / Awards</li>
              <li>Competition wins</li>
              <li>Certificates</li>
            </ul>
          </div>
        ),
      },
      contact: { title: "Contact", body: <Contact /> },
      cv: {
        title: "My CV",
        body: (
          <div className="space-y-4">
            <p className="text-slate-800">
              You can download my CV using the button below.
            </p>
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
      <Navbar onOpen={(key) => setActiveKey(key)} />

      {/* ✅ Home always visible */}
      <main className="flex-1 w-full">
        <SceneHero onOpen={(key) => setActiveKey(key)} />
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
