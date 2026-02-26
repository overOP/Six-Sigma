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
    <section className="relative py-28 bg-linear-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
            Premium <span className="text-blue-500">Consulting</span> Services
          </h1>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Transforming businesses with strategy, innovation, and execution excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-px rounded-3xl bg-linear-to-br from-blue-500/30 via-indigo-500/20 to-transparent hover:from-blue-500 hover:via-indigo-500 transition duration-500"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 h-full flex flex-col items-center text-center hover:bg-white/10 transition duration-500">

                <div className="mb-6 text-blue-400 group-hover:text-white transition duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <nav>
        <div className="text-center mt-24">
          <Link to='/Applyonlinenow'>
          <button className="px-14 py-4 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-xl hover:scale-105 hover:shadow-blue-500/40 transition-all duration-300">
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