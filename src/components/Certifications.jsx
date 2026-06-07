export default function Certifications({ darkMode }) {
  const certifications = [
    {
      name: "Cisco Cybersecurity",
      issuer: "Cisco Networking Academy",
      year: "2025",
      icon: "🔐"
    },
    {
      name: "Python Programming",
      issuer: "Meta Backend Professional Certificate",
      year: "2024",
      icon: "🐍"
    },
    {
      name: "Web Development",
      issuer: "The Odin Project",
      year: "2023",
      icon: "🌐"
    },
    {
      name: "Introduction to Cyber security",
      issuer: "IBM",
      year: "2026",
      icon: "📦"
    },
    {
      name: "Django REST Framework",
      issuer: "Coursera",
      year: "2024",
      icon: "⚙️"
    },
    {
      name: "Application Security Fundamentals",
      issuer: "OWASP",
      year: "2025",
      icon: "🛡️"
    }
  ]

  return (
    <section id="certifications" className={`certifications ${darkMode ? 'dark' : 'light'}`}>
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
              <span className="cert-year">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
