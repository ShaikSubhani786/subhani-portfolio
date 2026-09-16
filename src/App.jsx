import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>© 2026 Shaik Subhani. All rights reserved.</p>

          <div className="footer-links">
            <a
              href="https://github.com/ShaikSubhani786"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a href="#home">Back to Top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;