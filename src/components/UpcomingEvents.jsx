import styles, { layout } from "../style";
import blank from "../assets/blank.png";

const events = [
  {
    id: "event-1",
    title: "Phishing Village",
    subtitle: "Soon",
    image: blank,
  },
  {
    id: "event-2",
    title: "Phishing Village",
    subtitle: "Soon",
    image: blank,
  },
];

const EventCard = ({ title, subtitle, image }) => (
  <div className="relative w-[300px] h-[400px] bg-gradient-to-br from-[#313131] to-[#1a1a1a] rounded-[20px] flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden border border-gray-700/50">
    {/* Background Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    {/* Image */}
    <img
      src={image}
      alt={title}
      className="absolute w-full h-full object-cover z-[1] transition-all duration-300 group-hover:blur-[3px] group-hover:scale-110"
    />

    {/* Hover Text Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 flex flex-col items-start justify-end gap-0 p-6 z-[5] transition-all duration-300 group-hover:opacity-100 group-hover:gap-3">
      <p className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</p>
      <p className="text-sm text-gray-300 font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{subtitle}</p>
      <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <p className="text-sm font-semibold text-green-400">Upcoming</p>
      </div>
    </div>
  </div>
);

const UpcomingEvents = () => (
  <section id="events1" className={`${layout.section} scroll-reveal scroll-section`}>
    {/* Left Content */}
    <div className={layout.sectionInfo}>
<h2
  className="
    font-arcade
    text-[#00ff1e]
    text-2xl
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    whitespace-normal
    sm:whitespace-nowrap
    text-center
  "
>
  Upcoming Events
</h2>



<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  Join us at our upcoming Phishing Village sessions, where we explore how phishing has evolved beyond emails into identity, cloud, and token-based attacks.
</p>

<ul className="mt-6 space-y-3">
  <li className="flex items-start gap-3 text-dimWhite">
    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full" />
    <span>Live demonstrations of modern phishing techniques</span>
  </li>
  <li className="flex items-start gap-3 text-dimWhite">
    <span className="w-2 h-2 mt-2 bg-purple-500 rounded-full" />
    <span>Hands-on identity and cloud attack simulations</span>
  </li>
  <li className="flex items-start gap-3 text-dimWhite">
    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full" />
    <span>Detection and defense walkthroughs</span>
  </li>
  <li className="flex items-start gap-3 text-dimWhite">
    <span className="w-2 h-2 mt-2 bg-purple-500 rounded-full" />
    <span>Interactive discussions with security practitioners</span>
  </li>
  <li className="flex items-start gap-3 text-dimWhite">
    <span className="w-2 h-2 mt-2 bg-green-400 rounded-full animate-pulse" />
    <span>Stay tuned for event dates, locations, and session details</span>
  </li>
</ul>

    </div>

<div
  className={`
    ${layout.sectionImg}
    flex
    flex-col
    sm:flex-wrap
    lg:flex-row
    lg:flex-nowrap
    justify-center
    gap-6
    mt-8
  `}
>
      {events.map(event => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  </section>
);

export default UpcomingEvents;