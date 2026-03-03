import React from "react";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Jane Smith",
    role: "Founder & CEO",
    image: "https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg",
    bio: "Visionary leader with a strong background in business strategy, leadership, and organizational growth.",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "John Doe",
    role: "Senior Consultant",
    image: "https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg",
    bio: "Specialist in business strategy, operational excellence, and performance optimization.",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Sara Lee",
    role: "Digital Transformation Lead",
    image: "https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg",
    bio: "Expert in helping organizations adopt digital solutions to improve efficiency and scalability.",
    linkedin: "https://linkedin.com/in/saralee",
  },
];

const OurTeam = () => {
  return (
    <section className="relative py-24 bg-linear-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">

      {/* Background Decorative Blur */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-center text-gray-800 mb-4">
          Meet{" "}
          <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Our Experts
          </span>
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          Our team consists of experienced consultants, strategists, and industry
          experts dedicated to delivering practical solutions and measurable results.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-gray-100 text-center"
            >
              
              {/* Image */}
              <div className="relative w-36 h-36 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 blur-md opacity-0 group-hover:opacity-40 transition duration-500"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>

              <p className="text-blue-600 font-medium mb-3">
                {member.role}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {member.bio}
              </p>

              {/* LinkedIn Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;