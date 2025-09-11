"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCartStore } from "@/lib/store"
import type { Product } from "./product-card"

interface ProductQuickViewProps {
  product: Product
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductQuickView({ product, open, onOpenChange }: ProductQuickViewProps) {
  const [selectedSize, setSelectedSize] = useState<string>("")
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    const selectedSizeData = product.sizes?.find((size) => size.name === selectedSize)
    const price = selectedSizeData ? selectedSizeData.price : product.price

    addItem({
      id: `${product.id}-${selectedSize || "default"}`,
      name: product.name,
      price: price,
      image: product.image,
      size: selectedSize || undefined,
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Product Details</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            {product.badge && (
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.badge}</Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold font-serif mb-2">{product.name}</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.rating} stars)</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold text-primary">
              {product.sizes && selectedSize
                ? `£${product.sizes.find((size) => size.name === selectedSize)?.price.toFixed(2)}`
                : `From £${product.price.toFixed(2)}`}
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Size:</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size.name} value={size.name}>
                        {size.name} - £{size.price.toFixed(2)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && (
              <div className="space-y-2">
                <h3 className="font-medium">Ingredients:</h3>
                <p className="text-sm text-muted-foreground">{product.ingredients.join(", ")}</p>
              </div>
            )}

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full"
              size="lg"
              disabled={product.sizes && product.sizes.length > 0 && !selectedSize}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
