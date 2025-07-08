const sections = ['Experience', 'Skills', 'Education'];

export default function Header({ activeIndex, setActiveIndex }) {
  return (
    <header className="px-6 pt-6">
      {/* Top row: name/tagline on left, contact on right (desktop/tablet only) */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col sm:flex-row sm:items-start md:flex-row md:items-start gap-2 sm:gap-6 md:gap-6">
          <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-3xl font-bold transition-all duration-300">
            &lt;ng.hayden&gt;
          </h1>
          <ul className="flex flex-row sm:flex-col md:flex-col sm:gap-1 gap-5 text-lg font-bold text-green-400">
            <li>#Design</li>
            <li>#Develop</li>
            <li>#Deploy</li>
          </ul>

          {/* Contact Info for small screens (moved below #tags) */}
          <div className="block sm:hidden text-sm text-gray-400 leading-5 mt-2">
            <p>haydenhtng@gmail.com</p>
            <a
              href="https://linkedin.com/in/hayden-ng-linked"
              target="_blank"
              className="hover:text-green-300"
            >
              linkedin.com/in/hayden-ng-linked
            </a>
            <p>Port Moody, BC</p>
          </div>
        </div>

        {/* Contact Info for sm+ screens (still top-right) */}
        <div className="hidden sm:flex flex-col text-sm text-gray-400 text-right leading-5">
          <p>haydenhtng@gmail.com</p>
          <a
            href="https://linkedin.com/in/hayden-ng-linked"
            target="_blank"
            className="hover:text-green-300"
          >
            linkedin.com/in/hayden-ng-linked
          </a>
          <p>Port Moody, BC</p>
        </div>
      </div>

      {/* Summary paragraph */}
      <p className="mt-4 max-w-4xl text-base text-gray-500 font-normal sm:block hidden">
        Full-stack developer with 8+ years of experience building secure, high-traffic apps using ColdFusion, PHP, MySQL, JavaScript, HTML, and CSS. From backend logic to frontend polish — and recently, AI code evaluation — I bridge performance with precision.
      </p>

      {/* Nav */}
      <nav className="flex gap-4 mt-5 lowercase">
        {sections.map((title, idx) => (
          <button
            key={title}
            onClick={() => setActiveIndex(idx)}
            className={`text-lg ${
              idx === activeIndex ? 'text-green-400' : 'text-gray-400'
            } hover:text-green-300 lowercase cursor-pointer`}
          >
            {idx === activeIndex ? `<${title}>` : title}
          </button>
        ))}
      </nav>
    </header>
  );
}