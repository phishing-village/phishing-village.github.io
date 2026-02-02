import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({ scrollY }) => {
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
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrollY > 50 ? "rgba(0,0,0,0.8)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
        boxShadow:
          scrollY > 50 ? "0 4px 30px rgba(0,0,0,0.1)" : "none",
      }}
    >
      {/* FULL WIDTH BAR */}
      <div className="w-full px-6 sm:px-10 lg:px-14">
        {/* CONTENT WRAPPER */}
        <div className="max-w-[1600px] mx-auto flex items-center justify-between py-4">

          {/* LEFT: LOGO */}
          <img
            src={logo}
            alt="phishing-village"
            className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer"
          />

          {/* DESKTOP NAV */}
          <ul className="list-none hidden sm:flex items-center gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins text-[16px] cursor-pointer transition-colors ${
                  active === nav.title
                    ? "text-white"
                    : "text-dimWhite hover:text-white"
                }`}
                onClick={() => handleNavClick(nav)}
              >
                {nav.title}
              </li>
            ))}
          </ul>

          {/* MOBILE MENU */}
          <div className="sm:hidden flex items-center relative">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-7 h-7 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            {/* MOBILE DROPDOWN */}
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } absolute top-12 right-0 bg-black border border-gray-800 rounded-xl p-6 min-w-[180px] shadow-lg`}
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins text-[16px] cursor-pointer ${
                      active === nav.title
                        ? "text-white"
                        : "text-dimWhite hover:text-white"
                    }`}
                    onClick={() => handleNavClick(nav)}
                  >
                    {nav.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
