import { useEffect, useState } from "react";
import styles from "./style";
import {
  PastEvents,
  UpcomingEvents,
  Footer,
  Navbar,
  Whatdowedo,
  Hero,
  ContactSection
} from "./components";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("revealed", entry.isIntersecting);
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".scroll-reveal");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const totalScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollProgress =
    totalScroll > 0 ? (scrollY / totalScroll) * 100 : 0;

  return (
    <div className="bg-primary w-full overflow-hidden relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div
          className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* ===== Navbar ===== */}
      <div
        className="fixed w-full z-50 flex justify-center transition-all duration-300"
        style={{
          backgroundColor: scrollY > 50 ? "rgba(0,0,0,0.8)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
          boxShadow:
            scrollY > 50 ? "0 4px 30px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>

      {/* ===== Hero Section ===== */}
      <div
        className={`bg-primary ${styles.flexStart} relative min-h-screen pt-20`}
      >
        <div className={`${styles.boxWidth} relative z-10`}>
          <Hero scrollY={scrollY} />
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexCenter} relative z-10`}
      >
        <div className={styles.boxWidth}>
          <section className="scroll-reveal mb-20">
            <Whatdowedo />
          </section>

          <section className="scroll-reveal mb-20">
            <UpcomingEvents />
          </section>

          <section className="scroll-reveal mb-20">
            <PastEvents />
          </section>



                    <section className="scroll-reveal">
            <ContactSection/>
          </section>
                    <section className="scroll-reveal">
            <Footer />
          </section>
        </div>
      </div>

      {/* ===== Scroll Progress Bar ===== */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default App;
