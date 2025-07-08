const sections = ['Experience', 'Skills', 'Education'];

export default function Header({ activeIndex, setActiveIndex }) {
  return (
    <header className="px-6 pt-6">
      {/* Top row: name/tagline on left, contact on right */}
      <div className="flex justify-between items-start">
        <div className="flex gap-6">
          <h1>&lt;ng.hayden&gt;</h1>
          <ul className="flex flex-col gap-1 text-l font-bold text-gray-400">
            <li>#Design</li>
            <li>#Develop</li>
            <li>#Deploy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-400 text-right leading-5">
          <p>haydenhtng@gmail.com</p>
          <a href="https://linkedin.com/in/hayden-ng-linked" target="blank" className="hover:text-green-300">linkedin.com/in/hayden-ng-linked</a>
          <p>Port Moody, BC</p>
        </div>
      </div>

      {/* Summary */}
      <p className="mt-4 max-w-4xl text-base text-gray-500 font-normal">
        /* 
        Full-stack developer with 8+ years of experience building secure, high-traffic apps using ColdFusion, PHP, MySQL, JavaScript, HTML, and CSS. 
        From backend logic to frontend polish — and recently, AI code evaluation — I bridge performance with precision.
        */
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
