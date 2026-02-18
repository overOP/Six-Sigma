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
    icon: <ChartLine className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Operational Excellence",
    description:
      "Optimize internal processes, reduce operational costs, and improve productivity across teams.",
    icon: <Briefcase className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Digital Transformation",
    description:
      "Leverage modern technologies to streamline operations and enhance customer experiences.",
    icon: <Globe className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Management Consulting",
    description:
      "Expert guidance to improve leadership, organizational structure, and decision-making.",
    icon: <UserCheck className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Growth & Scaling",
    description:
      "Strategies to scale your business sustainably and expand into new markets.",
    icon: <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Risk & Compliance",
    description:
      "Identify risks early and ensure compliance with industry regulations and standards.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Process Automation",
    description:
      "Automate repetitive tasks to improve efficiency and reduce operational overhead.",
    icon: <Settings className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "HR & Talent Advisory",
    description:
      "Build strong teams through talent strategy, workforce planning, and HR optimization.",
    icon: <Users className="w-8 h-8 text-blue-600 mb-4" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4">
          Our <span className="text-blue-600">Consulting Services</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We provide expert consulting solutions to help businesses grow,
          innovate, and stay competitive in a rapidly changing market.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 text-center flex flex-col items-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-14">
          <button className="bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg hover:bg-blue-700 transition">
            Talk to a Consultant
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
