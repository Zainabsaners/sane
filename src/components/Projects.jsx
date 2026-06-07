import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import airsaveImg from '../assets/images/projects/airsave-dashboard.jpg'
import eyecareImg from '../assets/images/projects/eyecare-analysis.jpg'
import mteImg from '../assets/images/projects/mte-marketplace.jpg'
//import eduwalletImg from '../assets/images/projects/eduwallet-dashboard.jpg'

export default function Projects({ darkMode }) {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: "Airsave",
      description: "A micro-saving platform designed to help individuals develop sustainable saving habits and achieve their financial goals. Airsave provides users with an intuitive digital experience for tracking savings progress, managing goals, and building financial discipline through consistent contributions.",
      tech: ["React", "Django", "PostgreSQL", "REST API"],
      features: [
        "Goal-based savings management",
        "Savings progress tracking",
        "Secure user authentication",
        "Responsive and user-friendly interface"
      ],
      github: "https://github.com/Zainabsaners/Airsave",
      live: "https://airsave-1.onrender.com/",
      category: "fullstack",
      image: airsaveImg,
      problem: "People struggle to maintain consistent saving habits",
      solution: "Goal-oriented micro-saving platform with progress tracking"
    },
    {
      id: 2,
      title: "EyeCare Vision AI",
      description: "An innovative healthcare platform that combines artificial intelligence with expert medical care to enhance eye health monitoring and accessibility. The platform enables early detection of eye conditions through AI-powered analysis while connecting patients with verified eye care specialists.",
      tech: ["React", "Django", "PostgreSQL", "Artificial Intelligence"],
      features: [
        "AI-powered eye condition analysis",
        "Patient-doctor connectivity",
        "Specialist consultation management",
        "Healthcare record management"
      ],
      github: "https://github.com/Zainabsaners/Eyecare",
      live: "https://eyecare-pi.vercel.app/",
      category: "fullstack",
      image: eyecareImg,
      problem: "Limited access to eye care specialists and late detection of conditions",
      solution: "AI-powered early detection platform connecting patients with specialists"
    },
    {
      id: 3,
      title: "MTE – Multi-Vendor Ecommerce Platform",
      description: "A full-stack multi-vendor ecommerce platform that enables multiple vendors to manage products, process orders, and serve customers through a centralized marketplace. The system provides a seamless shopping experience while offering vendors powerful tools for inventory and order management.",
      tech: ["React", "Django", "PostgreSQL", "REST API"],
      features: [
        "Multi-vendor marketplace architecture",
        "Product and inventory management",
        "Shopping cart and checkout functionality",
        "Secure authentication and authorization",
        "Order management system"
      ],
      github: "https://github.com/Zainabsaners/MTE",
      live: "https://ecommerce-frontend-nine-lemon.vercel.app",
      category: "fullstack",
      image: mteImg,
      problem: "Small vendors lack affordable e-commerce infrastructure",
      solution: "Centralized marketplace with vendor management tools"
    },
    {
      id: 4,
      title: "EduWallet",
      description: "A digital financial management platform focused on helping students and young professionals manage educational expenses, savings, and personal finances. EduWallet promotes financial literacy through practical budgeting and financial planning tools.",
      tech: ["React", "Django", "PostgreSQL"],
      features: [
        "Expense tracking",
        "Budget management",
        "Savings planning",
        "Financial literacy support"
      ],
      github: "https://github.com/Zainabsaners/EduWallet",
      live: "#",
      category: "fullstack",
     // image: eduwalletImg,
      problem: "Students lack tools for managing educational finances",
      solution: "Dedicated financial literacy and expense tracking platform",
      status: "Currently in Development"
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className={`projects ${darkMode ? 'dark' : 'light'}`}>
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A collection of solutions focused on finance, healthcare, ecommerce, and real-world problem solving.
        </p>
        
        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button onClick={() => setFilter('all')} className={`filter-btn ${filter === 'all' ? 'active' : ''}`}>All</button>
          <button onClick={() => setFilter('frontend')} className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}>Frontend</button>
          <button onClick={() => setFilter('backend')} className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}>Backend</button>
          <button onClick={() => setFilter('fullstack')} className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}>Full Stack</button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-details">
                  <div className="detail-section">
                    <strong>Key Features:</strong>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="project-tech">
                  <strong>Tech Stack:</strong>
                  <div className="tech-tags">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                {project.status && (
                  <div className="project-status">
                    <span className="status-badge">{project.status}</span>
                  </div>
                )}
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub →</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">Live Demo →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
