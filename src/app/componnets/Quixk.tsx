"use client";
import Image from "next/image";
import { useState } from "react";

export default function QuickEnquiry() {
    const [form, setForm] = useState({
        name: "",
        service: "",
        email: "",
        phone: "",
        country: "India",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent successfully!");
        // You can integrate with API or EmailJS here.
    };

    return (
        <section className="bg-black text-white py-20 px-6 md:px-12 flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-0 bg-[#111] rounded-xl overflow-hidden shadow-lg border border-gray-800">
                {/* Left Side Image */}
                <div className="relative w-full md:w-[500px] h-80 md:h-auto">
                    <Image
                        src="/images/image.webp"
                        alt="Quick Enquiry"
                        fill
                        className="object-cover rounded-l-xl"
                        priority
                    />
                </div>

                {/* Right Side Form */}
                <div className="p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Quick <span className="text-amber-400">Enquiry</span>
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="service"
                                placeholder="Product / Service Looking for"
                                value={form.service}
                                onChange={handleChange}
                                className="p-3 bg-transparent border-b border-gray-600 focus:border-amber-400 outline-none"
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                className="p-3 bg-transparent border-b border-gray-600 focus:border-amber-400 outline-none"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                className="p-3 bg-transparent border-b border-gray-600 focus:border-amber-400 outline-none"
                            />

                            <div className="flex gap-2 items-center border-b border-gray-600 focus-within:border-amber-400">
                                <span className="text-gray-400 text-sm">+91</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone / Mobile"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="p-3 bg-transparent outline-none flex-1"
                                />
                            </div>
                        </div>

                        <select
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            className="w-full p-3 bg-transparent border-b border-gray-600 focus:border-amber-400 outline-none"
                        >
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                        </select>

                        <textarea
                            name="message"
                            placeholder="Leave a message for us"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full h-24 bg-transparent border-b border-gray-600 focus:border-amber-400 outline-none resize-none p-2"
                        />

                        <button
                            type="submit"
                            className="mt-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 px-6 rounded-md transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
}
