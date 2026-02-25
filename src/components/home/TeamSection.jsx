const TeamSection = () => {
  return (
    <section className="team-section py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-24">
          Our <span className="text-blue-500">Expert</span> <span className="text-red-500">Team</span>
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">
          {/* LEFT */}
          <div className="team-card lg:-mt-16 text-center relative group overflow-hidden rounded-3xl">
            <img
              src="/1.jpg"
              alt="Christina Rimal"
              className="w-full h-72 object-cover rounded-3xl"
            />
            {/* Overlay with blur */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
              <p
                className="text-white text-lg font-bold "
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Christina Rimal
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="team-card text-center lg:mt-25 relative group overflow-hidden rounded-3xl">
            <img
              src="/2.jpg"
              alt="Praisha Khatiwada"
              className="w-full h-105 object-cover rounded-3xl"
            />
            {/* Overlay with blur */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
              <p
                className="text-white text-xl font-bold"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Praisha Khatiwada
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="team-card lg:mt-55 text-center relative group overflow-hidden rounded-3xl">
            <img
              src="/3.jpg"
              alt="Apekshya Gautam"
              className="w-full h-72 object-cover rounded-3xl"
            />
            {/* Overlay with blur */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
              <p
                className="text-white text-lg font-semibold"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Apekshya Gautam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
