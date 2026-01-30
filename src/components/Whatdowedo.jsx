import { useState, useEffect, useRef } from "react";
import styles from "../style";
import hookSvg from "../assets/fishing-hook.svg";
import Device1 from "../assets/Device1.svg";
import Device2 from "../assets/Device2.svg";
import Device3 from "../assets/Device3.svg";
import Device4 from "../assets/Device4.svg";
import QR from "../assets/QR.svg";

const Testimonials = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(false);
            setTimeout(() => {
              setIsAnimated(true);
            }, 100);
          } else {
            setIsAnimated(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative scroll-reveal scroll-section2`}
    >
      {/* SVGs scattered around - NO ANIMATION */}
      {/* Top Left */}
      <div className="absolute top-30 left-30 w-32 h-32 pointer-events-none z-0 opacity-10">
        <img src={Device1} alt="device" className="w-full h-full object-contain" />
      </div>


      {/* Top Right */}
      <div className="absolute top-20 right-12 w-36 h-36 pointer-events-none z-0 opacity-10">
        <img src={Device3} alt="device" className="w-full h-full object-contain" />
      </div>

      {/* Middle Left */}
      <div className="absolute top-[35rem] left-[10rem] w-32 h-32 pointer-events-none z-0 opacity-10">
        <img src={Device2} alt="device" className="w-full h-full object-contain" />
      </div>

      {/* Middle Right */}
      <div className="absolute top-80%] left-32 w-32 h-32 pointer-events-none z-0 opacity-10">
        <img src={QR} alt="qr" className="w-full h-full object-contain" />
      </div>

      {/* ================= WHO WE ARE ================= */}
<div className="w-full max-w-4xl mx-auto text-center mb-24 relative z-[1]">
<h2 className="
  font-arcade
  text-[#00ff1e]
  text-2xl        /* mobile */
  sm:text-4xl
  md:text-5xl
  lg:text-6xl
  mb-6
">
  WHO WE ARE?
</h2>


  <p className="text-gray-300 italic text-lg leading-relaxed animate-fade-in">
    "A community-driven initiative dedicated to advancing phishing
    tradecraft, infrastructure development, and operational execution."
  </p>
</div>


      {/* ================= WHAT WE DO ================= */}
      {/* Background Gradient */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40 animate-pulse" />

<div className="w-full flex items-center md:flex-row flex-col gap-8 relative z-[1]">
        {/* Heading */}
<div className="md:w-auto w-full flex justify-center md:ml-24">
<h2 className="
  font-arcade
  text-[#00ff1e]
  text-xl        /* mobile */
  sm:text-2xl
  md:text-3xl
  lg:text-4xl
  whitespace-nowrap
">
  what we do?
</h2>

</div>


        {/* Card + Hook */}
        <div className="w-full md:mt-0 mt-6 animate-slide-in-right relative flex item-center justify-center md:justify-end">
          <div className="phishing-card-wrapper relative">
            {/* HOOK */}
            <img
              src={hookSvg}
              alt="fishing hook"
              className={`hook-pull ${isAnimated ? "hook-pull--animated" : ""}`}
            />

            {/* CARD */}
            <div
              className={`phishing-card ${
                isAnimated ? "phishing-card--animated" : ""
              }`}
            >
              {/* <div className="phishing-card__content"> */}
                <p className="phishing-card__description">
                  At the Phishing Village, we demonstrate how modern phishing
                  attacks work in real-world environments, so organizations and
                  individuals can learn how to recognize, prevent, and respond
                  to them effectively. We showcase a wide range of phishing
                  techniques, from traditional email-based attacks to modern
                  identity-centric and cloud-based phishing. Our goal is to
                  bridge the gap between theory and reality, helping red teams,
                  blue teams, cloud engineers, and security professionals
                  understand how phishing has evolved and how to stop it before
                  it leads to account compromise, token abuse, or cloud takeover.
                </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;