import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-brand" onClick={closeMenu}>
          <img
            src="/profile.png"
            alt="Shaik Subhani"
            className="nav-profile-image"
          />

          <span className="nav-logo">Shaik Subhani</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;