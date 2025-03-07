
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="section-container relative">
        <div className="absolute inset-0 hero-gradient rounded-3xl -z-10"></div>
        
        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-sneaker-red/10 text-sneaker-red font-medium text-sm mb-4">
                New Collection
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Premium Sneakers for <span className="text-sneaker-red">Collectors</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-700 max-w-lg">
              Discover limited edition sneakers from top brands. From rare Yeezys to classic Jordans, we've got the most coveted kicks on the planet.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-sneaker-red text-white font-medium rounded-full hover:shadow-lg transition-all hover:-translate-y-1">
                Shop Now
              </button>
              <button className="px-6 py-3 bg-white border border-gray-200 font-medium rounded-full hover:shadow-lg transition-all hover:-translate-y-1">
                Sell Your Kicks
              </button>
            </div>
            
            {/* Brands */}
            <div className="pt-6">
              <p className="text-sm text-gray-500 mb-4">Featured Brands</p>
              <div className="flex flex-wrap gap-6 items-center">
                <p className="text-xl font-bold">Nike</p>
                <p className="text-xl font-bold">Adidas</p>
                <p className="text-xl font-bold">Jordan</p>
                <p className="text-xl font-bold">Yeezy</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center">
            <div className={cn(
              "absolute w-[200%] h-[200%] -top-1/2 -left-1/2 bg-gradient-to-br from-sneaker-blue/30 via-sneaker-purple/20 to-sneaker-red/30",
              "rounded-full blur-3xl opacity-30 -z-10"
            )} />
            
            <img 
              src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Premium Sneaker Collection" 
              className="sneaker-shadow max-h-full max-w-full object-contain transform -rotate-12 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
