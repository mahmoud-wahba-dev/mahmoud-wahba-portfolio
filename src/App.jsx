import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <WhatsAppButton />
      </main>
    </div>
  );
}

export default App;
