import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import './App.css';

const sections = ['Experience', 'Skills', 'Education'];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollLockRef = useRef(false);

  const nextSection = () => setActiveIndex((i) => (i + 1) % sections.length);
  const prevSection = () => setActiveIndex((i) => (i - 1 + sections.length) % sections.length);

  useEffect(() => {
    const handleGlobalScroll = (e) => {
      e.preventDefault(); // prevent default browser scroll
      if (scrollLockRef.current) return;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      if (isScrollingDown) {
        scrollLockRef.current = true;
        nextSection();
      } else if (isScrollingUp) {
        scrollLockRef.current = true;
        prevSection();
      }

      setTimeout(() => {
        scrollLockRef.current = false;
      }, 300);
    };

    window.addEventListener('wheel', handleGlobalScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleGlobalScroll);
  }, []);

  const sectionProps = {
    scrollableRef: useRef(null), // still used in child component if needed
  };

  const renderSection = () => {
    if (activeIndex === 0) return <Experience {...sectionProps} />;
    if (activeIndex === 1) return <Skills {...sectionProps} />;
    if (activeIndex === 2) return <Education {...sectionProps} />;
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col font-mono bg-[#1e1e1e] text-white">
      <Header activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      <main className="flex-1 mt-2 mb-5 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 10, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
}