import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={(e) => handleClick(e, '#home')}>
            <span className="logo-text">SC</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <button className="theme-toggle-nav" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-mobile-controls">
          <button className="theme-toggle-mobile" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <span className="sidebar-logo">Saners Cherotich</span>
            <button className="sidebar-close" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="sidebar-links">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="sidebar-link"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Overlay */}
        {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
      </div>
    </nav>
  )
}
