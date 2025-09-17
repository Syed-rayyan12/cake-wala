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
import CakesGrid from "@/components/grid"
import CakeFeatures from "@/components/cakeFeatures"
import AboutFeature from "@/components/aboutFeature"
import Cupcake from "@/components/cupcake"
import TreatsSection from "@/components/category"
import { InnerNavbar } from "@/components/inner-navbar"
import Footer from "@/components/footer"

const heroSlides = [
  {
    image: "/luxury-bakery-interior-with-beautiful-cakes-displa.jpg",
    title: "Baked with Love",
    subtitle: "Order Now",
    link: "/cakes",
  },
  {
    image: "/elegant-chocolate-cake-with-gold-decorations-on-ma.jpg",
    title: "Taste Our Signature Special",
    subtitle: "Chocolate Walnut Delight",
    link: "/cakes",
  },
  {
    image: "/artisan-baker-decorating-wedding-cake-in-professio.jpg",
    title: "Discover Sweet Perfection",
    subtitle: "Handcrafted Excellence",
    link: "/cakes",
  },
]

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Black Forest Cake",
    description: "Rich chocolate sponge layered with fresh cherries and whipped cream",
    price: 29.99,
    image: "/forest.avif",
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
  {
    id: "5",
    name: "Chocolate Fudge Cake",
    description: "Rich, moist chocolate cake layered with creamy fudge frosting",
    price: 29.99,
    image: "/choco.jpg",
    badge: "Best Seller",
    rating: 4.8,
    category: "Chocolate Cakes",
    ingredients: ["Chocolate sponge", "Cocoa powder", "Fudge frosting", "Chocolate shavings"],
    sizes: [
      { name: "6 inch", price: 29.99 },
      { name: "8 inch", price: 39.99 },
      { name: "10 inch", price: 49.99 },
    ],
  },
  {
    id: "6",
    name: "Red Velvet Cake",
    description: "Moist red velvet cake with smooth cream cheese frosting",
    price: 28.99,
    image: "/velvet.avif",
    badge: "Popular",
    rating: 4.7,
    category: "Velvet Cakes",
    ingredients: ["Red velvet sponge", "Cocoa powder", "Cream cheese frosting", "White chocolate curls"],
    sizes: [
      { name: "6 inch", price: 28.99 },
      { name: "8 inch", price: 38.99 },
      { name: "10 inch", price: 48.99 },
    ],
  },
  {
    id: "7",
    name: "Strawberry Shortcake",
    description: "Light vanilla sponge layered with fresh strawberries and whipped cream",
    price: 26.99,
    image: "/berry.jpg",
    badge: "Fresh",
    rating: 4.5,
    category: "Fruit Cakes",
    ingredients: ["Vanilla sponge", "Fresh strawberries", "Whipped cream", "Strawberry glaze"],
    sizes: [
      { name: "6 inch", price: 26.99 },
      { name: "8 inch", price: 36.99 },
      { name: "10 inch", price: 46.99 },
    ],
  },
  {
    id: "8",
    name: "Lemon Zest Cake",
    description: "Tangy lemon sponge with a refreshing citrus glaze and cream frosting",
    price: 25.99,
    image: "/lemon.avif",
    badge: "Seasonal",
    rating: 4.4,
    category: "Citrus Cakes",
    ingredients: ["Lemon sponge", "Citrus glaze", "Lemon zest", "Cream frosting"],
    sizes: [
      { name: "6 inch", price: 25.99 },
      { name: "8 inch", price: 35.99 },
      { name: "10 inch", price: 45.99 },
    ],
  }
  
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
      <InnerNavbar/>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <Link
          key={index}
          href={slide.link || "/cakes"} // ✅ entire slide is linkable
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
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
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-balance">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Our Cakes
              </Button>
            </div>
          </div> */}
        </Link>
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
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
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
      <CakesGrid/>
      <div className="bg-gray-100">
      <section className="py-16 px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl  font-bold text-blue-950 mb-4">Our Signature Cakes</h2>
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
            <Button asChild size="lg"  className="hover:bg-primary border border-secondary/50">
              <Link href="/cakes">View All Cakes</Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
      <Cupcake/>
       <TreatsSection/>
      <ExtraSection/>
      {/* <Story /> */}
      {/* <Perfect/> */}
      <CakeFeatures/>
      <AboutFeature/>
      {/* Footer */}
      <Footer />
    </div>
  )
}
