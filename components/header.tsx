"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/lib/store"
import { CartSheet } from "./cart-sheet"

const cakeCategories = {
  "By Occasion": [
    "Birthday Cakes",
    "Wedding Cakes",
    "Anniversary Cakes",
    "Baby Shower Cakes",
    "Graduation Cakes",
    "Party Cakes",
    "Mehndi Cakes",
  ],
  "By Design": [
    "Round Cakes",
    "Square Cakes",
    "Heart Cakes",
    "Number Cakes",
    "Photo Cakes",
    "Naked Cakes",
    "Kids Cakes",
    "Themed Cakes",
  ],
  "By Flavour": [
    "Chocolate Cakes",
    "Vanilla Cakes",
    "Red Velvet Cakes",
    "Fruit Cakes",
    "Vegan Cakes",
    "Specialty Flavors",
  ],
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCakeMenu, setShowCakeMenu] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const { getTotalItems, openCart } = useCartStore()
  const totalItems = getTotalItems()

  useEffect(() => setHydrated(true), [])

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-6 text-center text-sm">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span>Free Delivery on Orders Over £50</span>
          <span className="hidden sm:inline">|</span>
          <span>Fresh Cakes Made Daily</span>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            <span>Call Now: +44 20 7123 4567</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className=" mx-auto px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/Cake-logo.png" alt="Cake Wala Logo" className="object-cover" width={200} height={200} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>

              {/* Cakes Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowCakeMenu(true)}
                onMouseLeave={() => setShowCakeMenu(false)}
              >
                <Link href="/cakes" className="text-foreground hover:text-primary transition-colors">
                  Cakes
                </Link>

                {showCakeMenu && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-card border border-border rounded-lg shadow-lg p-6 z-50">
                    <div className="grid grid-cols-1 gap-6">
                      {Object.entries(cakeCategories).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="font-semibold text-primary mb-2">{category}</h3>
                          <div className="grid grid-cols-2 gap-1">
                            {items.map((item) => (
                              <Link
                                key={item}
                                href={`/cakes?category=${encodeURIComponent(item)}`}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <Button variant="outline" size="sm" onClick={openCart} className="relative bg-transparent hover:bg-primary">
                <ShoppingCart className="h-4 w-4" />
                {hydrated && totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="sm">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link href="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                      Home
                    </Link>
                    <Link href="/cakes" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                      Cakes
                    </Link>
                    <Link href="/about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                      About
                    </Link>
                    <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <CartSheet />
    </>
  )
}
