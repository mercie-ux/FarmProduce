"use client";
import { ShoppingCartSheet } from './ShoppingCart';
import { Leaf } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-fresh flex items-center justify-center">
            <Leaf className="h-5 w-5 text-white bg-green-600" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Farm<span className="text-green-700">Produce</span></h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
            Products
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        
        <ShoppingCartSheet />
      </div>
    </header>
  );
};