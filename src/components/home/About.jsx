const About = ({ img, title, a, b, c, d, description, longDescription }) => {
  return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 sm:px-6 lg:px-8">
          {/* IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
              <img
                src={img}
                alt="Legal Advisor"
                className="w-full max-w-md lg:max-w-lg object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="text-center lg:text-left">
            <p className="text-green-600 font-semibold uppercase tracking-wider mb-3">
              {title}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              <span className="text-green-500">{a}</span>{" "}
              <span className="text-blue-500">{b}</span> {c} <br />
              {d}
            </h1>

            <p className="mt-6 text-gray-700 max-w-md mx-auto lg:mx-0 text-lg">
                {description}
            </p>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto lg:mx-0 text-base leading-relaxed">
            {longDescription}
            </p>
          </div>
        </div>
  )
}

export default About
