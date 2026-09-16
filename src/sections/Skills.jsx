const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Backend Development",
    skills: ["FastAPI", "REST APIs", "SQLAlchemy", "JWT Authentication"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "HTML", "CSS", "Vite"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Linux", "Git", "GitHub", "Render", "Vercel"],
  },
  {
    title: "Data & Tools",
    skills: ["Pandas", "NumPy", "Power BI", "Alembic", "Cloudinary"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <p className="section-label">SKILLS</p>

        <h2 className="section-title">
          Technologies I work with
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;