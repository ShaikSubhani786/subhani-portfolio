const projects = [
  {
    title: "Smart Inventory Management System",
    version: "v1.0.0",
    type: "Featured Full-Stack Project",
    image: "/projects/dashboard.png",
    description:
      "A production-deployed full-stack inventory management application for managing products, categories, suppliers, stock transactions, purchases, sales, and low-stock reports.",
    features: [
      "JWT authentication with Admin/User role-based access control",
      "Product management with search, filtering, sorting, and pagination",
      "Stock In/Out, purchases, sales, suppliers, and inventory reports",
      "Persistent product image storage using Cloudinary",
      "PostgreSQL database with SQLAlchemy and Alembic migrations",
      "Backend testing with Pytest and Docker configuration",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Cloudinary",
      "Docker",
    ],
    live: "https://smart-inventory-project-sigma.vercel.app",
    github:
      "https://github.com/ShaikSubhani786/smart-inventory-project",
    featured: true,
  },
  {
    title:
      "Predicting Lifestyle-Related Health Risks Using Pulse and Sleep Patterns",
    type: "Machine Learning Project",
    description:
      "A machine learning project focused on analyzing pulse and sleep patterns to identify lifestyle-related health risks using data preprocessing, feature analysis, and predictive modeling.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "Data Analysis",
    ],
    featured: false,
  },
  {
    title: "Currency Recognition System",
    type: "Image Processing Project",
    description:
      "A Python-based currency recognition system designed to identify currency from images and provide information about the recognized currency and its value.",
    technologies: [
      "Python",
      "Image Processing",
      "NumPy",
      "Pandas",
    ],
    featured: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <p className="section-label">PROJECTS</p>

        <h2 className="section-title">
  Projects I've built
</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
            >
              <div className="project-top">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                </div>

                {project.version && (
                  <span className="project-version">
                    {project.version}
                  </span>
                )}
              </div>

              {/* Screenshot */}
              {project.image && (
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} dashboard`}
                    className="project-image"
                  />
                </div>
              )}

              <p className="project-description">
                {project.description}
              </p>

              {project.features && (
                <div className="project-features">
                  {project.features.map((feature) => (
                    <p key={feature}>
                      <span>✓</span>
                      {feature}
                    </p>
                  ))}
                </div>
              )}

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {(project.live || project.github) && (
                <div className="project-links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;