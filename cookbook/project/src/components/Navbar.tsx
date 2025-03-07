import React from 'react';
import { BookOpen, Home, Heart } from 'lucide-react';
import SearchBar from './SearchBar';

interface NavbarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  onShowFavorites: () => void;
  onShowHome: () => void;
  showFavorites: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onSearch, 
  isLoading, 
  onShowFavorites, 
  onShowHome,
  showFavorites
}) => {
  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8" />
              <h1 className="text-3xl font-bold">CookBooks</h1>
            </div>
            <p className="text-lg italic">Your global culinary passport</p>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-white py-4 shadow-md mb-8 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onShowHome}
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition duration-200"
            >
              <Home className="h-6 w-6" />
              <span className="font-medium hidden sm:inline">Home</span>
            </button>
            
            <div className="w-full max-w-2xl mx-4">
              <SearchBar onSearch={onSearch} isLoading={isLoading} />
            </div>
            
            <button 
              onClick={onShowFavorites}
              className={`flex items-center space-x-2 transition duration-200 ${
                showFavorites ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              <Heart className={`h-6 w-6 ${showFavorites ? 'fill-orange-500' : ''}`} />
              <span className="font-medium hidden sm:inline">Favorites</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;