const OurStory = () => {
  return (
    <section className="our-story py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">
          Our <span className="text-blue-600">Story</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          From humble beginnings to becoming trusted consultants for businesses worldwide, 
          our journey has been driven by passion, expertise, and a commitment to delivering 
          real results.
        </p>

        {/* Timeline / Story */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">Founded in 2010</h3>
              <p className="text-gray-600">
                We started as a small consulting firm with a vision to empower businesses 
                with strategic insights and practical solutions.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img 
                src="/images/founded.jpg" 
                alt="Founded" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:justify-between">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">Growth & Expansion</h3>
              <p className="text-gray-600">
                Over the years, we expanded our team and services, helping more clients 
                achieve operational excellence and sustainable growth.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img 
                src="/images/growth.jpg" 
                alt="Growth" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">Today & Beyond</h3>
              <p className="text-gray-600">
                Today, we continue to innovate and adapt, delivering tailored consulting 
                solutions that make a meaningful difference for our clients worldwide.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img 
                src="/images/today.jpg" 
                alt="Today" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Connect With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
