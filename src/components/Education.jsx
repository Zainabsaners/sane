export default function Education({ darkMode }) {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Masinde Muliro University of Science and Technology",
      period: "2023 - Present",
      year: "Third-Year Student",
      focus: "Full-Stack Development, Databases, Software Engineering"
    }
  ]

  return (
    <section id="education" className={`education ${darkMode ? 'dark' : 'light'}`}>
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="education-icon">🎓</div>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <div className="education-period">{edu.period}</div>
              <div className="education-year">{edu.year}</div>
              <div className="education-focus">{edu.focus}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
