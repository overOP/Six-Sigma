import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const TeamSection = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-24">
          Our <span className="text-blue-600">Expert</span>{" "}
          <span className="text-red-500">Team</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">

          {/* LEFT */}
          <div className="relative group lg:-mt-16 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="/1.jpg"
              alt="Christina Rimal"
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-xl font-bold">Christina Rimal</h3>

              <div className="flex gap-3 mt-3 text-white">
                <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
                <FaFacebookF className="cursor-pointer hover:text-blue-400" />
                <FaInstagram className="cursor-pointer hover:text-pink-400" />
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="relative group lg:mt-24 overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
            <img
              src="/2.jpg"
              alt="Praisha Khatiwada"
              className="w-full h-105 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-2xl font-bold">
                Praisha Khatiwada
              </h3>

              <div className="flex gap-3 mt-3 text-white">
                <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
                <FaFacebookF className="cursor-pointer hover:text-blue-400" />
                <FaInstagram className="cursor-pointer hover:text-pink-400" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative group lg:mt-52 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="/3.jpg"
              alt="Apekshya Gautam"
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-xl font-bold">Apekshya Gautam</h3>

              <div className="flex gap-3 mt-3 text-white">
                <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
                <FaFacebookF className="cursor-pointer hover:text-blue-400" />
                <FaInstagram className="cursor-pointer hover:text-pink-400" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;