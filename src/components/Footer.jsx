const sections = ['Experience', 'Skills', 'Education'];

export default function Footer({ activeIndex, setActiveIndex}) {
    return (
        
         <footer className="px-6 py-6">
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
            <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-3xl font-bold"> &lt;ng.hayden&gt;</h1>
        </footer>
    );
}