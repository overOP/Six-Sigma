import React from "react";
import {
  Briefcase,
  ChartLine,
  Globe,
  UserCheck,
  TrendingUp,
  ShieldCheck,
  Settings,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Business Strategy",
    description:
      "Data-driven strategies to improve performance, uncover growth opportunities, and achieve long-term success.",
    icon: <ChartLine className="w-10 h-10 text-blue-600 mb-4" />,
  },
  {
    title: "Operational Excellence",
    description:
      "Optimize internal processes, reduce operational costs, and improve productivity across teams.",
    icon: <Briefcase className="w-10 h-10 text-blue-600 mb-4" />,
  },
  {
    title: "Digital Transformation",
    description:
      "Leverage modern technologies to streamline operations and enhance customer experiences.",
    icon: <Globe className="w-10 h-10 text-blue-600 mb-4" />,
  },
  {
    title: "Management Consulting",
    description:
      "Expert guidance to improve leadership, organizational structure, and decision-making.",
    icon: <UserCheck className="w-10 h-10 text-blue-600 mb-4" />,
  },
  {
    title: "Growth & Scaling",
    description:
      "Strategies to scale your business sustainably and expand into new markets.",
    icon: <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />,
  },
  {
    title: "Risk & Compliance",
    description:
      "Identify risks early and ensure compliance with industry regulations and standards.",
    icon: <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />,
  },
  {
    title: "Process Automation",
    description:
      "Automate repetitive tasks to improve efficiency and reduce operational overhead.",
    icon: <Settings className="w-10 h-10 text-blue-600 mb-4" />,
  },
  {
    title: "HR & Talent Advisory",
    description:
      "Build strong teams through talent strategy, workforce planning, and HR optimization.",
    icon: <Users className="w-10 h-10 text-blue-600 mb-4" />,
  },
];

const Services = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">

      {/* Decorative Blurs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-center text-gray-800 mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Consulting Services
          </span>
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          We provide expert consulting solutions to help businesses grow,
          innovate, and stay competitive in a rapidly changing market.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="transform group-hover:scale-110 transition duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 mt-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button className="inline-flex items-center justify-center px-12 py-4 font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Talk to a Consultant
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;