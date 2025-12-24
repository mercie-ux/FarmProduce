"use client";
import { Button } from '@/components/ui/button';
import { ShoppingBasket, Leaf, Truck } from 'lucide-react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { useScrollAnimation, useViewportPosition } from '@/hooks/useViewport';

export const HeroSection = () => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: ''
  });
  const [posRef, position] = useViewportPosition();
  
  const setRefs = (element: any) => {
    ref.current = element;
    posRef.current = element;
  };
  // Parallax effect based on scroll position
  const parallaxOffset = position.inViewport ? position.fromTop * 0.3 : 0;

  const words = [
  {
    text: "Delivered",
  },
  {
    text: "Daily",
  },
];
  return (
    <section 
      ref={setRefs}
      className="relative min-h-[60vh] bg-green-400 flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-[url('/hero-farm.jpg')] bg-cover bg-center opacity-50"
        style={{ transform: `translateY(${parallaxOffset}px)` }}>
      </div>
      {/* Viewport Status Indicator */}
      {position.inViewport && (
        <div className="absolute top-24 right-4 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg z-10">
          <div className="font-semibold mb-1">Viewport Hook Active</div>
          <div>Hero: {position.percentageVisible}% visible</div>
          <div>Distance from top: {position.fromTop}px</div>
        </div>
      )}
      <div className='container mx-auto px-6 relative z-10'>
      <div className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <h1 className="text-5xl mt-4 md:text-6xl font-bold mb-6 leading-tight">
          Fresh Farm Produce
          <br />
          <span className="text-green-300">
            <TypewriterEffectSmooth words={words} />
          </span>
        </h1>
        <p className="text-xl mb-8 opacity-100 max-w-2xl mx-auto">
          
          Premium quality vegetables, fruits, and grains at unbeatable prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-white text-green-600 hover:bg-white/90">
            <ShoppingBasket className="mr-2 h-5 w-5 text-green-600" />
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-green-600 hover:bg-white hover:text-farm-green">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Leaf className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Organic</h3>
            <p className="text-sm opacity-80">All our produce is certified organic and sustainably grown</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-sm opacity-80">Same-day delivery available for orders placed before 2 PM</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <ShoppingBasket className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Farm Fresh</h3>
            <p className="text-sm opacity-80">Harvested daily and delivered within 24 hours</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};