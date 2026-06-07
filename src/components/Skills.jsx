export default function Skills({ darkMode }) {
  const skills = [
    { 
      category: "Frontend", 
      items: ["HTML", "CSS", "JavaScript", "React"] 
    },
    { 
      category: "Backend", 
      items: ["Python", "Django", "DRF"] 
    },
    { 
      category: "Database", 
      items: ["PostgreSQL", "MySQL", "SQLite"] 
    },
    { 
      category: "Security", 
      items: ["Burp Suite", "Nmap", "Wireshark", "OWASP Top 10", "JWT", "VAPT"] 
    },
    { 
      category: "Tools", 
      items: ["Git", "GitHub", "Linux", "Postman"] 
    }
  ]

  return (
    <section id="skills" className={`skills ${darkMode ? 'dark' : 'light'}`}>
      <div className="skills-container">
        <h2 className="section-title">Skills & Tools</h2>
        <div className="skills-grid">
          {skills.map((category, idx) => (
            <div key={idx} className="skill-card">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
