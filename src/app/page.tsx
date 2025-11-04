"use client"
import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import Features from './features';
import Products from './products/page';
import Testimonials from './componnets/testinomials';
import QuickEnquiry from './componnets/Quixk';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans logo-text">
      {/* Navbar */}
      <header className="w-full shadow-md bg-black/90 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-white tracking-wide ">
            Palak<span className="text-amber-400">Aluminium</span> | AS Enterprises
          </h1>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#home" className="hover:text-amber-400 transition">Home</a>
              <a href="#about" className="hover:text-amber-400 transition">About Us</a>
              <a href="#products" className="hover:text-amber-400 transition">Products</a>
              <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
            </nav>

            <div className="flex items-center bg-gray-800 rounded-full px-3 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none text-sm text-white placeholder-gray-400"
              />
              <Search className="ml-2 w-4 h-4 text-amber-400" />
            </div>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-amber-400" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <nav className="flex flex-col space-y-4 p-4 text-center">
              <a href="#home" className="hover:text-amber-400 transition">Home</a>
              <a href="#about" className="hover:text-amber-400 transition">About Us</a>
              <a href="#products" className="hover:text-amber-400 transition">Products</a>
              <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
            </nav>
          </div>
        )}
      </header>

      
      {/* Hero Section */}
      <section
        id="home"
        className="h-[65vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-black via-gray-900 to-black"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-amber-400 mb-4 test">
          Palak Aluminium
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Where Creativity Meets Authenticity. Delivering premium aluminium hardware and design excellence for over two decades.
        </p>
        <a
          href="#about"
          className="mt-8 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          Learn More
        </a>
      </section>
      <Products/>

      <Features/>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 md:px-20  text-center bg-black">
        <h3 className="text-4xl font-bold text-amber-400 mb-6">About Us</h3>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          At Palak Aluminium | AS Enterprises, we specialize in high-quality aluminium hardware and architectural solutions.
          With a focus on design innovation and customer satisfaction, we provide trusted products crafted with precision and style.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 text-center bg-black">
        <h3 className="text-3xl font-bold text-amber-400 mb-4">Contact Us</h3>
        <p className="text-gray-300 text-lg">📞 Mobile: <span className="text-white font-semibold">9821779133</span></p>
        <a
          href="https://wa.me/919821779133"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-full font-semibold transition"
        >
          WhatsApp Us
        </a>
      </section>

      <Testimonials/>
      <QuickEnquiry/>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-4 text-center text-sm">
        © {new Date().getFullYear()} Palak Aluminium | AS Enterprises. All Rights Reserved.
      </footer>
    </div>
  );
}
