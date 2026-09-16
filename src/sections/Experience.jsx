function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <p className="section-label">EXPERIENCE & TRAINING</p>

        <h2 className="section-title">
          Practical experience and technical training
        </h2>

        <div className="experience-list">
          {/* Data Analytics Internship */}
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Data Analytics Intern</h3>
                <p className="company-name">Unified Mentor</p>
              </div>

              <span className="experience-date">
                Aug 2025 — Nov 2025
              </span>
            </div>

            <p className="experience-description">
              Gained hands-on experience working with real-world datasets,
              performing data cleaning, exploratory data analysis, and
              creating meaningful visualizations and dashboards.
            </p>

            <div className="experience-points">
              <p>
                • Performed data cleaning, preprocessing, and exploratory
                data analysis using Python and SQL.
              </p>

              <p>
                • Created interactive dashboards and visualizations to
                communicate insights from datasets.
              </p>

              <p>
                • Worked with tools and libraries including Pandas,
                NumPy, Matplotlib, and Power BI.
              </p>

              <p>
                • Strengthened practical skills in data analysis,
                problem-solving, and presenting data-driven insights.
              </p>
            </div>

            <div className="experience-tech">
              <span>Python</span>
              <span>SQL</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Power BI</span>
              <span>Data Visualization</span>
            </div>
          </div>

          {/* Python Full Stack Training */}
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Python Full Stack Development</h3>
                <p className="company-name">Student Tribe</p>
              </div>

              <span className="experience-date">
                2026
              </span>
            </div>

            <p className="experience-description">
              Undertook practical training in Python full-stack development,
              covering backend development, databases, REST APIs, and
              frontend application development.
            </p>

            <div className="experience-points">
              <p>
                • Strengthened Python programming and problem-solving
                fundamentals through practical exercises and projects.
              </p>

              <p>
                • Worked with SQL and relational databases for creating,
                querying, and managing application data.
              </p>

              <p>
                • Learned backend development and REST API concepts using
                Python-based technologies.
              </p>

              <p>
                • Developed frontend skills using HTML, CSS, JavaScript,
                and React and practiced integrating frontend applications
                with backend APIs.
              </p>
            </div>

            <div className="experience-tech">
              <span>Python</span>
              <span>SQL</span>
              <span>FastAPI</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;