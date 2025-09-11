import React from 'react'
import Image from 'next/image'

const perfect = () => {
  return (
    <>
       <section className="px-6 md:px-20 py-16 bg-gray-100 rounded-2xl">
        <h2 className="text-4xl font-bold text-center text-[#8b0000] mb-12">
          Perfect Pairings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Image
              src="/af.png"
              alt="Cake with Tea"
              width={300}
              height={200}
              className="rounded-xl mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#8b0000] mb-2">
              Afternoon Tea
            </h3>
            <p className="text-gray-600">
              Pair our Victoria sponge with a classic Earl Grey for the perfect British tradition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Image
              src="/kp.jpg"
              alt="Cake with Coffee"
              width={300}
              height={200}
              className="rounded-xl h-[43vh] mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#8b0000] mb-2">
              Coffee Moments
            </h3>
            <p className="text-gray-600">
              Enjoy our rich chocolate cake alongside a fresh cappuccino.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Image
              src="/sig.avif"
              alt="Celebration Cakes"
              width={300}
              height={200}
              className="rounded-xl mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#8b0000] mb-2">
              Celebrations
            </h3>
            <p className="text-gray-600">
              Make birthdays, weddings, and parties unforgettable with our signature cakes.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default perfect
