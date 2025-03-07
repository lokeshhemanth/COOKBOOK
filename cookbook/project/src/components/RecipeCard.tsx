import React from 'react';
import { Meal } from '../types';
import { ChevronDown, ChevronUp, Heart } from 'lucide-react';

interface RecipeCardProps {
  meal: Meal;
  isExpanded: boolean;
  onToggle: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ 
  meal, 
  isExpanded, 
  onToggle, 
  isFavorite, 
  onToggleFavorite 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          className="w-full h-64 object-cover"
        />
        {/* Favorite button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md transition-transform duration-200 hover:scale-110 z-10"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} 
          />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 w-full">
            <h3 className="text-white text-xl font-bold">{meal.strMeal}</h3>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  {meal.strCategory}
                </span>
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {meal.strArea}
                </span>
              </div>
              <button 
                onClick={onToggle}
                className="bg-white text-orange-500 p-1 rounded-full"
              >
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4">
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Ingredients</h4>
            <ul className="grid grid-cols-2 gap-2">
              {meal.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mr-2">
                    {ingredient.measure}
                  </span>
                  <span>{ingredient.name}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Instructions</h4>
            <p className="text-gray-700 whitespace-pre-line">{meal.strInstructions}</p>
          </div>
          
          {meal.strYoutube && (
            <div className="mt-4">
              <a 
                href={meal.strYoutube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-500 hover:text-orange-700"
              >
                Watch Video Tutorial
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeCard;