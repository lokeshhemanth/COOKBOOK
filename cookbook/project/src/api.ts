import { Meal, MealDBResponse } from './types';

const API_KEY = import.meta.env.VITE_MEALDB_API_KEY;
const BASE_URL = 'https://www.themealdb.com/api/json/v1';

export async function searchMealsByName(query: string): Promise<Meal[]> {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/search.php?s=${encodeURIComponent(query)}`);
    const data: MealDBResponse = await response.json();
    
    if (!data.meals) return [];
    
    return data.meals.map(formatMeal);
  } catch (error) {
    console.error('Error searching meals:', error);
    return [];
  }
}

export async function getMealById(id: string): Promise<Meal | null> {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/lookup.php?i=${id}`);
    const data: MealDBResponse = await response.json();
    
    if (!data.meals || data.meals.length === 0) return null;
    
    return formatMeal(data.meals[0]);
  } catch (error) {
    console.error('Error getting meal details:', error);
    return null;
  }
}

// Helper function to format meal data and extract ingredients
function formatMeal(meal: any): Meal {
  const ingredients = [];
  
  // MealDB stores ingredients and measures in numbered properties up to 20
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        name: ingredient,
        measure: measure || ''
      });
    }
  }
  
  return {
    idMeal: meal.idMeal,
    strMeal: meal.strMeal,
    strCategory: meal.strCategory,
    strArea: meal.strArea,
    strInstructions: meal.strInstructions,
    strMealThumb: meal.strMealThumb,
    strTags: meal.strTags,
    strYoutube: meal.strYoutube,
    ingredients
  };
}