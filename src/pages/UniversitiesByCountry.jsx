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
    <section className="py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 capitalize">
          Universities in{" "}
          <span className="text-blue-600">{country}</span>
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredUniversities.map((uni) => (
            <div
              key={uni.slug}
              onClick={() =>
                navigate(`/universities/${country}/${uni.slug}`)
              }
              className="uni-card cursor-pointer bg-white rounded-xl border p-6
                         shadow-sm hover:shadow-xl hover:-translate-y-2
                         transition-all duration-300"
            >
              {/* Card Content */}
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="h-16 w-16 flex items-center justify-center">
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-lg leading-snug">
                    {uni.name}
                  </h3>
                  <p className="text-xs text-blue-500 mt-1 uppercase tracking-wide">
                    {uni.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitiesByCountry;
