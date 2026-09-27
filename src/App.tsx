import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import EngineeringImpact from "./components/EngineeringImpact";
import DSA from "./components/DSA";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <EngineeringImpact />
        <Skills />
        <DSA />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
