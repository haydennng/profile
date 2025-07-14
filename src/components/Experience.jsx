import { useState } from 'react';

const experiences = [
  {
    company: 'Stargate Connections Inc.',
    roles: [
      {
        title: 'Full Stack Developer',
        years: '2016 – Present',
        since: 'Since 2016',
        description: [
          'Designed and deployed data-driven web applications for government-funded recycling and web monitoring services.',
          'Built and maintained the Major Appliance Recycling Roundtable Collection Portal (marrbc.ca/collection-portal), supporting 300+ sites and 450+ users.',
          'Developed MonitNg, a tool to monitor 200+ hosted websites for plugin vulnerabilities, disk usage, and update status—cutting monitoring time by 50%.',
        ],
        stack: ['PowerSite', 'ColdFusion', 'PHP', 'MySQL', 'JavaScript', 'jQuery', 'DataTables'],
      },
      {
        title: 'Web Administrator',
        years: 'June 2016 – Present',
        since: 'Since 2016',
        description: [
          'Managed cPanel/WHM hosting environment for 200+ websites.',
          'Resolved 2,500+ client support tickets and handled routine website modifications.',
        ],
        stack: ['cPanel & WHM', 'PuTTY', 'Cerb', 'WinSCP'],
      },
      {
        title: 'Spam Administrator',
        years: 'Sept 2015 – Present',
        since: 'Since 2015',
        description: [
          'Maintained spam filters for 400+ users using Barracuda and BlockIt.',
          'Resolved and supported over 9,000 tickets related to spam filtering.',
        ],
        stack: ['Barracuda', 'BlockIt', 'SPF', 'RegEx'],
      },
    ],
  },
  {
    company: 'DataAnnotation.tech',
    roles: [
      {
        title: 'AI Code Evaluator',
        years: 'Jan 2025 – Present',
        since: 'Since January',
        description: [
          'Reviewed and rated AI-generated Python code.',
          'Provided feedback to improve large language models.',
        ],
        stack: ['Python', 'AI', 'Prompt Engineering'],
      },
    ],
  },
];

export default function ExperienceFolders() {
  const [openCompany, setOpenCompany] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleCompanyClick = (name) => {
    setOpenCompany(name === openCompany ? null : name);
    setSelectedRole(null); // reset detail view when switching companies
  };

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="max-w-7xl px-4">
      {/* Compact Folder Nav */}
      <div className="w-full max-w-xs text-xs font-mono bg-[#252526] text-gray-300 rounded-md border border-gray-700 mb-4">
        {experiences.map((org) => {
          const isOpen = openCompany === org.company;

          return (
            <div key={org.company}>
              <button
                onClick={() => handleCompanyClick(org.company)}
                className="flex items-center w-full text-left px-2 py-1 hover:bg-[#2d2d2d] rounded-t"
              >
                <span className="mr-1 text-sm">{isOpen ? '▾' : '▸'}</span>
                <span className="text-blue-300 truncate">{org.company}</span>
              </button>

              {isOpen && (
                <ul className="pl-5">
                  {org.roles.map((role, i) => {
                    const isActive = selectedRole?.title === role.title;
                    return (
                      <li key={i}>
                        <button
                          onClick={() => handleRoleClick(role)}
                          className={`flex items-center w-full text-left px-2 py-1 rounded-md ${
                            isActive
                              ? 'bg-[#373737] text-white'
                              : 'hover:bg-[#2a2a2a] text-gray-400'
                          }`}
                        >
                          <span className="mr-2">📄</span>
                          <span className="truncate">{role.title}</span>
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

      {/* Detail Display */}
      {selectedRole && (
        <div className="mt-6 border-t border-gray-600 pt-4">
          <h2 className="text-xl font-semibold">{selectedRole.title}</h2>
          <p className="text-gray-400 text-sm">{selectedRole.years}</p>
          <ul className="mt-3 list-disc ml-5 space-y-1 text-sm text-gray-300">
            {selectedRole.description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedRole.stack.map((tech, i) => (
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
  );
}
