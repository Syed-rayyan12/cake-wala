"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { ProductCard, type Product } from "@/components/product-card"
import Story from "@/components/story"
import ExtraSection from "@/components/extra-section"
import Perfect from "@/components/perfect"

const heroSlides = [
  {
    image: "/luxury-bakery-interior-with-beautiful-cakes-displa.jpg",
    title: "Baked with Love",
    subtitle: "Order Now",
  },
  {
    image: "/elegant-chocolate-cake-with-gold-decorations-on-ma.jpg",
    title: "Taste Our Signature Special",
    subtitle: "Chocolate Walnut Delight",
  },
  {
    image: "/artisan-baker-decorating-wedding-cake-in-professio.jpg",
    title: "Discover Sweet Perfection",
    subtitle: "Handcrafted Excellence",
  },
]

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Black Forest Cake",
    description: "Rich chocolate sponge layered with fresh cherries and whipped cream",
    price: 29.99,
    image: "/placeholder-pgv03.png",
    badge: "Classic",
    rating: 4.8,
    category: "Chocolate Cakes",
    ingredients: ["Chocolate sponge", "Fresh cherries", "Whipped cream", "Dark chocolate shavings"],
    sizes: [
      { name: "6 inch", price: 29.99 },
      { name: "8 inch", price: 39.99 },
      { name: "10 inch", price: 49.99 },
    ],
  },
  {
    id: "2",
    name: "Red Velvet Delight",
    description: "Velvety smooth red velvet cake with cream cheese frosting",
    price: 34.99,
    image: "/red-velvet-cake.png",
    badge: "Premium",
    rating: 4.9,
    category: "Red Velvet Cakes",
    ingredients: ["Red velvet sponge", "Cream cheese frosting", "Vanilla extract", "Cocoa powder"],
    sizes: [
      { name: "6 inch", price: 34.99 },
      { name: "8 inch", price: 44.99 },
      { name: "10 inch", price: 54.99 },
    ],
  },
  {
    id: "3",
    name: "Chocolate Truffle Cake",
    description: "Decadent chocolate cake with rich truffle filling and ganache",
    price: 39.99,
    image: "/chocolate-truffle-cake-with-ganache.jpg",
    badge: "Signature",
    rating: 4.7,
    category: "Chocolate Cakes",
    ingredients: ["Chocolate sponge", "Truffle filling", "Dark chocolate ganache", "Gold leaf"],
    sizes: [
      { name: "6 inch", price: 39.99 },
      { name: "8 inch", price: 49.99 },
      { name: "10 inch", price: 59.99 },
    ],
  },
  {
    id: "4",
    name: "Vanilla Bean Cake",
    description: "Classic vanilla cake made with real Madagascar vanilla beans",
    price: 27.99,
    image: "/vanilla-bean-cake-with-buttercream.jpg",
    badge: "Classic",
    rating: 4.6,
    category: "Vanilla Cakes",
    ingredients: ["Vanilla sponge", "Madagascar vanilla beans", "Buttercream frosting", "Fresh berries"],
    sizes: [
      { name: "6 inch", price: 27.99 },
      { name: "8 inch", price: 37.99 },
      { name: "10 inch", price: 47.99 },
    ],
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-balance">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/cakes">Explore Our Cakes</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </section>

     
      {/* Featured Products Section */}
      <section className="py-16 px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl  font-serif font-bold text-primary mb-4">Our Signature Cakes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Handcrafted with love, made fresh daily, and designed to make every moment sweeter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/cakes">View All Cakes</Link>
            </Button>
          </div>
        </div>
      </section>
      <ExtraSection/>
      <Story />
      <Perfect/>
      {/* Footer */}
      <footer className="bg-white border-t border-border py-12 px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Cake Wala</h3>
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
      </footer>
    </div>
  )
}
