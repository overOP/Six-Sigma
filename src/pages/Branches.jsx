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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4">
          Our <span className="text-blue-600">Global Offices</span>
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          With offices across key regions, we serve clients worldwide and provide
          local expertise backed by global experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {branch.name}
              </h3>

              <div className="space-y-3 text-gray-600 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                  <span>{branch.address}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>{branch.phone}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>{branch.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden shadow">
          <iframe
            title="Company Locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019480930324!2d-122.4194154846816!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3d4dfb37%3A0x123456789abcdef!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1696000000000!5m2!1sen!2sus"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Branches;
