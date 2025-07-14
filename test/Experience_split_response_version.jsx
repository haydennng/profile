import { useState } from 'react';
import clsx from 'clsx'; // optional, for cleaner class logic (or use plain logic)

const experiences = [
  {
    company: 'Stargate Connections Inc.',
    role: 'Full Stack Developer',
    years: '2016 – Present',
    since: '2016',
    description: [
      'Designed and deployed data-driven web applications for government-funded recycling and web monitoring services.',
      'Built and maintained the Major Appliance Recycling Roundtable Collection Portal (marrbc.ca/collection-portal), supporting 300+ sites and 450+ users. Enabled claim tracking that scaled from $1.27M in 2019 to $2.9M in 2024.',
      'Implemented custom notifications, calendars, reports, and verification systems to streamline payment processing.',
      'Developed MonitNg, a tool to monitor 200+ hosted websites for plugin vulnerabilities, disk usage, and update status—cutting monitoring time by 50%.',
    ],
    stack: ['PowerSite', 'ColdFusion', 'PHP', 'MySQL', 'JavaScript', 'jQuery', 'DataTables', 'Bash', 'Ubuntu Linux', 'Jetty', 'Tomcat'],
  },
  {
    company: 'Stargate Connections Inc.',
    role: 'Web Administrator',
    years: 'June 2016 – Present',
    since: '2016',
    description: [
      'Managed cPanel/WHM hosting environment for 200+ websites, including updates, security patches, and migrations.',
      'Performed WordPress and PHP maintenance, SSL setup, and kernel updates using tools like PuTTY and WinSCP.',
      'Resolved 2,500+ client support tickets and handled routine website modifications and server adjustments.',
    ],
    stack: ['cPanel & WHM', 'PuTTY', 'Cerb', 'WinSCP', 'HTTPS', 'SSL'],
  },
  {
    company: 'Stargate Connections Inc.',
    role: 'Spam Administrator',
    years: 'Sept 2015 – Present',
    since: '2015',
    description: [
      'Maintained and configured spam filters for 400+ users using Barracuda and BlockIt systems.',
      'Created custom RegEx rules and managed SPF/DNS records to enhance email deliverability and security.',
      'Resolved and supported over 9,000 tickets related to spam filtering, delivery issues, and domain validation.',
    ],
    stack: ['Barracuda Email Security', 'BlockIt', 'Cerb', 'RegEx', 'SPF', 'DNS'],
  },
  {
    company: 'DataAnnotation.tech',
    role: 'AI Code Evaluator',
    years: 'Jan 2025 – Present',
    since: 'Jan 2025',
    description: [
      'Reviewed and rated AI-generated Python code.',
      'Provided feedback to improve large language models.',
    ],
    stack: ['Python', 'AI', 'Prompt Engineering'],
  },
];

export default function ExperienceCards() {
  const [openIndex, setOpenIndex] = useState(null);

return (
  <div className="columns-2 gap-4 mx-auto sm:columns-2 sm:gap-7 max-w-7xl p-4 sm:ml-5 ">
    {experiences.map((exp, idx) => {
      const isOpen = openIndex === idx;

      return (
        <div
        key={idx}
          className={`hidden sm:block mb-4 break-inside-avoid border border-gray-700 rounded-2xl p-4 bg-gray-900 shadow-lg transition-all transform duration-300 flex flex-col ${
            isOpen ? 'scale-102 z-10' : 'scale-100'
          }`}
        >
          <button
            onClick={() => setOpenIndex(isOpen ? null : idx)}
            className="flex justify-between w-full text-left"
          >
            <div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company} • {exp.years}</p>
            </div>
            <span className="text-gray-400">{isOpen ? '−' : '+'}</span>
          </button>

          {isOpen && (
            <div className="mt-3 text-sm text-gray-300">
              <ul className="list-disc ml-5 space-y-1">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-blue-700/30 text-blue-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      );
    })}
  </div>
);
}