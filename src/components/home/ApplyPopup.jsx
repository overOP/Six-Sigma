import React, { useState, useEffect } from "react";
import Message from "../../pages/Message";

const ApplyPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000); // popup opens after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      
      <div className="relative w-[90%] max-w-md bg-white rounded-xl shadow-xl p-6">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-1 right-1 text-2xl font-bold cursor-pointer text-black hover:text-red-700 transition-colors"
        >
          ×
        </button>

        <Message />

      </div>

    </div>
  );
};

export default ApplyPopup;