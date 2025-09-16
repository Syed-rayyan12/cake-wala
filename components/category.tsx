"use client";

import Image from "next/image";
import Link from "next/link";

const treats = [
  { id: 1, src: "/cupcake-1.jpeg", name: "Cupcakes" },
  { id: 2, src: "/cookie.avif", name: "Cookies" },
  { id: 3, src: "/brownie.avif", name: "Brownies" },
  { id: 4, src: "/slice.avif", name: "Cake Slice" },
];

export default function TreatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Delicious Treats With Powerful Punch
      
        </h2>
        <p className="px-44 max-sm:px-0 mb-5">  Our delicious treats are not just a tasty addition to your day; they come complete with a powerful punch! Shop our range of brownies, cookies, and cake slices available today.</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {treats.map((item) => (
            <Link
              key={item.id}
              href="/cakes"
              className="group flex flex-col items-center bg-gray-50 overflow-hidden transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-pink-600 transition">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
