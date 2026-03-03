import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";
import gsap from "gsap";
import { universitiesData } from "../data/home/data";
import { coursesData } from "../data/home/courses";

const UniversityDetails = () => {
  const { country, university } = useParams();
  const infoRef = useRef(null);
  const coursesRef = useRef(null);
  const heroRef = useRef(null);

  const uni = universitiesData.find(
    (u) => u.country === country && u.slug === university
  );

  const courseEntry = uni
    ? coursesData.find((c) => c.slug === uni.slug)
    : null;

  useEffect(() => {
    // Hero image fade-in + slide
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -50, scale: 1.05 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
      );
    }

    // Info cards and header
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }

    // Courses
    if (coursesRef.current) {
      gsap.fromTo(
        coursesRef.current.children,
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        }
      );
    }
  }, []);

  if (!uni) {
    return (
      <div className="py-24 text-center text-gray-500">
        University not found
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      {uni.cover && (
        <div ref={heroRef} className="relative h-72 md:h-96 w-full overflow-hidden">
          <img
            src={uni.cover}
            alt={uni.name}
            className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-glinear-to-t from-black/50 to-transparent" />
        </div>
      )}

      {/* UNIVERSITY DETAILS */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 -mt-24 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto space-y-10">
            <div ref={infoRef} className="flex flex-col md:flex-row items-center gap-6">
              {uni.logo && (
                <div className="h-24 w-24 rounded-xl border bg-white p-3 flex items-center justify-center shadow hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="max-h-full object-contain"
                  />
                </div>
              )}

              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold">{uni.name}</h1>
                <p className="text-sm uppercase tracking-wide text-blue-600 mt-1">
                  {uni.country.toUpperCase()}
                </p>
              </div>
            </div>

            {/* INFO CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {uni.location && <InfoCard title="Location" value={uni.location} />}
              {uni.type && <InfoCard title="Type" value={uni.type} />}
              {uni.ranking && <InfoCard title="Ranking" value={uni.ranking} />}
            </div>

            {/* DESCRIPTION */}
            {uni.description && (
              <div>
                <h3 className="text-lg font-semibold mb-4">About the University</h3>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  {uni.description
                    .trim()
                    .split("\n\n")
                    .filter(Boolean)
                    .map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COURSES */}
      {courseEntry?.courses?.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Courses Offered</h2>
              <div ref={coursesRef} className="grid sm:grid-cols-2 gap-4">
                {courseEntry.courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-5 border rounded-xl
                               bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">{course}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

const InfoCard = ({ title, value }) => (
  <div className="border border-red-200 rounded-xl p-4 text-center bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
    <p className="text-xs uppercase text-gray-500 mb-1">{title}</p>
    <p className="font-semibold text-gray-800">{value}</p>
  </div>
);

export default UniversityDetails;