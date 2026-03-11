import { useState } from 'react'
import './App.css'

// ── Data ────────────────────────────────────────────────────────────
const COMPANIES = [
  {
    id: 'stargate',
    name: 'Stargate Connections Inc.',
    location: 'Burnaby, BC',
    roles: [
      {
        id: 'fsd',
        title: 'Full Stack Developer',
        period: '2016 – Present',
        bullets: [
          'Designed and deployed a multi-tenant web platform (MARR Collection Portal) serving 600+ users across 300+ sites for appliance collection reporting and financial reconciliation.',
          'Built backend processing pipelines and API integration services that validate user submissions and generate XML feeds for external accounting systems.',
          'Architected relational database schemas and optimized complex SQL queries to support high-volume reporting during peak claim cycles.',
          'Implemented server-side validation to detect anomalies, prevent duplicate submissions, and enforce reporting thresholds — significantly reducing administrative corrections.',
          'Built data-driven dashboards using JavaScript, DataTables, and Google Charts to help non-technical users analyze reporting metrics.',
          'Developed MonitNg — a monitoring platform tracking 200+ websites for vulnerabilities, updates, and disk usage, reducing monitoring time by 50%.',
          'Developed reusable backend modules and scheduled batch jobs to automate daily/monthly reporting pipelines.',
        ],
        tags: ['PHP', 'ColdFusion', 'MySQL', 'JavaScript', 'jQuery', 'DataTables', 'Node.js', 'REST API'],
      },
      {
        id: 'sysadmin',
        title: 'Systems Administrator',
        period: '2016 – Present',
        bullets: [
          'Maintained Linux production environments supporting 200+ hosted web applications.',
          'Managed server configurations, deployments, and security patching across production infrastructure.',
          'Administered WordPress environments and implemented automated vulnerability alerting for plugins and themes.',
        ],
        tags: ['Linux', 'Docker', 'Git', 'WordPress', 'Barracuda', 'phpMyAdmin'],
      },
    ],
  },
  {
    id: 'dataannotations',
    name: 'DataAnnotations',
    location: 'Remote',
    roles: [
      {
        id: 'ai-eval',
        title: 'AI Code & Logic Evaluator',
        period: 'Jan 2025 – Present',
        bullets: [
          'Evaluated AI-generated code and software solutions for correctness, constraint adherence, and structural reliability.',
          'Designed adversarial test inputs to expose model failure modes and improve evaluation datasets.',
          'Analyzed model outputs to identify recurring logic errors and inform improvements to AI QA processes.',
        ],
        tags: ['Python', 'AI Evaluation', 'Code Review', 'QA'],
      },
    ],
  },
]

const SKILLS = {
  Languages:          ['JavaScript', 'Python', 'SQL', 'PHP', 'ColdFusion'],
  Frontend:           ['React', 'HTML/CSS', 'DataTables', 'Bootstrap', 'jQuery'],
  'Back End':         ['Node.js', 'REST API', 'MySQL', 'Flask', 'SQLAlchemy', 'Relational Data Modeling'],
  'Data & Analytics': ['Power BI', 'SQL Analytics', 'Google Charts', 'Data Aggregation'],
  Infrastructure:     ['Docker', 'Linux', 'Git', 'GitHub Actions', 'CI/CD', 'Server Administration'],
}

const PROJECTS = [
  {
    name: 'Eehxpe',
    subtitle: 'Sports Analytics Platform',
    url: 'https://eehxpe.com',
    desc: 'Full-stack platform tracking badminton match outcomes and visualizing player win rates, partner statistics, and opponent breakdowns. Deployed to a self-hosted environment via GitHub Actions CI/CD.',
    tags: ['Flask', 'SQLAlchemy', 'Python', 'GitHub Actions', 'CI/CD'],
    demo: { user: 'demo', pass: 'Badminton1!' },
  },
]

// ── Components ───────────────────────────────────────────────────────

function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <h1 className="site-title">&lt;ng.hayden&gt;</h1>
        <div className="header-contact">
          <span>haydenhtng@gmail.com</span>
          <a href="https://www.linkedin.com/in/hayden-ng-linked" target="_blank" rel="noreferrer">
            linkedin.com/in/hayden-ng-linked
          </a>
          <span>Port Moody, BC</span>
        </div>
      </div>
      <nav className="header-nav">
        <a href="#experience" className="hash-link">#Design</a>
        <a href="#experience" className="hash-link">#Develop</a>
        <a href="#experience" className="hash-link">#Deploy</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-bio">
      <p>
        Full-stack developer with 8+ years of experience building secure, data-driven web
        applications and analytics platforms using ColdFusion, PHP, MySQL, JavaScript, and React.
        From backend logic to frontend polish — and recently, AI code evaluation —
        I bridge performance with precision.
      </p>
    </section>
  )
}

function SectionNav({ active, onChange }) {
  const sections = ['experience', 'projects', 'skills', 'education']
  return (
    <nav className="section-nav">
      {sections.map(s => (
        <button
          key={s}
          className={active === s ? 'snav-tag snav-active' : 'snav-plain'}
          onClick={() => onChange(s)}
        >
          {active === s ? <>&lt;{s}&gt;</> : s}
        </button>
      ))}
    </nav>
  )
}

function FileTree({ companies, selectedRole, onSelect }) {
  const [open, setOpen] = useState({ stargate: true, dataannotations: false })

  return (
    <div className="file-tree">
      {companies.map(company => (
        <div key={company.id}>
          <button
            className="tree-company"
            onClick={() => setOpen(o => ({ ...o, [company.id]: !o[company.id] }))}
          >
            <span className="tree-arrow">{open[company.id] ? '▼' : '▶'}</span>
            {company.name}
          </button>
          {open[company.id] && (
            <div className="tree-roles">
              {company.roles.map(role => (
                <button
                  key={role.id}
                  className={`tree-role${selectedRole?.id === role.id ? ' tree-role-active' : ''}`}
                  onClick={() => onSelect(role)}
                >
                  <span className="tree-file-icon">📄</span>
                  {role.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function RoleDetail({ role }) {
  if (!role) return <div className="role-detail role-empty">Select a role to view details.</div>
  return (
    <div className="role-detail">
      <h3 className="role-title">{role.title}</h3>
      <p className="role-period">{role.period}</p>
      <ul className="role-bullets">
        {role.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="role-tags">
        {role.tags.map(t => <span className="role-tag" key={t}>{t}</span>)}
      </div>
    </div>
  )
}

function ExperienceSection() {
  const defaultRole = COMPANIES[0].roles[0]
  const [selected, setSelected] = useState(defaultRole)

  return (
    <section className="section" id="experience">
      <div className="exp-layout">
        <FileTree companies={COMPANIES} selectedRole={selected} onSelect={setSelected} />
        <RoleDetail role={selected} />
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="projects-list">
        {PROJECTS.map(p => (
          <div className="proj-card" key={p.name}>
            <div className="proj-header">
              <h3 className="proj-name">{p.name}</h3>
              <a href={p.url} target="_blank" rel="noreferrer" className="proj-link">↗ Live</a>
            </div>
            <p className="proj-subtitle">{p.subtitle}</p>
            <p className="proj-desc">{p.desc}</p>
            <div className="role-tags">
              {p.tags.map(t => <span className="role-tag" key={t}>{t}</span>)}
            </div>
            {p.demo && (
              <p className="proj-demo">
                Demo — <code>{p.demo.user}</code> / <code>{p.demo.pass}</code>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="skills-list">
        {Object.entries(SKILLS).map(([cat, items]) => (
          <div key={cat} className="skill-row">
            <span className="skill-cat">{cat}</span>
            <div className="role-tags">
              {items.map(s => <span className="role-tag" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="section" id="education">
      <div className="edu-entry">
        <h3 className="role-title">Computer Systems Technology — Client Server Specialty</h3>
        <p className="role-period">2015 – 2017</p>
        <p className="edu-school">British Columbia Institute of Technology, Burnaby, BC</p>
        <p className="edu-cred">2-Year Diploma</p>
      </div>
    </section>
  )
}

function Footer({ activeSection }) {
  return (
    <footer className="site-footer">
      <nav className="section-nav section-nav-footer">
        <span className="snav-tag">&lt;/{activeSection}&gt;</span>
        <span className="snav-plain">projects</span>
        <span className="snav-plain">skills</span>
        <span className="snav-plain">education</span>
      </nav>
      <h2 className="footer-title">&lt;/ng.hayden&gt;</h2>
    </footer>
  )
}

// ── App ──────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState('experience')

  const renderSection = () => {
    switch (activeSection) {
      case 'experience': return <ExperienceSection />
      case 'projects':  return <ProjectsSection />
      case 'skills':    return <SkillsSection />
      case 'education': return <EducationSection />
      default:          return <ExperienceSection />
    }
  }

  return (
    <div className="app">
      <Header />
      <Hero />
      <SectionNav active={activeSection} onChange={setActiveSection} />
      {renderSection()}
      <Footer activeSection={activeSection} />
    </div>
  )
}
