import React, { useState } from "react";

const Message = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    // clear form
    setFormData({
      name: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="bg-blue-800 text-white py-4 text-center rounded">
        <h2 className="text-lg font-bold">
          <span className="text-green-500">Six</span>
          <span className="text-blue-500">Sigma</span> Education Consultancy
        </h2>
        <p className="mt-1 text-sm">
          New Baneshwor, Kathmandu | +977 9812345678
        </p>
        <p className="text-sm hover:text-green-400 cursor-pointer">
          info@sixsigmaedu.com.np
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 hover:border-gray-500 p-2 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 hover:border-gray-500 p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Message;