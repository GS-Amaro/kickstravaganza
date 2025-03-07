
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gray-100">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-gray-600 mb-8">
                Get early access to drops and exclusive offers
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-full border-2 border-gray-200 focus:border-sneaker-red focus:outline-none"
                />
                <button className="px-6 py-3 bg-sneaker-red text-white font-medium rounded-full hover:shadow-lg transition-all hover:-translate-y-1">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
