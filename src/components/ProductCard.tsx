
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  colors: string[];
  isNew?: boolean;
}

const ProductCard = ({ id, name, brand, price, image, colors, isNew }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div 
      className="group relative rounded-2xl overflow-hidden bg-white hover-lift glass-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {isNew && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 bg-sneaker-red text-white text-xs font-medium rounded-full">
            New
          </span>
        </div>
      )}
      
      {/* Favorite Button */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className={cn(
          "absolute top-3 right-3 z-10 p-2 rounded-full transition-all duration-300",
          isFavorite ? "bg-sneaker-red text-white" : "bg-white/80 text-gray-600 backdrop-blur-sm"
        )}
      >
        <Heart className={cn("w-4 h-4", isFavorite && "fill-white")} />
      </button>
      
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img 
          src={image} 
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered && "scale-110"
          )}
        />
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="mb-3">
          <span className="text-sm text-gray-500">{brand}</span>
          <h3 className="font-semibold text-lg mt-1">{name}</h3>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">${price.toLocaleString()}</p>
          
          {/* Color Options */}
          <div className="flex -space-x-1.5">
            {colors.map((color, index) => (
              <div 
                key={index}
                className="color-chip"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Hover Button */}
      <div className={cn(
        "absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300",
        isHovered && "opacity-100"
      )}>
        <button className="px-6 py-3 bg-white font-medium rounded-full hover:bg-sneaker-red hover:text-white transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
