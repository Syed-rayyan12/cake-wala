"use client"

import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"

export function InnerNavbar() {
  return (
    <div className="bg-white border-b border-gray-200 px-18 h-full py-4">
      <div className="mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-gray-700">Delivery Available</span>
          <Link
            href="/check-postcode"
            className="text-sm text-primary hover:text-primary/80 transition-colors underline"
          >
            Check Postcode
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <Link href="/our-stores" className="text-sm text-gray-700 hover:text-primary transition-colors">
            Our Stores
          </Link>
          <Link href="/about" className="text-sm text-gray-700 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm text-gray-700 hover:text-primary transition-colors">
            Contact Us
          </Link>
          <Link href="/franchise" className="text-sm text-gray-700 hover:text-primary transition-colors">
            Franchise
          </Link>
          <Link href="/accomplishment" className="text-sm text-gray-700 hover:text-primary transition-colors">
            Accomplishment
          </Link>

          {/* WhatsApp Number with Animated Phone Icon */}
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-green-600 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">+44 20 7123 4567</span>
          </div>

          {/* WhatsApp Icon */}
          <MessageCircle className="h-5 w-5 text-green-600 cursor-pointer hover:text-green-700 transition-colors" />
        </div>
      </div>
    </div>
  )
}