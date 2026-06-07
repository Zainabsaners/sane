import { useState, useEffect, useMemo } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profilePic from '../assets/images/profile.jpg'

export default function Hero({ darkMode, toggleDarkMode }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = useMemo(() => [
    { prefix: "I'm a", text: "Full-Stack Developer" },
    { prefix: "I'm an", text: "Application Security Enthusiast" },
    { prefix: "I", text: "build solutions through code" }
  ], [])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const fullText = currentRole.text

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex, roles])

  const currentRole = roles[roleIndex]

  return (
    <section id="home" className={`hero ${darkMode ? 'dark' : 'light'}`}>
      <div className="hero-content">
        <div className="avatar-container">
          <img 
            src={profilePic} 
            alt="Saners Cherotich" 
            className="profile-photo"
          />
        </div>
        <h1>Hi, I'm <span className="highlight">Saners Cherotich</span></h1>
        <h2>
          {currentRole.prefix} <span className="typed-text">{displayText}</span>
          <span className="cursor">|</span>
        </h2>
        <p className="bio">
          Passionate about creating scalable,<br />
          secure, and impactful software solutions.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="/cv.pdf" className="btn-secondary" download>Download CV</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/Zainabsaners" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/zainab-saners-838b08390/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:zainabsaners@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </section>
  )
}
// Just add id="home" to the section
// Replace the opening section tag line
