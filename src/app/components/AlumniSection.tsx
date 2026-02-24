import Slider from "react-slick";
import { AnimateOnScroll } from "./AnimateOnScroll";

const alumni = [
  {
    img: "/images/alumni-rocky.webp",
    classOf: "Class of 1990",
    name: "Rocky S",
    role: "Celebrity Fashion Designer",
    desc: "Started at JD Institute. Now a global powerhouse styling legends from Bollywood to Hollywood.",
  },
  {
    img: "/images/alumni-shane.webp",
    classOf: "Class of 1994",
    name: "Shane Peacock",
    role: "Luxury Global Designer",
    desc: "From JD Institute labs to styling Beyonce and Lady Gaga on the world's biggest runways.",
  },
  {
    img: "/images/alumni-urvashi.webp",
    classOf: "Class of 1995",
    name: "Urvashi Kaur",
    role: "Founder, Urvashi Kaur",
    desc: "A celebrated name in luxurious pret. Redefining Indian fashion by blending global silhouettes with heritage organic textiles.",
  },
  {
    img: "/images/alumni-jigar.webp",
    classOf: "Class of 2005",
    name: "Jigar Mali",
    role: "Founder, Jigar & Nikita",
    desc: "Couture specialist. Showcasing contemporary Indian craftsmanship at Lakme Fashion Week.",
  },
];

export function AlumniSection() {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 rounded-full opacity-30 [.slick-active_&]:opacity-100 transition-all" style={{ backgroundColor: 'var(--t-text)' }} />
    ),
  };

  return (
    <section
      id="our-alumni"
      aria-label="Notable Alumni from JD Institute"
      className="py-16 md:py-24 font-['Roboto',sans-serif] transition-colors duration-500"
      style={{
        background: `radial-gradient(ellipse 80% 60% at center, var(--t-alumni-1) 0%, var(--t-alumni-2) 20%, var(--t-alumni-3) 40%, var(--t-alumni-4) 65%, var(--t-body-bg) 90%, var(--t-body-bg) 100%)`,
      }}
    >
      <div className="max-w-[1392px] mx-auto px-5 md:px-8">
        {/* Header */}
        <AnimateOnScroll>
          <div className="mb-12 md:mb-20">
            <span className="text-[14px] font-medium leading-[20px] tracking-[0.1px] mb-3 block uppercase">
              The Legacy Wall
            </span>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <h2 className="text-[36px] md:text-[48px] lg:text-[57px] font-medium leading-[1.1] tracking-[-0.25px] max-w-[567px]">
                From JD Classrooms to the Global Stage
              </h2>
              <p className="text-[20px] leading-[28px] md:text-[24px] md:leading-[32px] max-w-[684px]">
                <span>Join the ranks of visionaries who redefined the design landscape. </span>
                <span className="transition-colors duration-500" style={{ color: 'var(--t-muted)' }}>Our alumni aren't just part of the industry, they lead it.</span>
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Alumni Cards - Desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {alumni.map((person, i) => (
            <AnimateOnScroll key={person.name} direction="up" delay={i * 0.1} className="h-full">
              <div className="rounded-[10px] p-[15px] transition-colors duration-500 h-full flex flex-col" style={{ backgroundColor: 'var(--t-card-bg)' }}>
                <div className="h-[260px] lg:h-[360px] rounded-[8px] overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 rounded-[8px] transition-colors duration-500" style={{ background: `linear-gradient(to bottom, var(--t-alumni-bg-from), var(--t-badge))` }} />
                  <img
                    src={person.img}
                    alt={person.name}
                    className="absolute inset-0 w-full h-full object-cover object-top rounded-[8px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <span className="rounded-[5px] px-2 py-1 text-[14px] font-medium leading-[20px] tracking-[0.1px] w-fit transition-colors duration-500" style={{ backgroundColor: 'var(--t-badge)' }}>
                    {person.classOf}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[22px] font-medium leading-[28px]">{person.name}</p>
                    <p className="text-[14px] font-medium leading-[20px] tracking-[0.1px]">{person.role}</p>
                    <p className="text-[16px] leading-[24px] tracking-[0.5px]">{person.desc}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Alumni Cards - Mobile Carousel */}
        <div className="md:hidden pb-16">
          <Slider {...slickSettings}>
            {alumni.map((person) => (
              <div key={person.name} className="px-2">
                <article className="rounded-[10px] p-[15px] transition-colors duration-500 h-full flex flex-col" style={{ backgroundColor: 'var(--t-card-bg)' }}>
                  <div className="h-[360px] rounded-[8px] overflow-hidden mb-6 relative shrink-0">
                    <div className="absolute inset-0 rounded-[8px] transition-colors duration-500" style={{ background: `linear-gradient(to bottom, var(--t-alumni-bg-from), var(--t-badge))` }} />
                    <img
                      src={person.img}
                      alt={`${person.name} - ${person.role}, JD Institute alumni`}
                      className="absolute inset-0 w-full h-full object-cover object-top rounded-[8px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col gap-4 flex-1">
                    <span className="rounded-[5px] px-2 py-1 text-[14px] font-medium leading-[20px] tracking-[0.1px] w-fit transition-colors duration-500 shrink-0" style={{ backgroundColor: 'var(--t-badge)' }}>
                      {person.classOf}
                    </span>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <p className="text-[22px] font-medium leading-[28px]">{person.name}</p>
                      <p className="text-[14px] font-medium leading-[20px] tracking-[0.1px]">{person.role}</p>
                      <p className="text-[16px] leading-[24px] tracking-[0.5px]">{person.desc}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}