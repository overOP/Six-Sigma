import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavData, AboutData } from "../data/nav/data";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-12" />
          <h1 className="text-3xl font-bold text-blue-500">
            <span className="text-green-500">Six</span>Sigma
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium ">
          {NavData.map((item) => (
            <li key={item.id} className="relative group">
              <Link to={item.path} className="hover:text-blue-500">
                {item.title}
              </Link>

              {item.title === "About Us" && (
                <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {AboutData.map((about) => (
                    <li key={about.id}>
                      <Link
                        to={about.path}
                        className="block px-4 py-2 hover:text-green-500"
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

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button
              className="
      bg-black text-white px-4 py-2 rounded-2xl
      hover:bg-linear-to-r hover:from-green-500 hover:to-blue-500
      transition-all duration-300
    "
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-5 bg-gray-300 mx-2 rounded-b-2xl">
          {NavData.map((item) =>
            item.title === "About Us" ? (
              <div key={item.id}>
                <button
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className="flex items-center justify-between w-full py-2 font-medium"
                >
                  About Us
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isMobileAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Submenu */}
                <div
                  className={`pl-4 overflow-hidden transition-all duration-300 ${
                    isMobileAboutOpen
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
                className="block py-2 font-medium"
              >
                {item.title}
              </Link>
            ),
          )}

          {/* Mobile Button */}
          <Link to="/contact">
            <button className="w-full bg-black text-white px-4 py-2 rounded-2xl hover:bg-linear-to-r hover:from-green-500 hover:to-blue-500 transition-all duration-300 mt-4">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
