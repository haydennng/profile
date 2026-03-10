const projects = [
  {
    name: 'eehxpe',
    tagline: 'Multi-Sport Web Platform',
    url: 'https://eehxpe.com/badminton',
    github: 'https://github.com/haydennng/eehxpe',
    description:
      'A self-hosted web platform for managing competitive badminton sessions among friends. Generates fair 2v2 matchups, tracks MMR rankings, and records match history — built to scale for additional sports.',
    highlights: [
      'Fair matchup algorithm that balances partner/opponent rotation across sessions',
      'MMR ranking system to track player skill over time',
      'Session management with match history, scores, and game valuation',
      'Player authentication, profiles, dashboards, and public stat pages',
      'Self-hosted on a home server with Cloudflare Tunnel for HTTPS & DDoS protection',
      'CI/CD pipeline via GitHub Actions with a self-hosted runner for auto-deploy on push',
    ],
    stack: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'Waitress',
      'Cloudflare Tunnel',
      'GitHub Actions',
      'HTML/CSS',
      'JavaScript',
    ],
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl px-4">
      {projects.map((project) => (
        <div key={project.name}>
          {/* Project header */}
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2 className="text-lg font-semibold text-white">{project.name}</h2>
            <span className="text-gray-400 text-xs">{project.tagline}</span>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-1 text-xs">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300"
            >
              Live Site ↗
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300"
              >
                GitHub ↗
              </a>
            )}
          </div>

          {/* Description */}
          <p className="mt-3 text-sm text-gray-300">{project.description}</p>

          {/* Highlights */}
          <ul className="mt-3 list-disc ml-5 space-y-1 text-sm text-gray-300">
            {project.highlights.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-[10px] bg-blue-700/30 text-blue-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
