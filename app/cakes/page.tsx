"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProductCard, type Product } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import Footer from "@/components/footer"
import { InnerNavbar } from "@/components/inner-navbar"

const allProducts: Product[] = [
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
  {
    id: "5",
    name: "Strawberry Shortcake",
    description: "Light sponge cake with fresh strawberries and whipped cream",
    price: 32.99,
    image: "/strawberry-shortcake-with-fresh-berries.jpg",
    badge: "Seasonal",
    rating: 4.5,
    category: "Fruit Cakes",
    ingredients: ["Vanilla sponge", "Fresh strawberries", "Whipped cream", "Strawberry compote"],
    sizes: [
      { name: "6 inch", price: 32.99 },
      { name: "8 inch", price: 42.99 },
      { name: "10 inch", price: 52.99 },
    ],
  },
  {
    id: "6",
    name: "Lemon Drizzle Cake",
    description: "Moist lemon sponge with tangy lemon glaze",
    price: 25.99,
    image: "/lemon-drizzle-cake-with-glaze.jpg",
    badge: "Classic",
    rating: 4.4,
    category: "Fruit Cakes",
    ingredients: ["Lemon sponge", "Lemon zest", "Lemon glaze", "Candied lemon"],
    sizes: [
      { name: "6 inch", price: 25.99 },
      { name: "8 inch", price: 35.99 },
      { name: "10 inch", price: 45.99 },
    ],
  },
  {
    id: "7",
    name: "Carrot Cake",
    description: "Spiced carrot cake with cream cheese frosting and walnuts",
    price: 31.99,
    image: "/carrot-cake-cream-cheese.png",
    badge: "Premium",
    rating: 4.6,
    category: "Specialty Flavors",
    ingredients: ["Carrot sponge", "Cream cheese frosting", "Walnuts", "Cinnamon"],
    sizes: [
      { name: "6 inch", price: 31.99 },
      { name: "8 inch", price: 41.99 },
      { name: "10 inch", price: 51.99 },
    ],
  },
  {
    id: "8",
    name: "Vegan Chocolate Cake",
    description: "Rich chocolate cake made with plant-based ingredients",
    price: 33.99,
    image: "/vegan-chocolate-berry-cake.png",
    badge: "Vegan",
    rating: 4.3,
    category: "Vegan Cakes",
    ingredients: ["Vegan chocolate sponge", "Coconut cream", "Dark chocolate", "Fresh berries"],
    sizes: [
      { name: "6 inch", price: 33.99 },
      { name: "8 inch", price: 43.99 },
      { name: "10 inch", price: 53.99 },
    ],
  },
]

const categories = [
  "All Cakes",
  "Birthday Cakes",
  "Wedding Cakes",
  "Chocolate Cakes",
  "Vanilla Cakes",
  "Red Velvet Cakes",
  "Fruit Cakes",
  "Vegan Cakes",
  "Specialty Flavors",
]

export default function CakesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Cakes")
  const [sortBy, setSortBy] = useState("name")

  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All Cakes" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <InnerNavbar/>

      {/* Page Header */}
      <section className="relative bg-secondary py-32 px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/beautiful-display-of-premium-cakes-and-pastries-in.jpg"
            alt="Our premium cakes collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <nav className="text-sm text-white/80 mb-4">Home / Cakes</nav>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            Our Premium Cakes
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Handcrafted with love, made fresh daily, and designed to make every moment sweeter
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-12 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
          
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search cakes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full  transition-all duration-300 border-gray-300"
                />
              </div>
              <div className=" text-sm text-muted-foreground">
                Showing {filteredProducts.length} of {allProducts.length} cakes
              </div>
           

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 border border-gray-300">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48  border border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>


        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-12">
        <div className="container mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No cakes found matching your criteria</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All Cakes")
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
