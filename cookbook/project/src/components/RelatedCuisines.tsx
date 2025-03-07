import React from 'react';
import { Cuisine } from '../types';

interface RelatedCuisinesProps {
  relatedCuisines: Cuisine[];
  onSelectCuisine: (cuisine: string) => void;
}

const RelatedCuisines: React.FC<RelatedCuisinesProps> = ({ 
  relatedCuisines,
  onSelectCuisine
}) => {
  if (!relatedCuisines || relatedCuisines.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Related Cuisines</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedCuisines.map((cuisine) => (
          <div 
            key={cuisine.name}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => onSelectCuisine(cuisine.name.toLowerCase())}
          >
            <div className="relative h-32">
              <img 
                src={cuisine.image} 
                alt={`${cuisine.name} cuisine`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-2 w-full">
                  <h4 className="text-white font-bold">{cuisine.name}</h4>
                  <p className="text-white text-xs opacity-90">{cuisine.region}</p>
                </div>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xs text-gray-600 mb-2">{cuisine.description}</p>
              <div className="flex flex-wrap gap-1">
                {cuisine.dishes.map((dish, index) => (
                  <span 
                    key={index} 
                    className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                  >
                    {dish}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCuisines;