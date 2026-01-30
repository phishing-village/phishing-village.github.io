import { useState, useEffect, useRef } from "react";
import PhishingVillage from "../assets/PhishingVillage.webp";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden scroll-section "
    >
      {/* Background Image */}
<div
  className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`}
>
<img
  src={PhishingVillage}
  alt="phishing"
  className="
    w-full
    h-full
    object-contain
    object-top
    mt-16          /* mobile top margin */
    sm:mt-0        /* remove margin from sm and up */
  "
/>

</div>

      {/* Hero Title */}
<div className="absolute top-[2vh] left-0 w-full z-10 flex justify-center px-6">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          
<h2
  className="
    font-arcade
    text-[#00ff1e]
    text-[18px]      /* mobile */
    xs:text-[22px]
    sm:text-[32px]
    md:text-[44px]
    lg:text-[60px]
    xl:text-[72px]
    leading-tight
    text-center
    whitespace-nowrap
  "
>
  Phishing Village
</h2>
     
        </div>
      </div>
    </section>
  );
};

export default Hero;
