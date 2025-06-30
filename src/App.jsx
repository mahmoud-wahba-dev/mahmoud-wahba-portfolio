import { useState } from "react";
import HeartLoader from "./components/HeartLoader";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <HeartLoader onFinish={() => setLoading(false)} />}
      {!loading && (
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
          <Analytics/>
        </div>
      )}
    </>
  );
}

export default App;
