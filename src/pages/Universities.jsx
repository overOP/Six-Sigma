import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import gsap from "gsap";

const universities = [
  { country: "USA", slug: "usa", logo: "/Countries/USA.jpg" },
  { country: "UK", slug: "uk", logo: "/Countries/UK.jpg" },
  { country: "Canada", slug: "canada", logo: "/Countries/Canada.jpg" },
  { country: "Singapore", slug: "singapore", logo: "/Countries/Singapore.jpg" },
  { country: "Australia", slug: "australia", logo: "/Countries/Australia.webp" },
  { country: "India", slug: "india", logo: "/Countries/india.avif" },
];

const Universities = () => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our <span className="text-blue-600">Partner Universities</span>
          </h1>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Collaborating with world-class universities across the globe
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {universities.map((uni, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => navigate(`/universities/${uni.slug}`)}
              className="cursor-pointer group relative rounded-2xl border border-gray-100
                         bg-white p-6 shadow-sm
                         transition-all duration-400
                         hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Gradient Ring */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Logo */}
                <div className="w-40 h-28 flex items-center justify-center mb-5">
                  <img
                    src={uni.logo}
                    alt={uni.country}
                    className="max-h-full max-w-full object-contain
                               transition-all duration-500
                               group-hover:scale-110"
                  />
                </div>

                {/* Divider */}
                <div className="w-10 h-0.5 bg-blue-500/30 mb-4 group-hover:w-16 transition-all duration-300" />

                {/* Country */}
                <span className="text-sm font-semibold tracking-wide text-gray-700 group-hover:text-blue-600 transition">
                  {uni.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;
