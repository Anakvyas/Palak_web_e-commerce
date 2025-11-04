"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2  right-10 rotate-90 origin-bottom-right bg-amber-500 hover:bg-amber-400 text-black font-semibold px-4 py-2 rounded-t-md shadow-lg z-[9999] transition-all duration-300"
      >
        Submit Your Requirement
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[99999] backdrop-blur-sm">
          <div className="relative bg-[#111] text-white rounded-lg shadow-2xl w-[90%] max-w-3xl p-8">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-amber-400 transition"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-semibold text-center text-amber-400 mb-6">
              Tell us what you’re looking for
            </h2>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Product / Service Name"
                className="col-span-2 p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <textarea
                placeholder="Describe your requirement in detail"
                className="col-span-2 p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 h-28"
              ></textarea>

              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="col-span-2 p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <button
                type="submit"
                className="col-span-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 rounded-md transition"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
