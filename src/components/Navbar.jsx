import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (nav) => {
    setActive(nav.title);
    setToggle(false);

    const section = document.getElementById(nav.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/70 backdrop-blur-md">
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          py-4
          px-4
          sm:px-8
          lg:px-12
        "
      >
        {/* Logo */}
        <img
          src={logo}
          alt="phishing-village"
          className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px]"
        />

        {/* Desktop Nav */}
        <ul className="list-none hidden sm:flex items-center gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                font-poppins
                font-normal
                cursor-pointer
                text-[16px]
                transition-colors
                ${
                  active === nav.title
                    ? "text-white"
                    : "text-dimWhite hover:text-white"
                }
              `}
              onClick={() => handleNavClick(nav)}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Dropdown */}
          <div
            className={`
              ${toggle ? "flex" : "hidden"}
              absolute
              top-16
              right-4
              bg-black
              border
              border-gray-800
              rounded-xl
              p-6
              min-w-[180px]
              shadow-lg
            `}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`
                    font-poppins
                    font-medium
                    cursor-pointer
                    text-[16px]
                    ${
                      active === nav.title
                        ? "text-white"
                        : "text-dimWhite hover:text-white"
                    }
                  `}
                  onClick={() => handleNavClick(nav)}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
