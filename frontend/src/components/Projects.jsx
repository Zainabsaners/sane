import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const API_URL = 'http://localhost:8000/api'

export default function Projects({ darkMode }) {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/projects/`)
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching projects:', error)
        setLoading(false)
      })
  }, [])

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  if (loading) {
    return (
      <section id="projects" className={`projects ${darkMode ? 'dark' : 'light'}`}>
        <div className="projects-container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Loading projects...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className={`projects ${darkMode ? 'dark' : 'light'}`}>
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A collection of solutions focused on finance, healthcare, ecommerce, and real-world problem solving.
        </p>
        
        <div className="filter-buttons">
          <button onClick={() => setFilter('all')} className={`filter-btn ${filter === 'all' ? 'active' : ''}`}>All</button>
          <button onClick={() => setFilter('frontend')} className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}>Frontend</button>
          <button onClick={() => setFilter('backend')} className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}>Backend</button>
          <button onClick={() => setFilter('fullstack')} className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}>Full Stack</button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image_url} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github_link} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href={project.live_demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  <strong>Tech Stack:</strong>
                  <div className="tech-tags">
                    {project.tech_stack.split(', ').map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="project-link">GitHub →</a>
                  <a href={project.live_demo} target="_blank" rel="noopener noreferrer" className="project-link live">Live Demo →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
