import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const API_URL = 'http://localhost:8000/api'

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const response = await fetch(`${API_URL}/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <section id="contact" className={`contact ${darkMode ? 'dark' : 'light'}`}>
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's work together</p>
        
        <div className="contact-card-wrapper">
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <p>Feel free to reach out through any of these channels</p>
            
            <div className="contact-items">
              <div className="contact-item-card">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-detail">
                  <h4>Email</h4>
                  <a href="mailto:zainabsaners@gmail.com">zainabsaners@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item-card">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-detail">
                  <h4>Phone</h4>
                  <a href="tel:0702640917">0702640917</a>
                </div>
              </div>
              
              <div className="contact-item-card">
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-detail">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/254702640917" target="_blank">+254 702 640 917</a>
                </div>
              </div>
              
              <div className="contact-item-card">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-detail">
                  <h4>Location</h4>
                  <span>Kenya</span>
                </div>
              </div>
            </div>
            
            <div className="social-links-card">
              <h4>Connect with me</h4>
              <div className="social-icons">
                <a href="https://github.com/Zainabsaners" target="_blank" className="social-icon github">
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/zainab-saners-838b08390/" target="_blank" className="social-icon linkedin">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:zainabsaners@gmail.com" className="social-icon email">
                  <FaEnvelope />
                  <span>Email</span>
                </a>
                <a href="https://wa.me/254702640917" target="_blank" className="social-icon whatsapp">
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-card">
            <h3>Send me a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <FaPaperPlane /> {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="success-message">✨ Message sent successfully!</p>}
              {status === 'error' && <p className="error-message">❌ Error sending message. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
