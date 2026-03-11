const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'Python', 'SQL', 'PHP', 'ColdFusion'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML/CSS', 'DataTables', 'Bootstrap', 'jQuery'],
  },
  {
    category: 'Back End',
    items: ['Node.js', 'REST API Development', 'MySQL', 'Relational Data Modeling', 'Flask', 'SQLAlchemy'],
  },
  {
    category: 'Data & Analytics',
    items: ['Power BI', 'SQL Analytics', 'Data Aggregation Pipelines', 'Google Charts'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'Linux', 'Git', 'Server Administration', 'GitHub Actions', 'CI/CD'],
  },
  {
    category: 'Platform Tools',
    items: ['WordPress', 'phpMyAdmin', 'Barracuda', 'cPanel & WHM'],
  },
];

export default function Skills() {
  return (
    <div className="max-w-4xl px-4 space-y-5">
      {skills.map(({ category, items }) => (
        <div key={category} className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
          <h2 className="text-sm font-bold text-green-400 w-36 flex-shrink-0 mt-1">{category}</h2>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="px-2 py-1 text-[11px] bg-blue-700/30 text-blue-200 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
