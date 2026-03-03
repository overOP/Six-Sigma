import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import gsap from "gsap";
import { universitiesData } from "../data/home/data";

const UniversitiesByCountry = () => {
  const { country } = useParams();
  const navigate = useNavigate();

  const filteredUniversities = universitiesData.filter(
    (uni) => uni.country === country
  );

  useEffect(() => {
    gsap.fromTo(
      ".uni-card",
      { opacity: 0, y: 30, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
      }
    );
  }, [country]);

  return (
    <section className="py-24 bg-linear-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center">
          Universities in{" "}
          <span className="text-blue-600">{country}</span>
        </h1>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredUniversities.map((uni) => (
            <div
              key={uni.slug}
              onClick={() => navigate(`/universities/${country}/${uni.slug}`)}
              className="uni-card cursor-pointer bg-white rounded-2xl border border-gray-200 p-6
                         shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300
                         flex flex-col justify-between gap-4"
            >
              {/* Logo */}
              <div className="flex items-center justify-center h-20 mb-4">
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="text-center">
                <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
                  {uni.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-500 mt-1 uppercase tracking-wide">
                  {uni.country}
                </p>
              </div>

              {/* Button */}
              <div className="mt-4 flex justify-center">
                <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full 
                                   hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredUniversities.length === 0 && (
          <p className="text-center text-gray-500 mt-12 text-lg">
            No universities found in <span className="font-semibold">{country}</span>.
          </p>
        )}
      </div>
    </section>
  );
};

export default UniversitiesByCountry;