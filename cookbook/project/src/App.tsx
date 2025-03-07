import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Globe, Utensils, Camera, Coffee, Home, Heart } from 'lucide-react';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import { searchMealsByName } from './api';
import { Meal, Cuisine } from './types';
import Navbar from './components/Navbar';
import CuisineModal from './components/CuisineModal';
import { cuisines, cuisineRelationships } from './data/cuisines';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Meal[]>([]);
  const [expandedMealId, setExpandedMealId] = useState<string | null>(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine | null>(null);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setSearchPerformed(true);
    setShowFavorites(false);
    try {
      const results = await searchMealsByName(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching for meals:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleRecipeExpansion = (mealId: string) => {
    setExpandedMealId(expandedMealId === mealId ? null : mealId);
  };

  const toggleFavorite = (mealId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(mealId)) {
        return prevFavorites.filter(id => id !== mealId);
      } else {
        return [...prevFavorites, mealId];
      }
    });
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
    setSearchPerformed(true);
  };

  const handleShowHome = () => {
    setShowFavorites(false);
    setSearchPerformed(false);
  };

  const handleSelectCuisine = (cuisineName: string) => {
    const normalizedName = cuisineName.toLowerCase();
    const selected = cuisines[normalizedName];
    if (selected) {
      setSelectedCuisine(selected);
    }
  };

  // Filter meals based on favorites when in favorites view
  const displayedMeals = showFavorites 
    ? searchResults.filter(meal => favorites.includes(meal.idMeal))
    : searchResults;

  // Get related cuisines for the selected cuisine
  const relatedCuisines = selectedCuisine 
    ? cuisineRelationships[selectedCuisine.name.toLowerCase()] || []
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar 
        onSearch={handleSearch} 
        isLoading={isLoading} 
        onShowFavorites={handleShowFavorites}
        onShowHome={handleShowHome}
        showFavorites={showFavorites}
      />

      {/* Cuisine Modal */}
      {selectedCuisine && (
        <CuisineModal 
          cuisine={selectedCuisine}
          relatedCuisines={relatedCuisines}
          onClose={() => setSelectedCuisine(null)}
          onSelectCuisine={handleSelectCuisine}
        />
      )}

      {/* Search Results */}
      {searchPerformed && (
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {isLoading ? 'Searching...' : 
             showFavorites ? `Favorite Recipes (${displayedMeals.length})` :
             displayedMeals.length > 0 ? `Found ${displayedMeals.length} recipes` : 'No recipes found'}
          </h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedMeals.map(meal => (
                <RecipeCard 
                  key={meal.idMeal}
                  meal={meal}
                  isExpanded={expandedMealId === meal.idMeal}
                  onToggle={() => toggleRecipeExpansion(meal.idMeal)}
                  isFavorite={favorites.includes(meal.idMeal)}
                  onToggleFavorite={() => toggleFavorite(meal.idMeal)}
                />
              ))}
            </div>
          )}
          
          {showFavorites && displayedMeals.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">You haven't added any favorites yet.</p>
              <p className="text-gray-500 mt-2">Search for recipes and click the heart icon to add them to your favorites.</p>
            </div>
          )}
        </section>
      )}

      {/* Main Content (only show if no search performed) */}
      {!searchPerformed && (
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Discover the World Through Food</h2>
                <p className="text-xl text-gray-600 mb-6">
                  CookBooks transforms your kitchen into a gateway to global cuisine, connecting you with authentic recipes from every corner of the world. Powered by the extensive MealsDB API, our platform offers thousands of meticulously curated dishes with step-by-step instructions and vibrant photography that captures the essence of each culinary tradition.
                </p>
                <p className="text-xl text-gray-600 mb-8">
                  With our intuitive, visually-rich interface, you can effortlessly browse recipes by country, ingredient, or cooking technique. Our powerful search functionality helps you find exactly what you're craving or discover new favorites based on what's already in your pantry. Whether you're a curious beginner or an experienced home chef, CookBooks makes exploring international cuisine accessible, inspiring, and deliciously rewarding.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                  Start Your Culinary Journey
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="International cuisine dishes" 
                  className="rounded-lg shadow-xl max-w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Key Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-orange-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Global Recipe Collection</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Access thousands of authentic recipes from around the world through our seamless integration with the MealsDB API.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Explore dishes from over 30 international cuisines</li>
                  <li>Discover traditional cooking methods and authentic ingredients</li>
                  <li>Learn about the cultural significance behind iconic dishes</li>
                  <li>Regular updates bring fresh recipes to your fingertips</li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Camera className="h-6 w-6 text-orange-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Visual Recipe Browsing</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Immerse yourself in a visual feast with our gallery-style recipe browsing experience.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>High-quality food photography showcases each dish</li>
                  <li>Browse visually by category, region, or ingredient</li>
                  <li>Image-forward design helps you discover appealing new dishes</li>
                  <li>Visual preparation steps make cooking more intuitive</li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Coffee className="h-6 w-6 text-orange-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Modern, Intuitive Interface</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Navigate the world of global cuisine with our clean, thoughtfully designed interface.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Minimalist design puts the focus on food and recipes</li>
                  <li>Intuitive category organization makes exploration effortless</li>
                  <li>Responsive layout works beautifully on any device</li>
                  <li>Distraction-free cooking mode for when you're in the kitchen</li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Search className="h-6 w-6 text-orange-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Powerful Search Functionality</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Find exactly what you're looking for with our comprehensive search capabilities.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Search by ingredient, cuisine type, meal category, or keyword</li>
                  <li>"What's in my kitchen" feature finds recipes based on ingredients you have</li>
                  <li>Filter results by cooking time, difficulty level, or dietary restrictions</li>
                  <li>Save search preferences for faster future discovery</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">What Our Users Say</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "CookBooks has completely transformed my weeknight dinners. I've discovered so many amazing dishes from around the world that my family now looks forward to trying something new each week!"
                </p>
                <p className="font-semibold text-gray-800">— Maria L., Home Cook</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "The visual browsing feature is incredible. I often don't know what I want to cook until I see it, and CookBooks makes that discovery process both easy and inspiring."
                </p>
                <p className="font-semibold text-gray-800">— James T., Food Enthusiast</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "As someone who travels frequently, I love being able to recreate authentic dishes from places I've visited. The search functionality helps me find exactly what I'm looking for every time."
                </p>
                <p className="font-semibold text-gray-800">— Sophia K., Culinary Explorer</p>
              </div>
            </div>
          </section>

          {/* Featured Cuisines */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured Cuisines</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(cuisines).slice(0, 5).map(([key, cuisine]) => (
                <div 
                  key={key}
                  className="relative group overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => handleSelectCuisine(key)}
                >
                  <img 
                    src={cuisine.image} 
                    alt={`${cuisine.name} cuisine`} 
                    className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-bold p-4">{cuisine.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="max-w-4xl mx-auto text-center bg-gradient-to-r from-amber-500 to-orange-600 p-10 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Begin Your Global Culinary Adventure Today</h2>
            <p className="text-xl text-white mb-8">
              Join thousands of home cooks who are expanding their culinary horizons and bringing international flavors to their table. With CookBooks as your guide, the world's cuisine is just a tap away.
            </p>
            <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Download CookBooks Now
            </button>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6" />
            <h2 className="text-xl font-bold">CookBooks</h2>
          </div>
          <p className="text-gray-400">© 2025 CookBooks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;