import React from "react";

const Apply = () => {
  return (
    <div className="max-w-xl mx-auto my-20 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Personal Details</h1>
      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="xyz@email.com"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobile" className="block mb-1 font-medium">
            Mobile Number:
          </label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 
            [appearance:textfield]                        
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:m-0
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-outer-spin-button]:m-0"
          />
        </div>

        {/* WhatsApp Number */}
        <div>
          <label htmlFor="whatsapp" className="block mb-1 font-medium">
            WhatsApp Number:
          </label>
          <input
            type="number"
            name="whatsapp"
            id="whatsapp"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500
            [appearance:textfield]                        
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:m-0
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-outer-spin-button]:m-0
            "
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob" className="block mb-1 font-medium">
            Date of Birth:
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block mb-1 font-medium">
            Address:
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Gender */}
        <div>
          <span className="block mb-1 font-medium">Gender:</span>
          <label htmlFor="male" className="mr-3">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              className="mr-1"
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              className="mr-1"
            />
            Female
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Apply;
