import { Map, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="w-12" />
              <h1 className="text-3xl font-bold">
                <span className="text-green-500">Six</span>
                <span className="text-blue-500">Sigma</span>
              </h1>
            </div>

            <p className="mt-4 max-w-sm leading-relaxed text-gray-300">
              Empowering students and professionals to achieve global education
              goals with expert guidance and trusted consultancy.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg text-gray-300 font-semibold  mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <Map className="w-5 h-5 mt-1 text-green-500" />
                <span className="text-gray-300">New Baneshwor, Kathmandu, Nepal</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+977 9801059359</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <a
                  href="mailto:sixsigma.edunepal@gmail.com"
                  className="hover:text-blue-500 transition"
                >
                  sixsigma.edunepal@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
              Follow Us
            </h3>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/sixsigma.edunepal"
                 target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com/sixsigma_edunepal"
                 target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 hover:bg-black hover:text-white transition-all duration-300"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/sixsigma.edunepal/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 text-gray-600 
             hover:bg-linear-to-tr hover:from-yellow-400 
             hover:via-pink-500 hover:to-purple-600 
             hover:text-white hover:scale-110 
             transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-10 border-gray-200" />

        {/* BOTTOM */}
        <p className="text-center text-gray-300 text-sm">
          © 2024 Six Sigma Education Consultancy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;