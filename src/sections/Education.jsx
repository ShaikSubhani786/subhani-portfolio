function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <p className="section-label">EDUCATION & CERTIFICATIONS</p>

        <h2 className="section-title">
          Education and professional learning
        </h2>

        <div className="education-grid">
          <div className="education-card">
            <p className="education-type">Education</p>

            <h3>B.Tech in Computer Science & Engineering</h3>

            <p className="education-institute">
              Sai Spurthi Institute of Technology
            </p>

            <p className="education-date">2022 — 2026</p>

            <p className="education-description">
              Completed undergraduate studies in Computer Science and
              Engineering, building a foundation in programming, databases,
              software development, and computer science fundamentals.
            </p>
          </div>

          <div className="education-card">
            <p className="education-type">Certification</p>

            <h3>Python Full Stack Development</h3>

            <p className="education-institute">Student Tribe</p>

            <p className="education-date">2026</p>

            <p className="education-description">
              Practical training covering Python, SQL, backend development,
              REST APIs, HTML, CSS, JavaScript, React, and full-stack
              application development.
            </p>
          </div>

          <div className="education-card">
            <p className="education-type">Certification</p>

            <h3>Data Analytics</h3>

            <p className="education-institute">Unified Mentor</p>

            <p className="education-date">2025</p>

            <p className="education-description">
              Completed practical learning in data cleaning, analysis,
              visualization, dashboards, Python, SQL, Pandas, NumPy,
              and Power BI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;