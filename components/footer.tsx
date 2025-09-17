import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, MessageCircle as Whatsapp, Pin as Pinterest, ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <>
      <div className="bg-white border-t border-border py-12 px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className='pl-12'>
              <h4 className="mb-4 font-semibold text-gray-900">Keep Up To Date</h4>

              <div className="relative w-full max-w-sm mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 bg-primary cursor-pointer text-white flex items-center justify-center w-10 h-full rounded-r-md"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2">
      <input
        id="terms"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
      />
      <label htmlFor="terms" className="text-sm text-gray-700">
        I have read and agree to the{" "}
        <Link
          href="/terms-and-conditions"
          className="text-primary hover:underline"
        >
          Terms and Conditions
        </Link>
      </label>
    </div>
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
                  Our Story
                </Link>
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Our Stories
                </Link>
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Franchise
                </Link>
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Accomplishment
                </Link>
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Careers
                </Link>
                <Link href="/cakes" className="block text-gray-700 hover:text-primary transition-colors">
                  Blogs
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Reach Us</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>📍 123 Baker Street, London, UK</p>
                <p>📞 +44 20 7123 4567</p>
                <p>✉️ hello@cakewala.co.uk</p>
                <p>⏰ Mon-Sat: 8AM-8PM, Sun: 10AM-6PM</p>
                <div className="flex gap-4 mt-8">
                  <Link
                    href="https://facebook.com/yourusername"
                    target="_blank"
                    className="flex items-center gap-2  rounded-full w-10 h-10 justify-center  hover:text-white hover:bg-primary transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>

                  <Link
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    className="flex items-center gap-2  rounded-full w-10 h-10 justify-center  hover:text-white hover:bg-primary transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>

                  <Link
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    className="flex items-center gap-2  rounded-full w-10 h-10 justify-center  hover:text-white hover:bg-primary transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </Link>

                  <Link
                    href="https://wa.me/923001234567"
                    target="_blank"
                    className="flex items-center gap-2  rounded-full w-10 h-10 justify-center  hover:text-white hover:bg-primary transition-colors"
                  >
                    <Whatsapp className="w-6 h-6" />
                  </Link>

                  <Link
                    href="https://pinterest.com/yourusername"
                    target="_blank"
                    className="flex items-center gap-2  rounded-full w-10 h-10 justify-center  hover:text-white hover:bg-primary transition-colors"
                  >
                    <Pinterest className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-gray-700">
            <div className='flex gap-4 justify-center mb-4'>
              <Link href="" className='hover:underline hover:text-primary'>
                Privacy Policy
              </Link>
              <Link href="" className='hover:underline hover:text-primary'>
                Terms & Conditions
              </Link>
              <Link href="" className='hover:underline hover:text-primary'>
                Cookies Policy
              </Link>
            </div>
            <p>© 2024 Cake Wala. All rights reserved. Made with ❤️ for sweet moments.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
