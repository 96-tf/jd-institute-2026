import Slider from "react-slick";
import { AnimateOnScroll } from "./AnimateOnScroll";

const testimonials = [
  {
    text: "JD was the stepping stone. I learned everything from the basics to professional industry standards, which helped me transition from a student to working with a global brand like H&M.",
    name: "Varshini Loganathan",
    role: "Designer, H&M",
    avatar: "./images/testimonial.webp",
    logo: "./images/logos/h&m.webp",
  },
  {
    text: "The practical exposure at JD Institute gave me the confidence to launch my own label. The industry connections I made during my course were invaluable.",
    name: "Aditi Rao",
    role: "Founder, Studio Aditi",
    avatar: "./images/testimonial2.webp",
    logo: "./images/logos/biba.webp", // Placeholder as Studio Aditi logo is not provided
  },
  {
    text: "From design theory to hands-on pattern making, JD Institute prepared me for the real world of fashion. I couldn't have asked for a better foundation.",
    name: "Karan Mehta",
    role: "Senior Designer, Zara",
    avatar: "./images/testimonial3.webp",
    logo: "./images/logos/zara.webp",
  },
];

export function TestimonialSection() {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="testimonials" aria-label="Student Testimonials" className="max-w-[1392px] mx-auto px-5 md:px-8 py-16 md:py-24 font-['Roboto',sans-serif]">
      <AnimateOnScroll>
        <div className="max-w-[651px] mx-auto pb-12">
          <Slider {...slickSettings}>
            {testimonials.map((t, i) => (
              <div key={i}>
                <blockquote className="flex flex-col items-center gap-4 md:gap-6 text-center px-4">
                  <p className="text-[16px] font-bold leading-[24px] tracking-[0.5px]" aria-hidden="true">
                    &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
                  </p>
                  <p className="text-[16px] font-medium leading-[24px] tracking-[0.5px]">
                    {t.text}
                  </p>
                  <footer className="flex items-end gap-2 md:gap-3">
                    <img src={t.avatar} alt={t.name} className="w-[42px] h-[42px] rounded-full object-cover" loading="lazy" decoding="async" width={42} height={42} />
                    <div className="text-left">
                      <cite className="text-[14px] font-medium leading-[20px] tracking-[0.1px] not-italic block">
                        {t.name}
                      </cite>
                      <p className="text-[14px] font-medium leading-[20px] tracking-[0.1px]">
                        {t.role}
                      </p>
                    </div>
                    <div className="h-[41px] w-[1px] mx-2" style={{ backgroundColor: 'var(--t-text)' }} aria-hidden="true" />
                    <img src={t.logo} alt={`${t.name}'s company logo`} className="h-[37px] w-[55px] object-contain" style={{ filter: 'var(--t-logo-filter)' }} loading="lazy" decoding="async" width={55} height={37} />
                  </footer>
                </blockquote>
              </div>
            ))}
          </Slider>
        </div>
      </AnimateOnScroll>
    </section>
  );
}