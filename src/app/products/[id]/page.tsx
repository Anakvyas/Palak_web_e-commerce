"use client";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Menu, Search, X } from "lucide-react";

const productData = [
  {
    id: "1",
    name: " Single Puli",
    material: "Aluminium",
    color: "Silver",
    feature: "Durable, Rust Proof",
    surface: "Polished",
    pack: "Box",
    brand: "Palak",
    images: ["/images/single.png", "/images/single1.jpg", "/images/double2.jpg"],
  },
  {
    id: "2",
    name: "Chest handle",
    material: "Aluminium",
    color: "Chrome",
    feature: "Fine Finish, Rust Resistant",
    surface: "Polished",
    pack: "Box",
    brand: "Palak",
    images: ["/images/double.png", "/images/double1.jpg",],
  },
  {
    id: "3",
    name: "Stopper",
    material: "Aluminium",
    color: "Antique Black Satin",
    feature: "Strong Grip, Corrosion Resistant",
    surface: "Matte Finish",
    pack: "48/piece",
    brand: "Palak",
    images: ["/images/stopper.png", "/images/stopper1.jpg", "/images/stopper2.jpg", "/images/stopper4.jpg"],
  },

  {
    id: "4",
    name: "Double Puli",
    material: "Aluminium",
    color: "Steel Grey",
    feature: "Strong Grip, Corrosion Resistant",
    surface: "Matte Finish",
    pack: "Piece",
    brand: "Palak",
    images: ["/images/doublepuli.jpg", "/images/doublepuli1.jpg"]

  }
  ,
    {id: "5",
    name:"Door kit",
    material: "Aluminium",
    color: "Steel Grey",
    feature: "Strong Grip, Corrosion Resistant",
    surface: "Matte Finish",
    pack: "Piece",
    brand: "Palak",
    images: ["/images/door.jpg","/images/door1.jpg", "/images/door2.jpg","/images/door3.jpg"]

  }
];

export default function ProductPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const params = useParams();
  const id = params?.id as string;
  const product = productData.find((p) => p.id === id);

  if (!product)
    return <div className="text-center py-20 text-white">Product not found.</div>;

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 logo-text">
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

      <div className="max-w-6xl mx-auto mt-19">
        {/* Header */}
        <h1 className="text-4xl font-bold text-amber-400 mb-8">{product.name}</h1>

        {/* Product Info Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Main Product Image */}
          <div className="relative w-full h-80 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
            <Image
              src={mainImage}
              alt={product.name}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <p>
              <span className="text-amber-400 font-semibold">Material:</span>{" "}
              {product.material}
            </p>
            <p>
              <span className="text-amber-400 font-semibold">Color:</span>{" "}
              {product.color}
            </p>
            <p>
              <span className="text-amber-400 font-semibold">Feature:</span>{" "}
              {product.feature}
            </p>
            <p>
              <span className="text-amber-400 font-semibold">
                Surface Finishing:
              </span>{" "}
              {product.surface}
            </p>
            <p>
              <span className="text-amber-400 font-semibold">Pack Type:</span>{" "}
              {product.pack}
            </p>
            <p>
              <span className="text-amber-400 font-semibold">Brand:</span>{" "}
              {product.brand}
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => (window.location.href = "tel:9821779133")}
                className="border border-amber-500 text-amber-400 px-6 py-2 rounded-md hover:bg-amber-500 hover:text-black transition"
              >
                Request to Call
              </button>
              <button className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2 rounded-md font-semibold">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="mt-16 p-6 md:p-10 bg-gray-900 rounded-xl shadow-lg border border-gray-800">
          <h3 className="text-2xl md:text-3xl font-semibold text-amber-400 mb-8 text-center leading-tight">
            Looking for “{product.name}”?
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />

            {/* Mobile */}
            <input
              type="tel"
              placeholder="Mobile No."
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />

            {/* Quantity */}
            <input
              type="text"
              placeholder="Quantity"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />

            {/* Purpose (Radio Buttons) */}
            <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row justify-center items-center gap-4 py-2">
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input
                  type="radio"
                  name="purpose"
                  value="reselling"
                  className="accent-amber-500"
                />
                Reselling
              </label>
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input
                  type="radio"
                  name="purpose"
                  value="enduse"
                  className="accent-amber-500"
                />
                End Use
              </label>
            </div>

            {/* Requirement Details */}
            <textarea
              placeholder="Requirement Details..."
              className="col-span-1 md:col-span-2 w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition h-32 md:h-40 resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-amber-500 hover:bg-amber-400 text-black py-3 md:py-4 rounded-md font-semibold text-base md:text-lg transition-all"
            >
              Send Enquiry
            </button>
          </form>
        </div>


        {/* Additional Images */}
        <h2 className="text-2xl font-semibold text-amber-400 mt-12 mb-6 text-center">
          Additional Images
        </h2>
        <div className="flex flex-row flex-wrap  gap-6 justify-center items-center">
          {product.images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setMainImage(img)}
              className={`relative w-56 h-56 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${mainImage === img
                ? "border-amber-500 shadow-lg"
                : "border-gray-700 hover:border-white/80"
                }`}
            >
              <Image
                src={img}
                alt={`${product.name} ${idx}`}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
