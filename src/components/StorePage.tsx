import { ProductCard } from './ProductCard';
import { HeroSection } from './HeroSection';
import { Header } from './Header';
import { products } from '@/data/products';
import { CartProvider } from '@/contexts/CartContext';

export const StorePage = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        
        <main className="container mx-auto px-6 py-12">
          <section id="products" className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Fresh Produce Selection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our wide variety of fresh, organic crops harvested daily from local farms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
          
          <section id="about" className="mb-16 text-center">
            <div className="bg-gradient-fresh rounded-2xl p-12 text-white bg-green-600">
              <h3 className="text-3xl font-bold mb-6">Why Choose FarmProduce?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Farm to Table</h4>
                  <p className="opacity-90">
                    We work directly with local organic farms to bring you the freshest produce, 
                    harvested at peak ripeness and delivered within 24 hours.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Sustainable Practices</h4>
                  <p className="opacity-90">
                    All our partner farms use sustainable, eco-friendly farming methods that 
                    protect the environment while producing the highest quality crops.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Quality Guarantee</h4>
                  <p className="opacity-90">
                    Every item is hand-selected and quality checked before delivery. 
                    We guarantee freshness or your money back.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Community Support</h4>
                  <p className="opacity-90">
                    By choosing us, you're supporting local farmers and contributing to 
                    a more sustainable food system in your community.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="bg-amber-950 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-fresh flex items-center justify-center">
                <span className="text-white font-bold">🌱</span>
              </div>
              <h1 className="text-xl font-bold">FarmProduce</h1>
            </div>
            <p className="text-white/80 mb-6">
              Fresh, organic produce delivered to your doorstep
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <a href="#" className="hover:text-farm-mint transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-farm-mint transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-farm-mint transition-colors">Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};