function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <p className="section-label">ABOUT ME</p>
        <h2 className="section-title">Building practical software solutions</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Shaik Subhani, a Computer Science graduate and Python
              Full-Stack Developer with hands-on experience building web
              applications using Python, FastAPI, React, PostgreSQL, and
              REST APIs.
            </p>

            <p>
              I enjoy working on backend development, databases, API
              development, and connecting them with modern frontend
              applications. I have also gained practical experience in
              data analytics through my internship.
            </p>

            <p>
              Along with full-stack development, I'm interested in Cloud
              Computing and DevOps and continue to strengthen my knowledge
              of tools such as Git, GitHub, Docker, and Linux.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <span>Focus</span>
              <strong>Python Full-Stack</strong>
            </div>

            <div className="highlight-card">
              <span>Location</span>
              <strong>Hyderabad, India</strong>
            </div>

            <div className="highlight-card">
              <span>Education</span>
              <strong>B.Tech — CSE</strong>
            </div>

            <div className="highlight-card">
              <span>Interested In</span>
              <strong>Backend • Cloud • DevOps</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;