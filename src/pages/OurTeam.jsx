import React from "react";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Jane Smith",
    role: "Founder & CEO",
    image: "/images/jane.jpg",
    bio: "Visionary leader with a strong background in business strategy, leadership, and organizational growth.",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "John Doe",
    role: "Senior Consultant",
    image: "/images/john.jpg",
    bio: "Specialist in business strategy, operational excellence, and performance optimization.",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Sara Lee",
    role: "Digital Transformation Lead",
    image: "/images/sara.jpg",
    bio: "Expert in helping organizations adopt digital solutions to improve efficiency and scalability.",
    linkedin: "https://linkedin.com/in/saralee",
  },
];

const OurTeam = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4">
          Meet <span className="text-blue-600">Our Experts</span>
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          Our team consists of experienced consultants, strategists, and industry
          experts dedicated to delivering practical solutions and measurable results.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition duration-300 text-center group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100 group-hover:border-blue-600 transition"
              />

              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">
                {member.bio}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-4 text-blue-600 hover:text-blue-700 transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
