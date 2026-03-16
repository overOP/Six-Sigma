import React, { forwardRef } from "react";
import {
  GraduationCap,
  FileCheck,
  Plane,
  Target,
  BookOpen,
  Scale,
} from "lucide-react";

const services = [
  {
    title: "Study Abroad Counseling",
    desc: "Personalized guidance to choose the right country, university, and course.",
    icon: GraduationCap,
  },
  {
    title: "University Admission Support",
    desc: "Complete assistance with applications, SOPs, and admission processes.",
    icon: FileCheck,
  },
  {
    title: "Visa & Documentation",
    desc: "Expert help with visa filing, interviews, and financial documentation.",
    icon: Plane,
  },
  {
    title: "Career & Course Counseling",
    desc: "Strategic counseling to align education with long-term career goals.",
    icon: Target,
  },
  {
    title: "Test Preparation Guidance",
    desc: "Support for IELTS, PTE, SAT, GRE preparation and planning.",
    icon: BookOpen,
  },
  {
    title: "Legal & Compliance Consulting",
    desc: "Clear advice on education laws, regulations, and compliance matters.",
    icon: Scale,
  },
];

const Services = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-15 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16">
          Our{" "}
          <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Services
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-200 p-8 
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 mb-6 group-hover:bg-blue-600 transition">
                  <Icon className="text-blue-600 group-hover:text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});

export default Services;