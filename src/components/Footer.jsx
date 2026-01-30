import styles from "../style";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col px-4`}>
    {/* Bottom Bar */}
    <div
      className="
        w-full
        max-w-6xl
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        pt-6
        border-t
        border-t-[#3F3E45]
        gap-4
      "
    >
      {/* Copyright */}
      <p
        className="
          font-poppins
          font-normal
          text-center
          text-[14px]
          sm:text-[16px]
          text-dimWhite
        "
      >
        © {new Date().getFullYear()} Phishing Village. All Rights Reserved.
      </p>

      {/* Social Icons */}
      <div className="flex flex-row flex-wrap justify-center gap-6">
        {socialMedia.map((social) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="
              w-[22px]
              h-[22px]
              object-contain
              cursor-pointer
              transition-opacity
              hover:opacity-80
            "
            onClick={() => window.open(social.link, "_blank")}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
