import React, { useState } from "react";
import {
  AiOutlineUpload,
  AiFillFilePdf,
  AiFillFileImage,
} from "react-icons/ai";

const FileUpload = ({ label, name, onChange, file, circle = false }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) onChange({ target: { name, files: [droppedFile] } });
  };

  const renderFileIcon = (fileName) => {
    const ext = fileName.split(".").pop().toLowerCase();
    if (ext === "pdf")
      return <AiFillFilePdf className="w-12 h-12 text-red-500" />;
    if (["jpg", "jpeg", "png"].includes(ext))
      return <AiFillFileImage className="w-12 h-12 text-green-500" />;
    return <AiOutlineUpload className="w-12 h-12 text-gray-400" />;
  };

  return (
    <div className={circle ? "w-40" : "max-w-md mx-auto"}>
      <div
        className={`
          relative flex flex-col items-center justify-center 
          ${circle ? "w-40 h-40 rounded-full" : "h-56 rounded-3xl"} 
          border-2 p-6 transition-all duration-300 cursor-pointer overflow-hidden
          ${
            isDragging
              ? "border-blue-400 bg-blue-100 shadow-2xl scale-105"
              : "border-dashed border-gray-300 bg-linear-to-br from-gray-50 to-gray-100 hover:shadow-xl hover:scale-105"
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById(name).click()}
      >
        {file ? (
          circle ? (
            // 🔥 Circle Preview (ONLY for PP Photo)
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="flex flex-col items-center animate-fadeIn">
              {renderFileIcon(file.name)}
              <p className="text-green-700 font-semibold mt-3 break-all text-center text-lg">
                {file.name}
              </p>
            </div>
          )
        ) : (
          <div className="flex flex-col items-center text-center">
            <AiOutlineUpload className="w-14 h-14 text-blue-400 mb-3 animate-bounce" />
            {!circle && (
              <>
                <label className="block mb-2 font-bold text-gray-700 text-lg">
                  {label} <span className="text-red-500">*</span>
                </label>
                <p className="text-gray-500 text-sm">
                  Supported: PDF, JPG, JPEG, PNG. Max size 1MB.
                </p>
              </>
            )}
          </div>
        )}

        <input
          id={name}
          type="file"
          name={name}
          onChange={onChange}
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
        />
      </div>

      {/* Button shown ONLY for normal uploads */}
      {!circle && (
        <button
          type="button"
          className="
            mt-5 w-full py-3 rounded-2xl font-semibold text-white 
            bg-linear-to-r from-blue-500 to-indigo-600
            hover:from-green-400 hover:to-blue-500
            shadow-lg hover:shadow-2xl transition-all duration-300
            flex justify-center items-center gap-2 cursor-pointer
            transform hover:scale-105
          "
          onClick={() => document.getElementById(name).click()}
        >
          {file ? "Change File" : "Choose File"}
          <AiOutlineUpload className="w-5 h-5" />
        </button>
      )}

      {/* Label under circle */}
      {circle && (
        <p className="text-center mt-3 text-sm font-semibold text-gray-600">
          {label}
        </p>
      )}
    </div>
  );
};

export default FileUpload;