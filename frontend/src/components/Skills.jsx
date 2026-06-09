import { useState, useEffect } from 'react'

const API_URL = "https://sane-backend.onrender.com/api"

export default function Skills({ darkMode }) {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/skills/`)
      .then(res => res.json())
      .then(data => {
        setSkills(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching skills:', error)
        setLoading(false)
      })
  }, [])

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  if (loading) {
    return (
      <section id="skills" className={`skills ${darkMode ? 'dark' : 'light'}`}>
        <div className="skills-container">
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">Loading skills...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className={`skills ${darkMode ? 'dark' : 'light'}`}>
      <div className="skills-container">
        <h2 className="section-title">Skills & Tools</h2>
        <div className="skills-grid">
          {Object.entries(skillsByCategory).map(([category, items]) => (
            <div key={category} className="skill-card">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill.name}
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
