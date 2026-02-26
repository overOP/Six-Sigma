import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    whatsapp: "",
    dob: "",
    address: "",
    gender: "",
    desiredCourse: "",
    desiredCollege: "",
    alternativeCollege: "",
    budget: "",
    country: "",
    academicStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // List of required fields
  const requiredFields = [
    "fullName",
    "email",
    "mobile",
    "gender",
    "desiredCourse",
    "desiredCollege",
    "country",
    "academicStatus",
  ];

  // Check for empty fields
  const emptyFields = requiredFields.filter((field) => !formData[field].trim());

  if (emptyFields.length > 0) {
    toast.error("Please fill in all required fields before submitting!", {
      position: "top-center",
      autoClose: 3000,
    });
    return; // Stop form submission
  }

  console.log("Form submitted:", formData);

  toast.success("Your application has been submitted successfully!", {
    position: "top-center",
    autoClose: 3000,
  });

  // Reset form
  setFormData({
    fullName: "",
    email: "",
    mobile: "",
    whatsapp: "",
    dob: "",
    address: "",
    gender: "",
    desiredCourse: "",
    desiredCollege: "",
    alternativeCollege: "",
    budget: "",
    country: "",
    academicStatus: "",
  });
};

  return (
    <div className="min-h-screen pt-28 px-4 bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="border border-white rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="bg-linear-to-r from-indigo-800 via-blue-800 to-indigo-900 text-white py-12 px-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-wide">
              <span className="text-green-500">Six</span>
              <span className="text-blue-500">Sigma</span> Education Consultancy
            </h1>
            <p className="mt-4 text-sm opacity-90 tracking-wider">
              <span className="hover:text-amber-400">Old Baneshwor, Kathmandu</span> |{" "}
              <span className="hover:text-amber-400">+977 9812345678</span>
            </p>
            <p className="text-sm opacity-90 hover:text-amber-400">
              info@sixsigmaedu.com.np
            </p>
          </div>

          {/* Form */}
          <div className="px-10 py-14">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-14 tracking-wide">
              Admission <span className="text-blue-500">Application</span> Form
            </h2>

            <form className="space-y-16" onSubmit={handleSubmit}>
              {/* Personal Details */}
              <Section title="Personal Details" color="bg-indigo-700">
                <div className="grid md:grid-cols-3 gap-8">
                  <Input label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                  <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
                  <Input label="Mobile Number" type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />
                  <Input label="WhatsApp Number" type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
                  <Input label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} />
                  <Input label="Address" type="text" name="address" value={formData.address} onChange={handleChange} />
                </div>

                <div className="mt-8">
                  <label className="block mb-4 font-semibold text-gray-700">Gender</label>
                  <div className="flex gap-12">
                    <Radio label="Male" name="gender" checked={formData.gender === "Male"} onChange={handleChange} />
                    <Radio label="Female" name="gender" checked={formData.gender === "Female"} onChange={handleChange} />
                    <Radio label="Other" name="gender" checked={formData.gender === "Other"} onChange={handleChange} />
                  </div>
                </div>
              </Section>

              {/* Course Details */}
              <Section title="Course Details" color="bg-blue-700">
                <div className="grid md:grid-cols-3 gap-8">
                  <Input label="Desired Course" type="text" name="desiredCourse" value={formData.desiredCourse} onChange={handleChange} />
                  <Input label="Desired College" type="text" name="desiredCollege" value={formData.desiredCollege} onChange={handleChange} />
                  <Input label="Alternative College" type="text" name="alternativeCollege" value={formData.alternativeCollege} onChange={handleChange} />
                  <Input label="Estimated Budget" type="text" name="budget" value={formData.budget} onChange={handleChange} />
                  <Input label="Desired Country" type="text" name="country" value={formData.country} onChange={handleChange} />

                  <div>
                    <label className="block mb-3 font-semibold text-gray-700">Academic Status</label>
                    <select className="input-style" name="academicStatus" value={formData.academicStatus} onChange={handleChange}>
                      <option value="">--Select--</option>
                      <option value="Bachelor Degree">Bachelor Degree</option>
                      <option value="Master Degree">Master Degree</option>
                    </select>
                  </div>
                </div>
              </Section>

              <div className="pt-10 flex justify-center">
                <button
                  type="submit"
                  className="px-12 py-4 rounded-2xl font-semibold text-white text-lg bg-purple-700 hover:bg-linear-to-r from-indigo-700 via-blue-700 to-indigo-800 cursor-pointer"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      <ToastContainer />

      <style>
        {`
          .input-style {
            width: 100%;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 14px 18px;
            font-size: 14px;
            background: rgba(255,255,255,0.8);
            transition: all 0.3s ease;
          }
          .input-style:focus {
            background: #ffffff;
            border-color: #4f46e5;
            box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

const Section = ({ title, color, children }) => (
  <div>
    <div className="flex items-center gap-4 mb-8">
      <div className={`w-1.5 h-7 ${color} rounded-full`}></div>
      <h3 className="text-xl font-bold uppercase tracking-wide text-gray-800">{title}</h3>
    </div>
    {children}
  </div>
);

const Input = ({ label, type, name, value, onChange }) => (
  <div>
    <label className="block mb-3 font-semibold text-gray-700">{label}</label>
    <input type={type} className="input-style" name={name} value={value} onChange={onChange} />
  </div>
);

const Radio = ({ label, name, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer text-gray-700 font-medium">
    <input type="radio" name={name} value={label} checked={checked} onChange={onChange} className="accent-indigo-600 w-5 h-5" />
    {label}
  </label>
);

export default Apply;