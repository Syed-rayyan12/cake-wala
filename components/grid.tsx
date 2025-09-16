"use client";
import Image from "next/image";

export default function CakesGrid() {

    const bg = {
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/gap.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
      
      const bgs = {
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/sid.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
      
    return (
        <div className="bg-white">
        <section className="max-w-5xl  mx-auto px-4 py-12">
            <h2 className="text-center text-3xl font-bold text-blue-950 mb-4">
                Our Creations For Your Celebrations
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
                Personalised & handmade freshly baked delicious cakes and sweet treats
                for any occasion. From wedding cakes to birthday cakes, photo cakes,
                kids cakes, and more.
            </p>


            <div className="grid grid-cols-3 gap-4">
                {/* Left Big Card */}
                <div className="lg:col-span-1">
                    <div className="relative bg-pink-100 rounded-xl overflow-hidden shadow-md h-[400px]">
                        <Image
                            src="/wedding-cake.jpeg"
                            alt="Wedding Cake"
                            width={600}
                            height={800}
                            className="object-cover w-full h-full"
                        />
                        <p className="absolute top-3 left-3 bg-white/80 text-sm font-semibold px-2 py-1 rounded">
                            Wedding Cake
                        </p>
                    </div>
                </div>

                {/* Right Side Grid (4 cards) */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Birthday Cakes */}
                    <div className="relative bg-orange-100 rounded-xl overflow-hidden shadow-md h-[195px]">
                        <Image
                            src="/birthday.jpeg"
                            alt="Birthday Cakes"
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                        <p className="absolute top-3 left-3 bg-white/80 text-sm font-semibold px-2 py-1 rounded">
                            Birthday Cakes
                        </p>
                    </div>

                    {/* Kids Birthday Cakes */}
                    <div className="relative bg-blue-100 rounded-xl overflow-hidden shadow-md h-[195px]">
                        <Image
                            src="/kids.jpeg"
                            alt="Kids Birthday Cakes"
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                        <p className="absolute top-3 left-3 bg-white/80 text-sm font-semibold px-2 py-1 rounded">
                            Kids Birthday Cakes
                        </p>
                    </div>

                    {/* Photo Cakes */}
                    <div className="relative bg-green-100 rounded-xl overflow-hidden shadow-md h-[195px]">
                        <Image
                            src="/cake.jpeg"
                            alt="Photo Cakes"
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                        <p className="absolute top-3 left-3 bg-white/80 text-sm font-semibold px-2 py-1 rounded">
                            Photo Cakes
                        </p>
                    </div>

                    {/* Barbie Cake */}
                    <div className="relative bg-pink-200 rounded-xl overflow-hidden shadow-md h-[195px]">
                        <Image
                            src="/barbie.avif"
                            alt="Barbie Cake"
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                        <p className="absolute top-3 left-3 bg-white/80 text-sm font-semibold px-2 py-1 rounded">
                            Barbie Cake
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="mt-4 flex flex-col lg:flex-row gap-4">
                {/* Same Day Cakes */}
                <div style={bgs} className="w-full lg:w-[32.5%] bg-purple-100 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
                    <div className=" text-center">
                      
                        <p className="font-semibold text-white">Same Day Cakes</p>
                    </div>
                </div>

                {/* Launching Soon Banner */}
                <div 
                style={bg}
                className="w-full lg:w-[65.5%]  text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold">Launching soon...</h3>
                        <p className="mt-1">We are one of the UK’s fastest growing cake brands</p>
                        <p className="mt-1">📍 Southall | Estimated Open: September 2025</p>
                    </div>
                  
                </div>
            </div>


        </section>
        </div>
    );
}
