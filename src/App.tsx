import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Documents } from './components/Documents';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Workflow } from './components/Workflow';

function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Workflow />
        <CaseStudies />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
