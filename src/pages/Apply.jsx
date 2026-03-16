// src/components/Apply.js
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileUpload from "../pages/FileUpload";

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    whatsapp: "",
    dob: "",
    currentAddress: "",
    permanentAddress: "",
    gender: "",
    desiredCourse: "",
    desiredCollege: "",
    alternativeCollege: "",
    budget: "",
    country: "",
    academicStatus: "",
  });

  const [documents, setDocuments] = useState({
    photo: null,
    citizenship: null,
    transcript10: null,
    character10: null,
    leaving10: null,
    transcript12: null,
    character12: null,
    leaving12: null,
    migration12: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (!file) return;

    if (file.size > 1024 * 1024) {
      toast.error("File size must be less than 1MB!", { position: "top-center", autoClose: 3000 });
      return;
    }

    setDocuments((prev) => ({ ...prev, [name]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
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
    const emptyFields = requiredFields.filter((field) => !formData[field].trim());
    if (emptyFields.length > 0) {
      toast.error("Please fill all required fields!", { position: "top-center", autoClose: 3000 });
      return;
    }

    // Validate documents
    const missingDocs = Object.values(documents).filter((doc) => !doc);
    if (missingDocs.length > 0) {
      toast.error("Please upload all required documents!", { position: "top-center", autoClose: 3000 });
      return;
    }

    // Prepare FormData
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    Object.keys(documents).forEach((key) => data.append(key, documents[key]));

    try {
      const res = await axios.post("http://localhost:5000/api/apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res.data);
      toast.success("Application submitted successfully!", { position: "top-center", autoClose: 3000 });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        whatsapp: "",
        dob: "",
        currentAddress: "",
        permanentAddress: "",
        gender: "",
        desiredCourse: "",
        desiredCollege: "",
        alternativeCollege: "",
        budget: "",
        country: "",
        academicStatus: "",
      });
      setDocuments({
        photo: null,
        citizenship: null,
        transcript10: null,
        character10: null,
        leaving10: null,
        transcript12: null,
        character12: null,
        leaving12: null,
        migration12: null,
      });
    } catch (err) {
      console.error(err);
      toast.error("Server error, try again!", { position: "top-center", autoClose: 3000 });
    }
  };

  return (
    <div className="min-h-screen pt-28 -mt-8 px-4 bg-linear-to-br from-slate-100 via-indigo-50 to-blue-100">
      <div className="max-w-6xl mx-auto rounded-3xl border border-gray-300 overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-indigo-800 via-blue-800 to-indigo-900 text-white py-12 px-6 text-center">
          <h1 className="text-4xl font-extrabold">
            <span className="text-green-400">Six</span>
            <span className="text-blue-400">Sigma</span> Education Consultancy
          </h1>
          <p className="mt-4 text-sm">New Baneshwor, Kathmandu | +977 9812345678</p>
          <p className="text-sm hover:text-green-400 cursor-pointer">info@sixsigmaedu.com.np</p>
        </div>

        {/* Form */}
        <div className="px-10 py-14">
          <h2 className="text-3xl font-bold text-center text-gray-800 ">
            <span className="text-blue-500">Admission</span> Application Form
          </h2>

          {/* Upload User Photo */}
          <div className="flex justify-end mb-8">
            <FileUpload label="PP Size Photo" name="photo" onChange={handleFileChange} file={documents.photo} circle={true} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-16">
            {/* Personal Details */}
            <Section title="Personal Details" color="bg-indigo-700">
              <div className="grid md:grid-cols-3 gap-8">
                <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
                <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
                <Input label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} />
                <Input label="WhatsApp Number" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
                <Input label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} />
                <Input label="Current Address" name="currentAddress" value={formData.currentAddress} onChange={handleChange} />
                <Input label="Permanent Address" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} />

                <div className="mt-1">
                  <label className="block mb-4 font-semibold text-gray-700">Gender</label>
                  <div className="flex gap-10">
                    <Radio label="Male" name="gender" checked={formData.gender === "Male"} onChange={handleChange} />
                    <Radio label="Female" name="gender" checked={formData.gender === "Female"} onChange={handleChange} />
                    <Radio label="Other" name="gender" checked={formData.gender === "Other"} onChange={handleChange} />
                  </div>
                </div>
              </div>
            </Section>

            {/* Course Details */}
            <Section title="Course Details" color="bg-blue-700">
              <div className="grid md:grid-cols-3 gap-8">
                <Input label="Desired Course" name="desiredCourse" value={formData.desiredCourse} onChange={handleChange} />
                <Input label="Desired College" name="desiredCollege" value={formData.desiredCollege} onChange={handleChange} />
                <Input label="Alternative College" name="alternativeCollege" value={formData.alternativeCollege} onChange={handleChange} />
                <Input label="Estimated Budget" name="budget" value={formData.budget} onChange={handleChange} />
                <Input label="Desired Country" name="country" value={formData.country} onChange={handleChange} />

                <div>
                  <label className="block mb-3 font-semibold text-gray-700">Academic Status</label>
                  <select name="academicStatus" value={formData.academicStatus} onChange={handleChange} className="input-style">
                    <option value="">--Select--</option>
                    <option value="Bachelor Degree">Bachelor Degree</option>
                    <option value="Master Degree">Master Degree</option>
                  </select>
                </div>
              </div>
            </Section>

            {/* Document Uploads */}
            <Section title="Attach Your Documents" color="bg-blue-700">
              <div className="grid md:grid-cols-4 gap-8">
                <FileUpload label="Citizenship/Passport" name="citizenship" onChange={handleFileChange} file={documents.citizenship} />
                <FileUpload label="Transcript of 10th" name="transcript10" onChange={handleFileChange} file={documents.transcript10} />
                <FileUpload label="Character Certificate 10th" name="character10" onChange={handleFileChange} file={documents.character10} />
                <FileUpload label="School Leaving Certificate 10th" name="leaving10" onChange={handleFileChange} file={documents.leaving10} />
                <FileUpload label="Transcript of +2/12" name="transcript12" onChange={handleFileChange} file={documents.transcript12} />
                <FileUpload label="Character Certificate +2" name="character12" onChange={handleFileChange} file={documents.character12} />
                <FileUpload label="School Leaving Certificate +2" name="leaving12" onChange={handleFileChange} file={documents.leaving12} />
                <FileUpload label="Migration Certificate +2" name="migration12" onChange={handleFileChange} file={documents.migration12} />
              </div>
            </Section>

            <div className="flex justify-center pt-10">
              <button type="submit" className="px-12 py-4 rounded-2xl font-semibold text-white bg-purple-700 hover:bg-indigo-800 transition cursor-pointer">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />

      {/* Style */}
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

// Section Component
const Section = ({ title, color, children }) => (
  <div>
    <div className="flex items-center gap-4 mb-8">
      <div className={`w-1.5 h-7 ${color} rounded-full`}></div>
      <h3 className="text-xl font-bold uppercase tracking-wide text-gray-800">{title}</h3>
    </div>
    {children}
  </div>
);

// Input Component
const Input = ({ label, type = "text", name, value, onChange }) => (
  <div>
    <label className="block mb-3 font-semibold text-gray-700">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} className="input-style" />
  </div>
);

// Radio Component
const Radio = ({ label, name, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer text-gray-700 font-medium">
    <input type="radio" name={name} value={label} checked={checked} onChange={onChange} className="accent-indigo-600 w-5 h-5" />
    {label}
  </label>
);

export default Apply;