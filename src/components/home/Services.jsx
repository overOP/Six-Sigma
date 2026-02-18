import React, { forwardRef } from "react";

const services = [
  {
    title: "Study Abroad Counseling",
    desc: "Personalized guidance to choose the right country, university, and course.",
  },
  {
    title: "University Admission Support",
    desc: "Complete assistance with applications, SOPs, and admission processes.",
  },
  {
    title: "Visa & Documentation",
    desc: "Expert help with visa filing, interviews, and financial documentation.",
  },
  {
    title: "Career & Course Counseling",
    desc: "Strategic counseling to align education with long-term career goals.",
  },
  {
    title: "Test Preparation Guidance",
    desc: "Support for IELTS, PTE, SAT, GRE preparation and planning.",
  },
  {
    title: "Legal & Compliance Consulting",
    desc: "Clear advice on education laws, regulations, and compliance matters.",
  },
];

const Services = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="services-section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card rounded-3xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Services;
