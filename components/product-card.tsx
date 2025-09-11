"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Eye, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useCartStore } from "@/lib/store"
import { ProductQuickView } from "./product-quick-view"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  badge?: string
  rating: number
  category: string
  ingredients?: string[]
  sizes?: { name: string; price: number }[]
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [showQuickView, setShowQuickView] = useState(false)
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.badge && (
            <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">{product.badge}</Badge>
          )}

          {/* Overlay buttons */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowQuickView(true)}
              className="bg-white/90 hover:bg-white"
            >
              <Eye className="h-4 w-4 mr-1" />
              Quick View
            </Button>
            <Button size="sm" onClick={handleAddToCart} className="bg-primary hover:bg-primary/90">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>

          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-primary">From £{product.price.toFixed(2)}</span>
            </div>
            <Button size="sm" onClick={handleAddToCart}>
              Order Now
            </Button>
          </div>
        </CardContent>
      </Card>

      <ProductQuickView product={product} open={showQuickView} onOpenChange={setShowQuickView} />
    </>
  )
}
