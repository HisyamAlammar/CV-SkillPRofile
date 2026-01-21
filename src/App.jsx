import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import MouseTrail from './components/MouseTrail';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <MouseTrail />
      <Navbar />

      <Hero />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <footer style={{ padding: '2rem 0', textAlign: 'center', fontSize: '0.9rem', color: '#666', background: 'var(--bg-color)' }}>
        <p>&copy; {new Date().getFullYear()} Abyan Hisyam Al'ammar. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem' }}>Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;
