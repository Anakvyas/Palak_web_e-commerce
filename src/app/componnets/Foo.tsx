"use client";
import { Mail, MapPin, Phone, User, Instagram, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

export default function FooterLI() {
  return (
    <footer className="bg-[#121212] text-gray-300 pt-14 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* QUICK CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Quick Contact
          </h3>
          <p className="text-sm text-amber-400 font-semibold">PALAK ALUMINIUM</p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <User size={16} className="text-amber-400" />
              <span>Team Palak</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-amber-400 mt-1" />
              <span>Aligarh, Uttar Pradesh - 202001, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-amber-400" />
              <span>+91-571-3590294</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-amber-400" />
              <a href="mailto:info@PALAKtrading.com" className="hover:text-amber-400">
                palakaluminium@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-5">
            <p className="text-sm font-medium">Follow Us :</p>
            <Link href="#" className="hover:text-amber-400">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-amber-400">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-amber-400">
              <Youtube size={20} />
            </Link>
          </div>
        </div>

        {/* GENERAL LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            General Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link href="/products" className="hover:text-amber-400">Products</Link></li>
            <li><Link href="/brands" className="hover:text-amber-400">Brands We Deal</Link></li>
            <li><Link href="/catalogues" className="hover:text-amber-400">Catalogues</Link></li>
            <li><Link href="/gallery" className="hover:text-amber-400">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-amber-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Products
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/products/door-kit" className="hover:text-amber-400">Stopper</Link></li>
            <li><Link href="/products/brass-hardware" className="hover:text-amber-400">Chest handles</Link></li>
            <li><Link href="/products/aluminium-door-kit" className="hover:text-amber-400">Aluminium Double</Link></li>
          </ul>
        </div>

        {/* LANGUAGES & EXTRA */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Languages
          </h3>
          <select className="bg-transparent border border-gray-600 text-sm rounded px-3 py-2 w-full focus:border-amber-400 outline-none">
            <option>English</option>
            <option>Hindi</option>
            <option>French</option>
            <option>Spanish</option>
          </select>

          <div className="mt-6">
            <Link href="#" className="inline-block bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded transition">
              Member - ExportersIndia
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} PALAK TRADING CORPORATION — All Rights Reserved. <br />
          Developed & Managed by{" "}
          <a href="#" className="text-amber-400 hover:underline">
            Weblink.In Pvt. Ltd.
          </a>
        </p>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9821779133"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2.003c-5.523 0-10 4.478-10 10a9.94 9.94 0 0 0 1.48 5.27L2 22l4.875-1.46a9.97 9.97 0 0 0 5.165 1.46c5.523 0 10-4.478 10-10s-4.477-10-10-10zm.002 18.013a8.013 8.013 0 0 1-4.077-1.11l-.292-.174-2.883.864.884-2.812-.188-.298a8.01 8.01 0 0 1-1.113-4.086c0-4.419 3.593-8.013 8.013-8.013s8.013 3.594 8.013 8.013-3.593 8.013-8.013 8.013zm4.578-5.877c-.25-.125-1.476-.727-1.704-.809-.228-.083-.395-.125-.563.125s-.645.809-.791.976c-.145.166-.29.187-.54.062-.25-.125-1.057-.389-2.012-1.238-.744-.663-1.246-1.48-1.393-1.73-.145-.25-.016-.385.109-.51.112-.111.25-.29.374-.437.124-.145.166-.25.25-.416.083-.166.042-.312-.02-.437-.062-.125-.563-1.355-.771-1.855-.203-.486-.41-.42-.563-.428l-.48-.008c-.166 0-.437.062-.666.312-.228.25-.875.854-.875 2.083 0 1.229.896 2.416 1.021 2.583.125.166 1.762 2.69 4.27 3.77.597.258 1.062.411 1.424.526.598.19 1.145.163 1.576.1.48-.071 1.476-.604 1.682-1.188.208-.583.208-1.083.146-1.188-.062-.104-.229-.166-.479-.291z" />
        </svg>
      </a>
    </footer>
  );
}
