"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section className=" bg-white">
            <div className="mx-auto  grid grid-cols-1 md:grid-cols-2">
                {/* Left Image */}
                <div className="">
                    <Image
                        src="/ban.png" // replace with your image
                        alt="Our Bakery"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Right Content */}
                <div className="bg-gray-100 p-14">
                    <div className="">
                        <h2 className="text-3xl font-bold text-blue-950">Welcome to Cakes & Bakes</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Welcome to Cakes & Bakes, the best cake shop in London! Every day we hand bake
                            a variety of cakes, cupcakes, cake slices, and brownies using the highest quality
                            ingredients for the pleasure of our lovely clients. We offer delivery throughout
                            London and within the M25, so whether you need a rainbow cake, corporate branded
                            cupcakes, or just an awesome special occasion or birthday cake, we've got you covered.
                            We are THE place to order a birthday cake online for London delivery.
                        </p>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Our cakes are made according to our own recipe, which results in the distinctive flavour
                            that our customers have come to associate with a fun and delicious experience made in
                            Cakes & Bakes. Our unparalleled level of customer service and unwavering commitment to
                            high operating standards, is what separates us from our competition.
                        </p>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Since we entered this industry in 2002, we have perfected the art of baking delicious
                            birthday cakes and ensuring their safe delivery. So check all our sweet creations now!
                        </p>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-4">
                            <Button className="bg-primary cursor-pointer text-white px-6">
                                <Link href="/about">
                                About Us
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                className="border-primary hover:bg-primary cursor-pointer px-6"
                            >
                                Our Stores
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
