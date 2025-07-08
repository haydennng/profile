import ScrollableSection from './ScrollableSection';

export default function Skills({ scrollableRef }) {
  return (
    <div className="h-full w-full px-6 flex">
      <div className="flex">
        <ScrollableSection scrollableRef={scrollableRef}>
          <div className="flex-1">
           <section className="max-w-4xl text-left space-y-4">
                <div>
                    <h2 className="text-xl font-bold text-green-400">Frontend</h2>
                    <p>HTML/CSS (10y), JavaScript (8y), React (2y), Bootstrap, DataTables</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-green-400">Backend</h2>
                    <p>ColdFusion, PHP, MySQL (8y), Java (3y), Python (1y)</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-green-400">DevOps & Hosting</h2>
                    <p>Git, Bash, Ubuntu Linux, Tomcat, Jetty, cPanel/WHM, DNS, SSL</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-green-400">Tools</h2>
                    <p>WordPress, phpMyAdmin, CentOS, Cerb, Barracuda</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-green-400">Other</h2>
                    <p>English & Cantonese, hardware knowledge, Class 5 BC driver’s license</p>
                </div>
            </section>
          </div>
        </ScrollableSection>
      </div>
    </div>
  );
}
