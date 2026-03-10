
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
import { Link } from "react-router";

const services = [
  {
    title: "Business Strategy",
    description:
      "Data-driven strategies to improve performance and unlock long-term growth.",
    icon: <ChartLine size={40} />,
  },
  {
    title: "Operational Excellence",
    description:
      "Optimize processes, reduce costs, and boost efficiency across teams.",
    icon: <Briefcase size={40} />,
  },
  {
    title: "Digital Transformation",
    description:
      "Modern technology solutions to enhance customer experiences.",
    icon: <Globe size={40} />,
  },
  {
    title: "Management Consulting",
    description:
      "Leadership advisory and strategic decision-making support.",
    icon: <UserCheck size={40} />,
  },
  {
    title: "Growth & Scaling",
    description:
      "Sustainable strategies for expansion and market leadership.",
    icon: <TrendingUp size={40} />,
  },
  {
    title: "Risk & Compliance",
    description:
      "Proactive risk identification and regulatory compliance.",
    icon: <ShieldCheck size={40} />,
  },
  {
    title: "Process Automation",
    description:
      "Automate workflows to improve productivity and accuracy.",
    icon: <Settings size={40} />,
  },
  {
    title: "HR & Talent Advisory",
    description:
      "Build strong teams with optimized workforce planning.",
    icon: <Users size={40} />,
  },
];

const Services = () => {
  return (
    <section className="relative py-28 bg-linear-to-br from-blue-100 via-indigo-100 to-purple-200 text-black overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
            Premium <span className="text-blue-600">Consulting</span> Services
          </h1>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Transforming businesses with strategy, innovation, and execution excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-px rounded-3xl bg-linear-to-br from-white via-blue-200 to-indigo-200 hover:from-blue-500 hover:to-indigo-500 transition duration-500"
            >
              <div className="bg-white rounded-3xl p-8 h-full flex flex-col items-center text-center shadow-xl group-hover:bg-transparent transition duration-500">

                <div className="mb-6 text-blue-500 group-hover:text-black transition duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-500">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800">
                  {service.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <nav>
          <div className="text-center mt-24">
            <Link to="/Applyonlinenow">
              <button className="px-14 py-4 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 font-semibold text-white shadow-xl hover:scale-105 hover:shadow-indigo-500/40 transition-all duration-300 cursor-pointer">
                Apply Online Now
              </button>
            </Link>
          </div>
        </nav>

      </div>
    </section>
  );
};

export default Services;
