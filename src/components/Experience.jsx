export default function Experience() {
  return (
    <div className="h-full w-full px-15 flex">
      <div className="flex">
        {/* Column 1 */}
        <div className="flex-1 ">
          <div>
            <h2 className="text-2xl font-bold text-green-400">Stargate Connections Inc</h2>
            <p className="text-sm text-gray-400">Burnaby, BC • June 2016 – Present</p>

            <h3 className="text-xl font-semibold mt-4">MARR Portal</h3>
            <p className="text-sm text-gray-400">Full Stack Developer • May 2018 – Present</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-300">
              <li>ColdFusion + MySQL app for 450+ users across 300+ sites</li>
              <li>Claim tracking grew from $1.27M (2019) to $2.9M (2024)</li>
              <li>Implemented calendars, reports, notification systems</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">MonitNg Monitoring</h3>
            <p className="text-sm text-gray-400">Full Stack Developer • June 2016 – May 2019</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-300">
              <li>Monitored 200+ websites for uptime, security, and plugin status</li>
              <li>Reduced manual monitoring time by 50%</li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-1">
          <div>
            <h3 className="text-xl font-semibold">Web Administrator</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-300">
              <li>Managed hosting for 200+ sites via cPanel, Cerb, SSL, Putty</li>
              <li>Resolved 2,500+ support tickets</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Spam Administrator</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-300">
              <li>Maintained spam filters for 400+ users (SPF, RegEx, DNS)</li>
              <li>Resolved 9,000+ spam and delivery cases</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8">DataAnnotations (Remote)</h2>
            <p className="text-sm text-gray-400">AI Code Quality Evaluator • Jan 2025 – Present</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-300">
              <li>Reviewed AI-generated code (Python, JavaScript)</li>
              <li>Identified bugs and semantic issues</li>
              <li>Provided feedback to improve model quality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}