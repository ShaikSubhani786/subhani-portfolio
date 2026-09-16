function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-content">
          <p className="section-label">CONTACT</p>

          <h2 className="section-title">Let's connect</h2>

          <p className="contact-description">
            I'm interested in opportunities related to Python development,
            full-stack development, backend engineering, Cloud, and DevOps.
            Feel free to connect with me.
          </p>

          <div className="contact-links">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shaiksubbu384@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/shaik-subhani-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ShaikSubhani786"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;