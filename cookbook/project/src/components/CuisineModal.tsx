import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Cuisine } from '../types';
import RelatedCuisines from './RelatedCuisines';
import RecipeDetails from './RecipeDetails';
import { recipes } from '../data/recipes';

interface CuisineModalProps {
  cuisine: Cuisine;
  relatedCuisines: Cuisine[];
  onClose: () => void;
  onSelectCuisine: (cuisine: string) => void;
}

const CuisineModal: React.FC<CuisineModalProps> = ({ 
  cuisine, 
  relatedCuisines, 
  onClose,
  onSelectCuisine
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  
  // Get recipes for this cuisine's signature dishes
  const cuisineRecipes = Object.values(recipes).filter(
    recipe => recipe.cuisine === cuisine.name.toLowerCase()
  );
  
  // Find recipes that match the signature dishes
  const signatureRecipes = cuisine.dishes.map(dishName => {
    return cuisineRecipes.find(recipe => 
      recipe.name.toLowerCase().includes(dishName.toLowerCase())
    );
  }).filter(Boolean);
  
  const currentRecipe = selectedRecipe ? recipes[selectedRecipe] : null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {currentRecipe ? (
          <RecipeDetails 
            recipe={currentRecipe} 
            onClose={() => setSelectedRecipe(null)} 
          />
        ) : (
          <>
            <div className="relative">
              <img 
                src={cuisine.image} 
                alt={`${cuisine.name} cuisine`} 
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white">{cuisine.name} Cuisine</h2>
                <p className="text-white text-lg">{cuisine.region}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">About {cuisine.name} Cuisine</h3>
                <p className="text-gray-700">{cuisine.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Signature Dishes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {signatureRecipes.map((recipe) => (
                    recipe && (
                      <div 
                        key={recipe.id}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        onClick={() => setSelectedRecipe(recipe.id)}
                      >
                        <div className="relative h-48">
                          <img 
                            src={recipe.image} 
                            alt={recipe.name} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                            <div className="p-3 w-full">
                              <h4 className="text-white font-bold text-lg">{recipe.name}</h4>
                              <div className="flex items-center text-white text-sm">
                                <span className="mr-3">{recipe.prepTime} prep</span>
                                <span>{recipe.difficulty} difficulty</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3">
                          <p className="text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
                          <button className="mt-2 text-sm text-orange-500 font-medium hover:text-orange-600">
                            View Full Recipe →
                          </button>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
              
              <RelatedCuisines 
                relatedCuisines={relatedCuisines} 
                onSelectCuisine={(cuisine) => {
                  onSelectCuisine(cuisine);
                }}
              />
              
              <div className="mt-8 text-center">
                <button 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                  onClick={() => {
                    // This would typically search for recipes of this cuisine
                    onClose();
                  }}
                >
                  Explore {cuisine.name} Recipes
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CuisineModal;