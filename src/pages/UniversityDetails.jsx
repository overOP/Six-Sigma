import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";
import gsap from "gsap";
import { universitiesData } from "../data/home/data";
import { coursesData } from "../data/home/courses";
import { FaGraduationCap, FaMapMarkerAlt, FaGlobe, FaStar } from "react-icons/fa";

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
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -80, scale: 1.1 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      );
    }

    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }

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
      <div className="py-28 text-center text-gray-500 text-lg font-medium">
        University not found
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      {uni.cover && (
        <div
          ref={heroRef}
          className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center"
        >
          <img
            src={uni.cover}
            alt={uni.name}
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/40 to-transparent" />

          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl mb-4 animate-fadeIn">
              {uni.name}
            </h1>
            <p className="text-blue-300 uppercase tracking-widest text-sm md:text-base mb-4">
              {uni.country.toUpperCase()}
            </p>
            {uni.tagline && (
              <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
                {uni.tagline}
              </p>
            )}
          </div>
        </div>
      )}

      {/* UNIVERSITY DETAILS */}
      <section className="-mt-32 relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white/85 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto space-y-12">

            {/* HEADER */}
            <div
              ref={infoRef}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              {uni.logo && (
                <div className="h-36 w-36 md:h-40 md:w-40 rounded-2xl border border-gray-200 bg-white p-4 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              <div className="text-center md:text-left space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                  {uni.name}
                </h2>
                <p className="text-blue-600 font-semibold md:text-lg">
                  {uni.country.toUpperCase()}
                </p>
                {uni.type && (
                  <p className="text-gray-500 italic">{uni.type}</p>
                )}

                {/* Stats Badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                  {uni.location && <StatBadge icon={<FaMapMarkerAlt />} label={uni.location} />}
                  {uni.ranking && <StatBadge icon={<FaStar />} label={`Rank ${uni.ranking}`} />}
                  {uni.students && <StatBadge icon={<FaGraduationCap />} label={`${uni.students} Students`} />}
                  {uni.website && <StatBadge icon={<FaGlobe />} label={<a href={uni.website} target="_blank" rel="noreferrer" className="hover:underline">{uni.website}</a>} />}
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            {uni.description && (
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-blue-600 pl-4">
                  About the University
                </h3>

                <div className="text-gray-700 leading-relaxed space-y-5 text-base md:text-lg">
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
        <section className="py-20 bg-linear-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-green-600 mb-12">
                Courses <span className="text-blue-500">Offered</span>
              </h2>

              <div
                ref={coursesRef}
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
              >
                {courseEntry.courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-6 border border-gray-200 rounded-3xl
                    bg-white hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <FaGraduationCap className="text-blue-600 text-2xl shrink-0" />
                    <p className="text-gray-800 font-medium text-base md:text-lg">
                      {course}
                    </p>
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

const StatBadge = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition">
    <span className="text-blue-600">{icon}</span>
    {label}
  </div>
);

export default UniversityDetails;