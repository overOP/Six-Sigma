import React from "react";

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-6">
          About <span className="text-blue-600">Our Consulting Firm</span>
        </h1>

        {/* Intro */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          We are a results-driven consulting firm committed to helping organizations
          solve complex challenges, unlock growth, and achieve sustainable success.
          Our consultants combine industry expertise, strategic thinking, and
          practical execution to deliver measurable impact.
        </p>

        {/* Mission / Vision / Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with clear strategies, smarter processes,
              and innovative solutions that drive long-term value.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
            <p className="text-gray-600">
              We take a collaborative, data-driven approach—understanding your
              challenges first, then delivering tailored, actionable solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Our Expertise</h3>
            <p className="text-gray-600">
              From strategy and operations to digital transformation, we bring
              deep industry knowledge and proven methodologies.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow p-8 max-w-5xl mx-auto mb-14">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Why Choose <span className="text-blue-600">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">Experienced Consultants</h4>
              <p className="text-gray-600 text-sm">
                Industry professionals with real-world experience and insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tailored Solutions</h4>
              <p className="text-gray-600 text-sm">
                No templates—every solution is customized to your business.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Measurable Results</h4>
              <p className="text-gray-600 text-sm">
                Focused on outcomes that deliver real, lasting impact.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg hover:bg-blue-700 transition">
            Speak With Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
