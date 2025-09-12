import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
       <div className="bg-white border-t border-border py-12 px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/Cake-logo.png" alt="Cake Wala Logo" width={200} height={200} className="mb-4" />
              <p className="text-sm mb-4 text-gray-700">
                Creating sweet memories since 2015. We specialize in custom cakes and desserts for all your special
                occasions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/" className="block text-gray-700 hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block text-gray-700 hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Birthday Cakes
                </Link>
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Wedding Cakes
                </Link>
                <Link href="/contact" className="block text-gray-700 hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Cake Categories</h4>
              <div className="space-y-2 text-sm">
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Chocolate Cakes
                </Link>
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Vanilla Cakes
                </Link>
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Red Velvet
                </Link>
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Vegan Options
                </Link>
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Kids Cakes
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>📍 123 Baker Street, London, UK</p>
                <p>📞 +44 20 7123 4567</p>
                <p>✉️ hello@cakewala.co.uk</p>
                <p>⏰ Mon-Sat: 8AM-8PM, Sun: 10AM-6PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-gray-700">
            <p>© 2024 Cake Wala. All rights reserved. Made with ❤️ for sweet moments.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
