import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavData, AboutData } from "../data/nav/data";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 🔥 Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/90  shadow-lg py-3"
          : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* 🔷 Logo */}
        <div className="flex items-center space-x-2 transition-all duration-500">
          <img
            src="/logo.png"
            alt="Logo"
            className={`transition-all duration-500 ${isScrolled ? "w-10" : "w-12"
              }`}
          />
          <h1
            className={`font-bold transition-all duration-500 ${isScrolled ? "text-2xl" : "text-3xl"
              } text-blue-600`}
          >
            <span className="text-green-500">Six</span>Sigma
          </h1>
        </div>

        {/* 🔷 Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {NavData.map((item) => (
            <li key={item.id} className="relative group">
              <Link
                to={item.path}
                className="
                relative
                hover:text-blue-600
                transition duration-300
                after:content-['']
                after:absolute
                after:w-0
                after:h-[2px]
                after:bg-blue-600
                after:left-0
                after:-bottom-1
                after:transition-all
                after:duration-300
                hover:after:w-full
                "
              >
                {item.title}
              </Link>

              {/* 🔽 Desktop Dropdown */}
              {item.title === "About Us" && (
                <ul className="absolute left-0 top-full mt-3 w-44 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {AboutData.map((about) => (
                    <li key={about.id}>
                      <Link
                        to={about.path}
                        className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition"
                      >
                        {about.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* 🔷 Desktop Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button
              className="
      bg-blue-600
      text-white px-6 py-2 rounded-full
      shadow-md
      hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600
      hover:shadow-xl
      hover:scale-105
      transition-all duration-300
      "
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* 🔷 Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-5 bg-white shadow-xl mx-2 rounded-b-2xl mt-2">
          {NavData.map((item) =>
            item.title === "About Us" ? (
              <div key={item.id}>
                <button
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className="flex items-center justify-between w-full py-3 font-medium"
                >
                  About Us
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isMobileAboutOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`pl-4 overflow-hidden transition-all duration-300 ${isMobileAboutOpen
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  {AboutData.map((about) => (
                    <Link
                      key={about.id}
                      to={about.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-sm text-gray-700"
                    >
                      {about.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-medium"
              >
                {item.title}
              </Link>
            )
          )}

          {/* 📱 Mobile Button */}

          <Link to="/contact">
            <button
              onClick={() => setIsOpen(false)}
              className="
    w-full
    bg-blue-600
    text-white px-6 py-3 rounded-full
    shadow-md
    hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600
    hover:shadow-xl
    hover:scale-105
    transition-all duration-300
    "
            >
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;