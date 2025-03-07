import React from 'react';
import { Recipe } from '../types';
import { Clock, Users, BarChart } from 'lucide-react';

interface RecipeDetailsProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe, onClose }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 w-full">
            <h2 className="text-3xl font-bold text-white">{recipe.name}</h2>
            <p className="text-white text-lg capitalize">{recipe.cuisine} Cuisine</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Recipe Info */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
            <Clock className="h-4 w-4 mr-1" />
            <span>Prep: {recipe.prepTime}</span>
          </div>
          <div className="flex items-center bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
            <Clock className="h-4 w-4 mr-1" />
            <span>Cook: {recipe.cookTime}</span>
          </div>
          <div className="flex items-center bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
            <Users className="h-4 w-4 mr-1" />
            <span>Serves: {recipe.servings}</span>
          </div>
          <div className="flex items-center bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
            <BarChart className="h-4 w-4 mr-1" />
            <span>Difficulty: {recipe.difficulty}</span>
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700 italic">{recipe.description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Ingredients */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Ingredients</h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Instructions */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Instructions</h3>
            <ol className="space-y-3">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-gray-700">
                  <div className="flex">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Back to Cuisine
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;