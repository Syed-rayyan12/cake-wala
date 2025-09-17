"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, Phone, EyeClosed, ArrowDown, X, ChevronDown, Rotate3d, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/lib/store"
import { CartSheet } from "./cart-sheet"
import { AnimatePresence, motion } from "framer-motion"

const cakeCategories = {
  "All birthday Cakes": [
    "Chocolate Cakes",
    "Vanilla Cakes",
    "Red Velvet Cakes",
    "Fruit Cakes",
    "Vegan Cakes",
    "Specialty Flavors",
  ],
  "Cakes by Type": [
    "Chocolate Cakes",
    "Vanilla Cakes",
    "Red Velvet Cakes",
    "Fruit Cakes",
    "Vegan Cakes",
    "Specialty Flavors",
  ],
  "Cakes By Design": [
    "Round Cakes",
    "Square Cakes",
    "Heart Cakes",
    "Number Cakes",
    "Photo Cakes",
    "Naked Cakes",
    "Kids Cakes",
    "Themed Cakes",
  ],
  "Cakes By Occasions": [
    "Birthday Cakes",
    "Wedding Cakes",
    "Anniversary Cakes",
    "Baby Shower Cakes",
    "Graduation Cakes",
    "Party Cakes",
    "Mehndi Cakes",
  ],

  "Same Day Delivery Cakes ": [
    "Chocolate Cakes",

  ],




}


const treatCategories = [
  "Cupcakes",
  "Brownies",
  "Macarons",
  "Cookies",
  "Tarts",
  "Donuts",
  "Pastries",
  "Mini Cakes",
]

const treatImages = [
  { id: 1, src: "/cupcake-1.jpeg", name: "Chocolate Cupcake", price: 3.99 },
  { id: 2, src: "/cupcake-2.jpeg", name: "Strawberry Cupcake", price: 4.49 },
  { id: 3, src: "/cakecup-3.jpeg", name: "Brownie Slice", price: 2.99 },
  { id: 4, src: "/cakecup-4.jpeg", name: "Fruit Tart", price: 5.99 },
  { id: 5, src: "/cupcake-1.jpeg", name: "Macaron Mix", price: 6.49 },
  { id: 6, src: "/cupcake-2.jpeg", name: "Mini Donuts", price: 4.99 },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<"cakes" | "treats" | null>(null)

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
      <header className="bg-white border-b border-border sticky top-0 z-50">
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
              {/* Cakes Dropdown */}

              <div className="relative">
                <Link
                  href="/cakes"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenMenu(openMenu === "cakes" ? null : "cakes")
                  }}
                  className="text-foreground hover:text-primary flex items-center gap-1"
                >
                  Cakes
                  {openMenu === "cakes" ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </Link>

                <AnimatePresence>
                  {openMenu === "cakes" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[44px] mt-2 
                  left-[219px] -translate-x-1/2 
             w-[1542px] h-[380px] bg-white border border-border 
                   py-12 px-6 z-50 shadow-lg"
                    >
                      <div className="max-w-7xl pl-10 mx-auto grid grid-cols-5 gap-6">
                        {Object.entries(cakeCategories).map(([category, items]) => (
                          <div key={category}>
                            <h3 className="font-semibold text-primary mb-2">{category}</h3>
                            <div className="grid grid-cols-1 gap-1">
                              {items.map((item) => (
                                <Link
                                  key={item}
                                  href={`/cakes?category=${encodeURIComponent(item)}`}
                                  className="text-sm text-gray-600 hover:text-primary transition-colors py-1"
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>


              {/* Treats Dropdown */}
              <div className="relative">
                <Link
                  href="/treats"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenMenu(openMenu === "treats" ? null : "treats")
                  }}
                  className="text-foreground hover:text-primary flex items-center gap-1"
                >
                  Treats
                  {openMenu === "treats" ? <X className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </Link>

                <AnimatePresence>
                  {openMenu === "treats" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[44px] left-[117px] -translate-x-1/2 
                    w-[1540px] mt-2   justify-center  h-[510px] bg-white border border-border p-6 z-50 flex"
                    >
                      {/* Left Side - Categories */}
                      <div className="w-1/4 pr-6 border-r overflow-y-auto">
                        <h3 className="font-semibold px-12 text-primary mb-2">Treats</h3>
                        <ul className="space-y-2 px-12">
                          {treatCategories.map((item) => (
                            <li key={item}>
                              <Link
                                href={`/cakes?category=${encodeURIComponent(item)}`}
                                className="text-sm text-gray-600 hover:text-primary transition-colors"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Side - Images */}
                      <div className="w-3/4 pl-6  grid grid-cols-3 gap-4">
                        {treatImages.map((treat) => (
                          <Link href="/cakes" key={treat.id} className="shadow-md hover:translate-y-1.5 transition duration-300 cursor-pointer rounded-md overflow-hidden">

                            <Image
                              src={treat.src}
                              alt={treat.name}
                              width={200}
                              height={150}
                              className="object-cover w-full h-32"
                            />
                            <p className="text-center text-sm py-2">{treat.name}</p>
                            <p className="text-center text-sm py-2 font-semibold">
                              ${treat.price.toFixed(2)}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                Wedding
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Birthday
              </Link>
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-2xl border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Account Button */}
              <Button variant="outline" size="sm" className="bg-transparent hover:bg-primary">
                <User className="h-4 w-4" />
              </Button>

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
