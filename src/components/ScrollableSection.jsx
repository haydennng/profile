export default function ScrollableSection({ scrollableRef, children }) {
  return (
    <div
      ref={scrollableRef}
      className="h-full overflow-y-auto pr-4 scroll-smooth custom-scrollbar-left"
      data-section
    >
      <div className="[direction:ltr] ml-10">
        {children}
      </div>
    </div>
  );
}