import { Map, Phone, Mail, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
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

            <p className="mt-4 text-gray-600 max-w-sm leading-relaxed">
              Empowering students and professionals to achieve global education
              goals with expert guidance and trusted consultancy.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-600">
                <Map className="w-5 h-5 mt-1 text-green-500" />
                <span>New Baneshwor, Kathmandu, Nepal</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+977 9801059359</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
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
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Follow Us
            </h3>

            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/sixsigma.edunepal"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .593 0 1.326v21.348C0 23.407.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.407 24 22.674V1.326C24 .593 23.403 0 22.675 0z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/sixsigmaedunepal"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-400 hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.637.961-.689 1.8-1.56 2.46-2.548z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sixsigma.edunepal/"
                className="p-3 rounded-full bg-gray-100 hover:bg-pink-500 hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-10 border-gray-200" />

        {/* BOTTOM */}
        <p className="text-center text-gray-500 text-sm">
          © 2024 Six Sigma Education Consultancy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
