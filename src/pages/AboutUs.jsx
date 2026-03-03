import React from "react";

const AboutUs = () => {
  return (
    <section className="relative py-24 bg-linear-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-center text-gray-800 mb-6 leading-tight">
          About <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Our Consulting Firm
          </span>
        </h1>

        {/* Intro */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          We are a results-driven consulting firm committed to helping organizations
          solve complex challenges, unlock growth, and achieve sustainable success.
          Our consultants combine industry expertise, strategic thinking, and
          practical execution to deliver measurable impact.
        </p>

        {/* Mission / Approach / Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          
          {[
            {
              title: "Our Mission",
              desc: "To empower businesses with clear strategies, smarter processes, and innovative solutions that drive long-term value.",
            },
            {
              title: "Our Approach",
              desc: "We take a collaborative, data-driven approach—understanding your challenges first, then delivering tailored, actionable solutions.",
            },
            {
              title: "Our Expertise",
              desc: "From strategy and operations to digital transformation, we bring deep industry knowledge and proven methodologies.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-12 max-w-6xl mx-auto mb-16 border border-gray-100">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10">
            Why Choose{" "}
            <span className="text-blue-600">Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "Experienced Consultants",
                desc: "Industry professionals with real-world experience and insights.",
              },
              {
                title: "Tailored Solutions",
                desc: "No templates—every solution is customized to your business.",
              },
              {
                title: "Measurable Results",
                desc: "Focused on outcomes that deliver real, lasting impact.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl hover:bg-blue-100 transition duration-300"
              >
                <h4 className="font-semibold mb-3 text-lg text-gray-800 group-hover:text-blue-600 transition">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="relative inline-flex items-center justify-center px-12 py-4 font-semibold text-white rounded-full bg-linear-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Speak With Our Experts
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;