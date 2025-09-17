import { Button } from '@/components/ui/button';
import { ShoppingBasket, Leaf, Truck } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] bg-green-400 flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-[url('/hero-farm.jpg')] bg-cover bg-center opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl mt-4 md:text-6xl font-bold mb-6 leading-tight">
          Fresh Farm Produce
          <br />
          <span className="text-green-300">Delivered Daily</span>
        </h1>
        <p className="text-xl mb-8 opacity-100 max-w-2xl mx-auto">
          Get the freshest organic crops straight from local farms to your table. 
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
    </section>
  );
};