import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-container">
        <div className="footer-content">
          <span className="footer-name">Saners Cherotich</span>
          <span className="footer-separator">•</span>
          <div className="footer-links">
            <a href="https://github.com/Zainabsaners" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <span className="link-separator">•</span>
            <a href="https://linkedin.com/in/zainabsaners" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <span className="link-separator">•</span>
            <a href="mailto:zainabsaners@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Transforming ideas into secure and scalable digital solutions. • © {currentYear} Saners Cherotich</p>
        </div>
      </div>
    </footer>
  )
}
