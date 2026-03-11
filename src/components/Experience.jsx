import { useState } from 'react';

// Wraps numbers like 600+, 300+, 50%, 200+ in a green highlight span
function Hi({ text }) {
  const parts = text.split(/(\d[\d,]*[+%]?)/g);
  return (
    <>
      {parts.map((p, i) =>
        /^\d/.test(p)
          ? <span key={i} className="text-green-400 font-bold">{p}</span>
          : p
      )}
    </>
  );
}

const experiences = [
  {
    company: 'Stargate Connections Inc.',
    roles: [
      {
        title: 'MARR Collection Portal',
        subtitle: 'Full Stack Developer',
        years: 'May 2018 – Present',
        stats: [
          { value: '600+', label: 'Users' },
          { value: '300+', label: 'Sites' },
          { value: '6+',   label: 'Years Running' },
        ],
        description: [
          { cat: 'PLATFORM',   text: 'Designed and deployed a multi-tenant web platform serving 600+ users across 300+ sites, enabling large-scale appliance collection reporting and financial reconciliation workflows.' },
          { cat: 'BACKEND',    text: 'Designed backend processing pipelines and API-style integration services that validate user submissions and generate XML feeds for external accounting systems.' },
          { cat: 'DATABASE',   text: 'Architected relational database schemas and optimized complex SQL queries and indexing strategies to support high-volume reporting during peak claim cycles.' },
          { cat: 'SECURITY',   text: 'Implemented server-side validation frameworks to detect anomalies, prevent duplicate submissions, and enforce reporting thresholds, significantly reducing administrative corrections.' },
          { cat: 'ANALYTICS',  text: 'Built data-driven interfaces and dashboards using JavaScript, DataTables, and Google Charts to help non-technical users review submissions and analyze reporting metrics.' },
          { cat: 'AUTOMATION', text: 'Developed reusable backend modules and scheduled batch jobs to aggregate transactional data and automate daily/monthly reporting pipelines.' },
        ],
        stack: ['ColdFusion', 'PHP', 'MySQL', 'JavaScript', 'jQuery', 'DataTables', 'Google Charts', 'REST API', 'XML'],
      },
      {
        title: 'MonitNg',
        subtitle: 'Full Stack Developer',
        years: 'June 2016 – May 2019',
        stats: [
          { value: '200+', label: 'Sites Monitored' },
          { value: '50%',  label: 'Monitoring Time Saved' },
        ],
        description: [
          { cat: 'PLATFORM',   text: 'Developed a web application solution for monitoring 200+ websites for vulnerabilities, updates, and disk space usage.' },
          { cat: 'ANALYTICS',  text: 'Aggregated and normalized server data to generate actionable monitoring insights and automated vulnerability alerts.' },
          { cat: 'SECURITY',   text: 'Implemented automated vulnerability tracking for WordPress plugins and themes, proactively alerting clients to security risks.' },
          { cat: 'AUTOMATION', text: 'Reduced monitoring time by 50% through automation and reporting enhancements.' },
        ],
        stack: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'Linux', 'Automation'],
      },
      {
        title: 'Web Administrator',
        subtitle: 'Infrastructure',
        years: 'June 2016 – Present',
        stats: [
          { value: '200+',  label: 'Hosted Apps' },
          { value: '2500+', label: 'Tickets Resolved' },
        ],
        description: [
          { cat: 'INFRA',   text: 'Managed cPanel/WHM hosting environment for 200+ websites.' },
          { cat: 'SUPPORT', text: 'Resolved 2,500+ client support tickets and handled routine website modifications.' },
        ],
        stack: ['cPanel & WHM', 'PuTTY', 'Cerb', 'WinSCP', 'Linux'],
      },
      {
        title: 'Spam Administrator',
        subtitle: 'Security',
        years: 'Sept 2015 – Present',
        stats: [
          { value: '400+',  label: 'Users Protected' },
          { value: '9000+', label: 'Tickets Resolved' },
        ],
        description: [
          { cat: 'SECURITY', text: 'Maintained spam filters for 400+ users using Barracuda and BlockIt.' },
          { cat: 'SUPPORT',  text: 'Resolved and supported over 9,000 tickets related to spam filtering.' },
        ],
        stack: ['Barracuda', 'BlockIt', 'SPF', 'RegEx'],
      },
    ],
  },
  {
    company: 'DataAnnotation.tech',
    roles: [
      {
        title: 'AI Code & Logic Evaluator',
        subtitle: 'Contract — Remote',
        years: 'Jan 2025 – Present',
        stats: [
          { value: 'AI',   label: 'Model Evaluation' },
          { value: 'QA',   label: 'Code Review' },
          { value: '100%', label: 'Remote' },
        ],
        description: [
          { cat: 'EVAL',     text: 'Evaluated AI-generated code and software solutions for correctness, constraint adherence, and structural reliability.' },
          { cat: 'TESTING',  text: 'Designed adversarial test inputs to expose model failure modes and improve evaluation datasets.' },
          { cat: 'ANALYSIS', text: 'Analyzed model outputs to identify recurring logic errors and inform improvements to AI QA processes.' },
        ],
        stack: ['Python', 'AI Evaluation', 'Code Review', 'QA', 'Adversarial Testing'],
      },
    ],
  },
];

export default function ExperienceFolders() {
  const [openCompany, setOpenCompany] = useState('Stargate Connections Inc.');
  const [selectedRole, setSelectedRole] = useState(
    experiences.find(e => e.company === 'Stargate Connections Inc.')?.roles[0] || null
  );

  return (
    <div className="max-w-7xl px-4">
      {/* File tree */}
      <div className="w-full max-w-xs text-xs font-mono bg-[#252526] text-gray-300 rounded-md border border-gray-700">
        {experiences.map((org) => {
          const isOpen = openCompany === org.company;
          return (
            <div key={org.company}>
              <button
                onClick={() => setOpenCompany(isOpen ? null : org.company)}
                className="flex items-center w-full text-left px-2 py-1 hover:bg-[#2d2d2d] rounded-t"
              >
                <span className="mr-1 text-sm">{isOpen ? '▾' : '▸'}</span>
                <span className="text-blue-300 truncate">{org.company}</span>
              </button>

              {isOpen && (
                <ul className="pl-5 py-1">
                  {org.roles.map((role, i) => {
                    const isActive = selectedRole?.title === role.title && openCompany === org.company;
                    return (
                      <li key={i}>
                        <button
                          onClick={() => setSelectedRole(role)}
                          className={`flex items-start w-full text-left px-2 py-1 rounded-md gap-1 ${
                            isActive ? 'bg-[#373737] text-white' : 'hover:bg-[#2a2a2a] text-gray-400'
                          }`}
                        >
                          <span className="mt-0.5">📄</span>
                          <span>
                            <span className="truncate">{role.title}</span>
                            {role.subtitle && (
                              <span className="block text-[10px] text-gray-600 leading-tight">{role.subtitle}</span>
                            )}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail panel */}
      {selectedRole && (
        <div key={selectedRole.title} className="animate-fade-in pt-3">

          <h2 className="text-lg font-semibold text-white">{selectedRole.title}</h2>
          {selectedRole.subtitle && (
            <p className="text-green-400 text-xs">{selectedRole.subtitle}</p>
          )}
          <p className="text-gray-500 text-xs mt-0.5">{selectedRole.years}</p>

          {/* Stat cards */}
          {selectedRole.stats && (
            <div className="flex gap-2 flex-wrap mt-3 mb-4">
              {selectedRole.stats.map(s => (
                <div
                  key={s.label}
                  className="flex flex-col items-center bg-[#252526] border border-gray-700 rounded px-3 py-2 min-w-[70px]"
                  style={{ borderTop: '2px solid #22c55e' }}
                >
                  <span className="text-green-400 font-black text-xl leading-none mb-1">{s.value}</span>
                  <span className="text-gray-500 text-[10px] uppercase tracking-wide text-center leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Categorised bullets */}
          <ul className="space-y-2">
            {selectedRole.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span
                  className="text-[10px] font-bold tracking-wide flex-shrink-0 mt-0.5 px-1.5 py-0.5 rounded"
                  style={{
                    color: '#22c55e',
                    background: 'rgba(34,197,94,0.08)',
                    border: '1px solid rgba(34,197,94,0.25)',
                  }}
                >
                  {item.cat}
                </span>
                <span><Hi text={item.text} /></span>
              </li>
            ))}
          </ul>

          {/* Stack tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedRole.stack.map((tech, i) => (
              <span key={i} className="px-2 py-1 text-[10px] bg-blue-700/30 text-blue-200 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
