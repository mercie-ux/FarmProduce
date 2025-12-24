"use client";
import { ShoppingCartSheet } from './ShoppingCart';
import { Leaf, Menu, X } from 'lucide-react';
import { useScrollAnimation, useViewportPosition } from '@/hooks/useViewport';
import { useEffect, useState } from 'react';


export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? 'backdrop-blur' : 'supports-[backdrop-filter]:bg-background/60 shadow-md'} bg-background/95`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-fresh flex items-center justify-center">
            <Leaf className="h-5 w-5 text-white bg-green-600" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Farm<span className="text-green-700">Produce</span></h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#products" className={`text-muted-foreground hover:text-foreground transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>
            Products
          </a>
          <a href="#about" className={`text-muted-foreground hover:text-foreground transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
        <ShoppingCartSheet />
      </div>
    </header>
  );
};