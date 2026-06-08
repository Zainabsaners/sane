import { useState, useEffect } from 'react'
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'

export default function GitHubActivity({ darkMode }) {
  const [githubData, setGithubData] = useState(null)
  const [repos, setRepos] = useState([])
  const [contributions, setContributions] = useState([])
  const [loading, setLoading] = useState(true)

  const githubUsername = 'Zainabsaners'

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${githubUsername}`)
        const userData = await userRes.json()
        setGithubData(userData)

        // Fetch repositories (all, sorted by updated)
        const reposRes = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`)
        const reposData = await reposRes.json()
        setRepos(reposData)

        // Fetch contribution activity for the graph
        const contribRes = await fetch(`https://api.github.com/users/${githubUsername}/events?per_page=100`)
        const eventsData = await contribRes.json()
        
        // Process contribution data
        const contributionMap = new Map()
        eventsData.forEach(event => {
          if (event.type === 'PushEvent' || event.type === 'CreateEvent' || event.type === 'PullRequestEvent') {
            const date = event.created_at.split('T')[0]
            contributionMap.set(date, (contributionMap.get(date) || 0) + 1)
          }
        })
        
        // Generate last 6 months (approx 26 weeks) of contribution data
        const today = new Date()
        const weeks = []
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const monthMarkers = new Set()
        
        for (let i = 0; i < 26; i++) {
          const week = []
          for (let j = 0; j < 7; j++) {
            const date = new Date(today)
            date.setDate(today.getDate() - (i * 7 + (6 - j)))
            const dateStr = date.toISOString().split('T')[0]
            const count = contributionMap.get(dateStr) || 0
            let level = 0
            if (count > 0) level = 1
            if (count > 2) level = 2
            if (count > 5) level = 3
            if (count > 10) level = 4
            week.push(level)
          }
          weeks.push(week)
        }
        
        // Add month markers for the last 6 months
        for (let i = 0; i < 26; i++) {
          const date = new Date(today)
          date.setDate(today.getDate() - (i * 7 + 3))
          if (date.getDate() <= 7) {
            monthMarkers.add({ week: i, month: months[date.getMonth()] })
          }
        }
        
        setContributions({
          weeks: weeks.reverse(),
          monthMarkers: Array.from(monthMarkers).sort((a, b) => a.week - b.week)
        })

        setLoading(false)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const stats = [
    { label: "Repositories", value: githubData?.public_repos || 0, icon: <FaCodeBranch /> },
    { label: "Followers", value: githubData?.followers || 0, icon: <FaUsers /> },
    { label: "Following", value: githubData?.following || 0, icon: <FaStar /> },
    { label: "Joined", value: githubData?.created_at ? new Date(githubData.created_at).getFullYear() : 'N/A', icon: <FaCalendarAlt /> }
  ]

  return (
    <section id="github" className={`github-activity ${darkMode ? 'dark' : 'light'}`}>
      <div className="github-container">
        <h2 className="section-title">GitHub Activity</h2>
        <p className="section-subtitle">
          Real-time stats from my GitHub profile — updates automatically
        </p>

        {loading ? (
          <div className="github-loading">Loading GitHub stats...</div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="github-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="github-stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contribution Graph - Last 6 Months */}
            <div className="github-contribution-graph">
              <h4>📊 Contribution Activity (Last 6 Months)</h4>
              <div className="contribution-graph-wrapper">
                <div className="contribution-months">
                  {contributions.monthMarkers?.map((marker, idx) => (
                    <span key={idx} style={{ position: 'relative', left: `${marker.week * 12}px` }}>
                      {marker.month}
                    </span>
                  ))}
                </div>
                <div className="contribution-grid">
                  {contributions.weeks?.map((week, weekIdx) => (
                    <div key={weekIdx} className="contribution-week">
                      {week.map((level, dayIdx) => (
                        <div 
                          key={dayIdx} 
                          className={`contribution-day level-${level}`}
                          title={`${level === 0 ? 'No' : level} contribution${level !== 1 ? 's' : ''}`}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="contribution-legend">
                <span>Less</span>
                <div className="legend-colors">
                  <div className="legend-color level-0"></div>
                  <div className="legend-color level-1"></div>
                  <div className="legend-color level-2"></div>
                  <div className="legend-color level-3"></div>
                  <div className="legend-color level-4"></div>
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Featured Repositories */}
            <h3 className="featured-repos-title">📁 Featured Repositories</h3>
            <div className="featured-repos">
              {repos.map((repo, idx) => (
                <div key={idx} className="repo-card">
                  <div className="repo-header">
                    <FaGithub className="repo-icon" />
                    <h4>{repo.name}</h4>
                  </div>
                  <p>{repo.description || "No description available"}</p>
                  <div className="repo-stats">
                    {repo.language && <span className="repo-language">{repo.language}</span>}
                    <span className="repo-stars">⭐ {repo.stargazers_count}</span>
                    <span className="repo-forks">🔱 {repo.forks_count}</span>
                  </div>
                  <div className="repo-links">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      GitHub <FaExternalLinkAlt />
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                        Live Demo <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Visit GitHub Profile Button */}
            <div className="github-profile-btn">
              <a href={githubData?.html_url} target="_blank" rel="noopener noreferrer" className="github-visit-btn">
                <FaGithub /> Visit Full GitHub Profile
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
