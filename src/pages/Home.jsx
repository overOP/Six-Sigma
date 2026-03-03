import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router";
import Years from "../components/home/Years";
import { AboutData } from "../data/home/data";
import About from "../components/home/About";
import TeamSection from "../components/home/TeamSection";
import Services from "../components/home/Services";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const yearsRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    /* ================= HERO TEXT ================= */
    gsap.fromTo(
      heroRef.current.querySelectorAll(".hero-text"),
      { opacity: 0, y: 30, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      }
    );

    /* ================= YEARS FLOAT ================= */
    gsap.to(yearsRef.current, {
      y: 12,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    /* ================= ABOUT ================= */
    gsap.fromTo(
      ".about-item",
      { opacity: 0, y: 30, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      }
    );

    /* ================= TEAM ================= */
    gsap.fromTo(
      ".team-card",
      { opacity: 0, y: 30, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative bg-gray-300  m-2 rounded-3xl overflow-hidden px-4 sm:px-6 lg:px-10min-h-[80vh] sm:min-h-[85vh] lg:min-h-screenflex items-center">
        <div className="container mx-auto pt-24 sm:pt-28 lg:pt-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left">
            <p className="hero-text text-xl font-semibold text-gray-600 mb-4">
              Welcome to <span className="text-green-500">Six</span>{" "}
              <span className="text-blue-500">Sigma</span>
            </p>

            <h1 className="hero-text text-2xl sm:text-3xl lg:text-6xl font-extrabold leading-tight">
              Bridging Aspirations
              <br />
              to <span className="text-red-500">Excellence</span>
            </h1>

            <p className="hero-text mt-6 text-gray-600 max-w-md mx-auto lg:mx-0">
              Professional guidance you can trust.
            </p>

            <div className="hero-text -ml-10 mt-8">
          <button className="px-14 py-4 ml-6 rounded-full bg-linear-to-r from-red-600 to-red-600 font-semibold text-white shadow-xl hover:scale-105 hover:shadow-red-500/40 transition-all duration-300">
                Book a Free Consultation
              </button>
              <Link to='/Applyonlinenow'>
          <button className="px-14 py-4 ml-6 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-xl hover:scale-105 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer">
            Apply Online Now
          </button>
          </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/main2.png"
              alt="Advisor"
              className=" max-w-md lg:max-w-lg object-contain -mt-9"
            />

            <div ref={yearsRef} className="absolute bottom-40 right-0">
              <Years />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section ref={aboutRef} className="py-24 bg-gray-50 mb-12">
        {AboutData.map((about) => (
          <div key={about.id} className="about-item">
            <About {...about} />
          </div>
        ))}
      </section>

      {/* ================= SERVICES ================= */}
      <Services />

      {/* ================= TEAM ================= */}
      <section ref={teamRef}>
        <TeamSection />
      </section>
    </>
  );
};

export default Home;
