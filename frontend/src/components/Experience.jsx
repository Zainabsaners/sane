export default function Experience({ darkMode }) {
  const experiences = [
    {
      role: "Welfare Lead – WiSTEM",
      organization: "Women in STEM",
      period: "2025 - Present",
      achievements: [
        "Organized welfare initiatives supporting 50+ STEM students",
        "Coordinated student activities and mentorship programs",
        "Led community outreach and support initiatives"
      ]
    },
    {
      role: "Industrial Attachment",
      organization: "Masinde Muliro University of Science and Technology",
      period: "19th May 2025 - 4th August 2025",
      achievements: [
        "Gained hands-on experience in full-stack development",
        "Contributed to production-ready applications",
        "Collaborated with senior developers on real projects"
      ]
    },
    {
      role: "Innovator",
      organization: "MMUST Innovation Academy",
      period: "2025 - Present",
      achievements: [
        "Built web solutions for local community organizations",
        "Provided technical mentorship to aspiring developers",
        "Contributed to open source projects"
      ]
    },
    {
      role: "Cofounder & Chief Operating Officer",
      organization: "SyntelSafe",
      period: "Present",
      description: "We don't just build systems — we build trust and intelligence. We engineer solutions where security is intrinsic, not an afterthought. Our focus is creating robust security that stands up to modern threats.",
      achievements: [
        "Lead operations and strategic direction for security-focused engineering",
        "Architect secure systems with security-first mindset",
        "Build intelligent security solutions for modern threats",
        "Drive innovation in application security and trust-building technologies"
      ]
    }
  ]

  return (
    <section id="experience" className={`experience ${darkMode ? 'dark' : 'light'}`}>
      <div className="experience-container">
        <h2 className="section-title">Experience & Leadership</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.organization}</h4>
                <div className="timeline-period">{exp.period}</div>
                {exp.description && (
                  <p className="organization-mission">{exp.description}</p>
                )}
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
