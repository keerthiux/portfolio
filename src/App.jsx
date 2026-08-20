import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudyNexus from './pages/CaseStudyNexus';
import CaseStudyNexoraCRM from './pages/CaseStudyNexoraCRM';
import CaseStudyCooper from './pages/CaseStudyCooper';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StarField from './components/StarField/StarField';

const pageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

export default function App() {
  const location = useLocation();

  return (
    <>
      <StarField />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={pageTransition.transition}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-study/nexus" element={<CaseStudyNexus />} />
            <Route path="/case-study/nexora" element={<CaseStudyNexoraCRM />} />
            <Route path="/case-study/cooper" element={<CaseStudyCooper />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}
