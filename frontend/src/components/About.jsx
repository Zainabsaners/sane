export default function About({ darkMode }) {
  return (
    <section id="about" className={`about ${darkMode ? 'dark' : 'light'}`}>
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm <strong>Saners Cherotich</strong>, a Full-Stack Developer and 
              Application Security Enthusiast passionate about building secure, 
              scalable, and impactful software solutions. I enjoy transforming 
              complex challenges into practical applications that deliver meaningful 
              value and exceptional user experiences.
            </p>
            <p>
              My work combines software engineering principles with a security-first 
              mindset, allowing me to create applications that are not only functional 
              and efficient but also resilient and reliable. From designing intuitive 
              user interfaces to developing robust backend systems, I am driven by 
              the process of turning ideas into solutions that make a difference.
            </p>
            <p>
              I believe technology should solve real problems, empower people, and 
              create lasting impact. Through continuous learning, innovation, and a 
              commitment to excellence, I strive to build software that is secure, 
              scalable, and built for the future.
            </p>
            <div className="about-quote">
              "Building secure, scalable, and impactful software solutions."
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
