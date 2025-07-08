import ScrollableSection from './ScrollableSection';

export default function Education({ scrollableRef }) {
  return (
    <div className="h-full w-full px-6 flex">
      <div className="flex w-full">
  
            <section className="">
                <h2 className="text-2xl font-bold text-green-400">British Columbia Institute of Technology (BCIT)</h2>
                <p className="text-sm text-gray-400">
                    Computers Systems Technology – Client Server Specialty (2-year Diploma)
                </p>
                <p>Sept 2015 – June 2017</p>
                <p className="mt-2">
                    Coursework included Java, C++, SQL, Agile methods, and software architecture patterns.
                </p>
            </section>

      </div>
    </div>
  );
}
