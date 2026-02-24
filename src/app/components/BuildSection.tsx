import { AnimateOnScroll } from "./AnimateOnScroll";

export function BuildSection() {
  return (
    <section id="jd-advantage" aria-label="Build What's Next - JD Institute Philosophy" className="max-w-[1392px] mx-auto px-5 md:px-8 py-16 md:py-24 font-['Roboto',sans-serif]">
      <AnimateOnScroll>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <span className="text-[14px] font-medium leading-[20px] tracking-[0.1px] shrink-0 uppercase">
            Build What's Next
          </span>
          <p className="text-[20px] leading-[28px] md:text-[24px] md:leading-[32px] max-w-[1037px]">
            <span className="transition-colors duration-500" style={{ color: 'var(--t-muted)' }}>At JD Institute, we reject the default. We don't ask you to 'find your passion' we ask you to build your empire. </span>
            <span>
              Our classrooms are incubation labs where ideas are tested, torn apart, and rebuilt until they are market-ready.
            </span>
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
