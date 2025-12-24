"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { useScrollAnimation, useViewportPosition } from '@/hooks/useViewport';
import { useState } from "react";


interface ProductCardProps {
  product: Product;
  delay : number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true, rootMargin: "0px" });
  const [posRef, position] = useViewportPosition();
  const [quantity, setQuantity] = useState(0);
  const setRefs = (element: HTMLDivElement | null) => {
    ref.current = element;
    posRef.current = element;
  };
  // calculate scale based on viewport position
  const scale = position.inViewport
    ? Math.min(1, 0.8 + (position.percentageVisible / 500))
    : 0.8;
  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart!", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div
      ref={setRefs}
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 relative ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transform: `scale(${scale}) translateY(${isVisible ? 0 : 40}px)`
      }}
    >
      {/* Viewport Debug Indicator */}
      {position.inViewport && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
          {position.percentageVisible}% visible
        </div>
      )}
      
    <Card className="group overflow-hidden border-border bg-card shadow-card transition-all hover:shadow-hover">
      <div className="aspect-square overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          {product.inStock && (
            <Badge variant="outline" className="text-xs text-farm-green">
              In Stock
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg text-foreground">{product.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-farm-green">
            ${product.price.toFixed(2)}
          </div>
          <div className="text-sm text-muted-foreground">{product.unit}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full hover:opacity-90 bg-green-600"
          size="sm"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</div>
  );
};
