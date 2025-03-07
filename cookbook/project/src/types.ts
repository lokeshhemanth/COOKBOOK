export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string;
  strYoutube?: string;
  ingredients: {
    name: string;
    measure: string;
  }[];
}

export interface MealDBResponse {
  meals: any[] | null;
}

export interface Cuisine {
  name: string;
  region: string;
  dishes: string[];
  image: string;
  description: string;
}

export interface CuisineRelationship {
  [key: string]: Cuisine[];
}

export interface Recipe {
  id: string;
  name: string;
  cuisine: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  description: string;
}