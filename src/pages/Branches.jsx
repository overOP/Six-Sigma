import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const branches = [
  {
    name: "Head Office – New York",
    address: "123 Main Street, New York, NY 10001",
    phone: "+1 212 555 0123",
    email: "nyoffice@consulting.com",
  },
  {
    name: "West Coast Office – San Francisco",
    address: "456 Market Street, San Francisco, CA 94111",
    phone: "+1 415 555 0456",
    email: "sfbranch@consulting.com",
  },
  {
    name: "Europe Office – London",
    address: "789 Queen Street, London, UK SW1A 1AA",
    phone: "+44 20 7946 0123",
    email: "london@consulting.com",
  },
];

const Branches = () => {
  return (
    <section className="relative py-24 bg-linear-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">

      {/* Decorative Blurs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-center text-gray-800 mb-4">
          Our{" "}
          <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Global Offices
          </span>
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          With offices across key regions, we serve clients worldwide and provide
          local expertise backed by global experience.
        </p>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {branch.name}
              </h3>

              <div className="space-y-4 text-gray-600 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <span>{branch.address}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>{branch.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>{branch.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="mt-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          <iframe
            title="Company Locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57105.02877300864!2d85.28493308627274!3d27.708954252227112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1993b17c9b75%3A0xe1ada6e5ee11363f!2sSix%20Sigma%20Education%20counsultancy!5e1!3m2!1sen!2snp!4v1771836536331!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Branches;