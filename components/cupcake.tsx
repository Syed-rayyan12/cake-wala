"use client";

import Image from "next/image";
import Link from "next/link";

export default function MiniCheesecakes() {
  // Dummy Data
  const cheesecakes = [
    {
      id: 1,
      name: "Strawberry Bliss",
      description: "Classic cheesecake topped with fresh strawberries.",
      image: "/cupcake-1.jpeg",
    },
    {
      id: 2,
      name: "Choco Delight",
      description: "Rich chocolate-infused cheesecake with cocoa crust.",
      image: "/cupcake-2.jpeg",
    },
    {
      id: 3,
      name: "Blueberry Dream",
      description: "Smooth cheesecake topped with blueberry compote.",
      image: "/cakecup-3.jpeg",
    },
    {
      id: 4,
      name: "Mango Magic",
      description: "Tropical mango cheesecake with a creamy finish.",
      image: "/cakecup-4.jpeg",
    },
  ];

  return (
    <section className="w-full py-16 px-12 bg-gray-100">
      <div className="w-full mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Best Selling Mini Cheese Cakes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          If you're looking for an elegant dessert for a special occasion or something sweet to make you smile, our mini cheesecakes guarantee exceptional flavour.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cheesecakes.map((cake) => (
  <Link href="/cakes" key={cake.id}>
    <div className="p-4 bg-white overflow-hidden transition group">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={cake.image}
          alt={cake.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{cake.name}</h3>
      <p className="text-gray-600 text-sm">{cake.description}</p>
    </div>
  </Link>
))}
        </div>
      </div>
    </section>
  );
}
