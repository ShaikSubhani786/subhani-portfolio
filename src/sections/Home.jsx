function Home() {
  const technologies = [
    "Python",
    "FastAPI",
    "React",
    "PostgreSQL",
    "Docker",
    "Linux",
  ];

  return (
    <section id="home" className="home-section">
      <div className="home-container">

        {/* LEFT SIDE */}
        <div className="home-content">
          <p className="home-intro">HELLO, I'M</p>

          <h1>
            Shaik <span>Subhani</span>
          </h1>

          <h2>Python Full-Stack Developer</h2>

          <p className="home-description">
            Computer Science graduate focused on building full-stack web
            applications using Python, FastAPI, React, PostgreSQL, and modern
            development tools. I also have experience in data analytics and an
            interest in Cloud and DevOps technologies.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a
              href="https://github.com/ShaikSubhani786"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="home-technologies">
            <p>TECHNOLOGIES I WORK WITH</p>

            <div className="technology-tags">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - PROFILE */}
        <div className="home-profile">
          <div className="profile-decoration"></div>

          <div className="profile-image-wrapper">
            <img
              src="/profile.png"
              alt="Shaik Subhani"
              className="profile-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;