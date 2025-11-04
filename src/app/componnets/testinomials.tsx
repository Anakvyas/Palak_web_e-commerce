"use client";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Mohd Anwar",
    text: "Palak Aluminium delivers exceptional quality and service. Highly satisfied with their professionalism and product durability!",
  },
  {
    id: 2,
    name: "Muhammed Ansab",
    text: "Outstanding experience! Their aluminium products are top-notch and delivery was on time. Highly recommend!",
  },
  {
    id: 3,
    name: "Sana Khan",
    text: "The finish and quality are superb. Customer service is excellent — they really care about satisfaction!",
  },
  {
    id: 4,
    name: "Rohit Verma",
    text: "I've been using Palak products for a while now, and they never disappoint. Very reliable team!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto change every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-black text-white text-center flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold tracking-wide mb-12 relative z-10">
        <span className="text-amber-400">T</span>estimonials
        <div className="w-32 h-1 bg-amber-400 mx-auto mt-3 rounded-full"></div>
      </h2>

      {/* Testimonial Fade Wrapper */}
      <div className="relative w-full max-w-3xl h-[320px] flex items-center justify-center">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="bg-[#111] rounded-2xl p-10 flex flex-col items-center justify-center max-w-lg w-full shadow-2xl border border-gray-800 transform transition-all duration-700 hover:scale-[1.02]">
              <FaUserCircle className="text-amber-400 text-6xl mb-4 animate-pulse" />
              <FaQuoteLeft className="text-amber-400 text-2xl mb-3 opacity-80" />
              <p className="text-gray-300 italic mb-6 text-center leading-relaxed text-lg">
                “{t.text}”
              </p>
              <div className="w-16 h-[1px] bg-gray-700 mb-3"></div>
              <h4 className="font-bold text-amber-400 uppercase tracking-wide text-lg">
                {t.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-10 space-x-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i ? "bg-amber-400 scale-125" : "bg-gray-600"
            }`}
          ></button>
        ))}
      </div>

      {/* Background Glow Effect */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
