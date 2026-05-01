import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Stack from "./components/Stack.jsx";
import Project from "./components/Project.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import Contact from "./components/Contact.jsx";

function ScrollManager() {
  const lenisRef = useRef(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      wheelThreshold: 0,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element && lenisRef.current) {
        isScrollingRef.current = true;
        lenisRef.current.scrollTo(element, {
          offset: 0,
          duration: 1.5,
          easing: [0.25, 0.1, 0.25, 1],
        });
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1600);
      }
    };
  }, []);

  return null;
}

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Home />
          <About />
          <Stack />
          <Project />
          <Contact />
        </>
      } />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollManager />
      <AppContent />
    </Router>
  );
}

export default App;
