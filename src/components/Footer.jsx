const sections = ['Experience', 'Skills', 'Education'];

export default function Footer({ activeIndex, setActiveIndex}) {
    return (
        
         <footer className="px-6 pb-6">
            <nav className="flex gap-4 mt-5 lowercase">
                {sections.map((title, idx) => (
                <button
                    key={title}
                    onClick={() => setActiveIndex(idx)}
                    className={`text-lg ${
                        idx === activeIndex ? 'text-green-400 font-bold' : 'text-gray-400'
                    } hover:text-green-300 lowercase cursor-pointer `}
                >
                     {idx === activeIndex ? `</${title}>` : title}
                </button>
                ))}
            </nav>
            <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold"> &lt;/ng.hayden&gt;</h1>
        </footer>
    );
}