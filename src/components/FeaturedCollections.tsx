
import { useState } from 'react';
import ProductCard from './ProductCard';
import { cn } from '@/lib/utils';

// Sample product data
const PRODUCTS = [
  {
    id: "1",
    name: "Air Jordan 1 Retro High OG",
    brand: "Jordan",
    price: 1250,
    image: "https://images.unsplash.com/photo-1607303367224-a2a28ea60be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colors: ["#BF2C2C", "#2C3CBF", "#2C2C2C"],
    isNew: true
  },
  {
    id: "2",
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 980,
    image: "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colors: ["#D3D3D3", "#2C2C2C", "#F5EBD9"]
  },
  {
    id: "3",
    name: "Nike Air Force 1 '07",
    brand: "Nike",
    price: 350,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colors: ["#FFFFFF", "#2C2C2C", "#BF2C2C"]
  },
  {
    id: "4",
    name: "Adidas Ultraboost",
    brand: "Adidas",
    price: 420,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colors: ["#2C2C2C", "#2C3CBF", "#BF2C2C"],
    isNew: true
  },
  {
    id: "5",
    name: "Air Jordan 4 Retro",
    brand: "Jordan",
    price: 1400,
    image: "https://images.unsplash.com/photo-1539698103494-a76dd0436fbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colors: ["#2C2C2C", "#BF2C2C", "#FFFFFF"]
  },
  {
    id: "6",
    name: "Nike Dunk Low Retro",
    brand: "Nike",
    price: 780,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colors: ["#FFFFFF", "#2C3CBF", "#BF2C2C"]
  },
  {
    id: "7",
    name: "Yeezy Foam Runner",
    brand: "Adidas",
    price: 590,
    image: "https://images.unsplash.com/photo-1631152899123-c9d30578b247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colors: ["#F5EBD9", "#2C2C2C"],
    isNew: true
  },
  {
    id: "8",
    name: "Air Jordan 11 Retro",
    brand: "Jordan",
    price: 870,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colors: ["#2C2C2C", "#FFFFFF", "#BF2C2C"]
  }
];

// Filter categories
const CATEGORIES = [
  { id: "all", name: "All" },
  { id: "jordan", name: "Jordan" },
  { id: "nike", name: "Nike" },
  { id: "adidas", name: "Adidas" },
  { id: "new", name: "New Arrivals" }
];

const FeaturedCollections = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter products based on active category
  const filteredProducts = PRODUCTS.filter(product => {
    if (activeCategory === "all") return true;
    if (activeCategory === "new") return product.isNew;
    return product.brand.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium sneakers from top brands
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 animate-fade-in">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                activeCategory === category.id
                  ? "bg-sneaker-red text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center animate-fade-in">
          <button className="px-8 py-4 border-2 border-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
