import styles, { layout } from "../style";
import Cocon from "../assets/Cocon-Logo.png";
import hookSvg from "../assets/fishing-hook.svg";
import Device1 from "../assets/Device1.svg";
import Device2 from "../assets/Device2.svg";
import Device3 from "../assets/Device3.svg";
import Device4 from "../assets/Device4.svg";
import QR from "../assets/QR.svg";

const events = [
  {
    id: "event-1",
    title: "Phishing Village",
    subtitle: "@ c0c0n 2025",
    link: "https://india.c0c0n.org/2025/Phishing_Village",
    image: Cocon,
  },
];

const EventCard = ({ title, subtitle, image, link }) => {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className="relative w-[400px] h-[420px]
        bg-gradient-to-br from-[#313131] to-[#1a1a1a]
        rounded-[20px]
        flex items-center justify-center
        text-white
        cursor-pointer
        transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        group overflow-hidden
        border border-gray-700/50"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image */}
<img
  src={image}
  alt={title}
  className="absolute inset-0 w-full h-full object-cover z-[1]
    transition-all duration-300
    group-hover:blur-[2px]
    group-hover:scale-105"
/>


      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent
        opacity-0
        flex flex-col items-start justify-end
        gap-0 p-6 z-[5]
        transition-all duration-300
        group-hover:opacity-100
        group-hover:gap-3"
      >
        <p className="text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </p>
        <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {subtitle}
        </p>

        {link && (
          <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <p className="text-sm font-semibold text-green-400">
              View Event
            </p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const PastEvents = () => (
  <section id="events2" className={`${layout.section} scroll-reveal scroll-section gap-24`}>
    {/* Left Content */}
      <div className="absolute top-20 left-[1rem] w-32 h-32 pointer-events-none z-0 opacity-10">
    <img src={Device1} alt="device" className="w-full h-full object-contain" />
  </div>

  <div className="absolute top-[1rem] left-[50rem] w-20 h-20 pointer-events-none z-0 opacity-10">
    <img src={Device1} alt="device" className="w-full h-full object-contain" />
  </div>

  <div className="absolute top-[30rem] left-[40rem] w-28 h-28 pointer-events-none z-0 opacity-10">
    <img src={Device2} alt="device" className="w-full h-full object-contain" />
  </div>

  <div className="absolute top-10 right-12 w-36 h-36 pointer-events-none z-0 opacity-10">
    <img src={Device3} alt="device" className="w-full h-full object-contain" />
  </div>

  <div className="absolute top-[30rem] left-12 w-32 h-32 pointer-events-none z-0 opacity-10">
    <img src={Device4} alt="device" className="w-full h-full object-contain" />
  </div>

  <div className="absolute top-[80%] left-[70rem] w-32 h-32 pointer-events-none z-0 opacity-10">
    <img src={QR} alt="qr" className="w-full h-full object-contain" />
  </div>

    {/* Cards - All 3 in One Line */}
    <div className={`${layout.sectionImg} flex flex-row gap-6 items-stretch flex-nowrap`}>
      {events.map(event => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
<div className={layout.sectionInfo}>
<h2 className="
  font-arcade
  text-[#00ff1e]
  whitespace-nowrap
  text-2xl
  sm:text-3xl
  md:text-4xl
  lg:text-5xl
">
  Past Events
</h2>


  <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
    Phishing Village has appeared at security conferences and community events,
    showcasing modern phishing techniques and practical defense strategies.
  </p>
</div>

  </section>
);

export default PastEvents;