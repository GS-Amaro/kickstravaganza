
import { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        isScrolled ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight animate-fade-in">
          KICKS<span className="text-sneaker-red">HUB</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 animate-fade-in">
          <a href="#" className="font-medium hover:text-sneaker-red transition-colors">New Releases</a>
          <a href="#" className="font-medium hover:text-sneaker-red transition-colors">Brands</a>
          <a href="#" className="font-medium hover:text-sneaker-red transition-colors">Collections</a>
          <a href="#" className="font-medium hover:text-sneaker-red transition-colors">Sell</a>
        </div>
        
        {/* Right Side - Search and Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6 animate-fade-in">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-sneaker-red text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors md:hidden"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-slide-up">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#" className="font-medium py-2 hover:text-sneaker-red transition-colors">New Releases</a>
            <a href="#" className="font-medium py-2 hover:text-sneaker-red transition-colors">Brands</a>
            <a href="#" className="font-medium py-2 hover:text-sneaker-red transition-colors">Collections</a>
            <a href="#" className="font-medium py-2 hover:text-sneaker-red transition-colors">Sell</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
