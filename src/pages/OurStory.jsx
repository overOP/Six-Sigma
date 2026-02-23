import React, { useRef, useEffect, useState } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const timelineRef = useRef(null);
  const arrowRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("down"); // track scroll direction

  const timeline = [
    {
      title: "Founded in 2010",
      desc: "We started as a small consulting firm with a vision to empower businesses with strategic insights and practical solutions.",
      img: "https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg",
    },
    {
      title: "Growth & Expansion",
      desc: "Over the years, we expanded our team and services, helping more clients achieve operational excellence and sustainable growth.",
      img: "https://img.freepik.com/free-vector/tiny-business-people-with-growing-graph-progress-report-company-teamwork-performance-boost-market-promotion-plan-flat-vector-illustration-success-leadership-office-achievement-concept_74855-20959.jpg",
    },
    {
      title: "Today & Beyond",
      desc: "Today, we continue to innovate and adapt, delivering tailored consulting solutions that make a meaningful difference for our clients worldwide.",
      img: "https://img.freepik.com/free-psd/trees-illustration-isolated_23-2151172257.jpg",
    },
  ];

  useEffect(() => {
    if (!timelineRef.current || !arrowRef.current) return;

    const timelineEl = timelineRef.current;
    const arrowEl = arrowRef.current;
    let lastScrollY = window.scrollY;

    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Animate arrow along timeline
    gsap.to(arrowEl, {
      y: timelineEl.offsetHeight - arrowEl.offsetHeight,
      ease: "none",
      scrollTrigger: {
        trigger: timelineEl,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false,
      },
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-center text-gray-800 mb-8">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Story
          </span>
        </h1>

        {/* Intro */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-20 text-lg">
          From humble beginnings to becoming trusted consultants for businesses worldwide,
          our journey has been driven by passion, expertise, and a commitment to delivering
          real results.
        </p>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

          {/* Arrow */}
          <div
            ref={arrowRef}
            className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-0"
          >
            {scrollDir === "down" ? (
              <FaLongArrowAltDown className="text-blue-600 text-4xl p-1" />
            ) : (
              <FaLongArrowAltUp className="text-blue-600 text-4xl p-1" />
            )}
          </div>

          {/* Timeline Items */}
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`timeline-item mb-16 flex flex-col md:flex-row items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="md:w-1/2 md:px-12">
                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-1/2 mt-8 md:mt-0 md:px-12 relative">
                <div className="overflow-hidden rounded-2xl shadow-xl group">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="inline-flex items-center justify-center px-12 py-4 font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Connect With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;