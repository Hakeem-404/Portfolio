import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import Screenshots from './components/Screenshots/Screenshots';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/project/:projectId/screenshots" element={<Screenshots />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;