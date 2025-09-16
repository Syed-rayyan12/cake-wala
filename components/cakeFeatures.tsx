"use client";

import { Cake, Truck, Clock, Store } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Personalised Cakes",
    description:
      "Our handmade, customised cakes are perfect for any special occasion. Pushing the boundaries with our creative designs and decorative skills to make the best artistic cakes for you. We can turn your vision into a reality. Contact us to find out more.",
    icon: Cake,
  },
  {
    id: 2,
    title: "Same Day Delivery",
    description:
      "Sometimes things don’t go to plan, or maybe you have a reason to celebrate at short notice. Cakes & Bakes offers last-minute cakes that are hand-made and delivered all over London. Order now for same-day cake delivery.",
    icon: Truck,
  },
  {
    id: 3,
    title: "Next Day Cake Delivery",
    description:
      "Celebrate in style with a cake delivered to your doorstep. We offer next-day delivery on all orders accepted until midnight. Next-day cake delivery is available within the M25 and across London.",
    icon: Clock,
  },
  {
    id: 4,
    title: "Freshly Baked Everyday",
    description:
      "We are open every single day to serve you the finest cakes, savouries, pastries, coffees, and biscuits at all our stores. Every day, our bakers freshly bake all our cakes and sweet treats for you to enjoy. Available to order online or at your local Cakes & Bakes store.",
    icon: Store,
  },
];

export default function CakeFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
       
            className="p-6 rounded-2xl flex flex-col items-center gap-4"
          >
            <div className="p-3 rounded-full bg-pink-100 text-pink-600">
              <feature.icon size={28} />
            </div>
            <div>
              <h3 className="text-xl text-center font-semibold text-blue-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
