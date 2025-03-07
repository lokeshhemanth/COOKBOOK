import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a dish (e.g., Pasta, Curry, Sushi)..."
          className="w-full py-3 px-5 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm text-gray-700"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-3 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition duration-300 disabled:opacity-50"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;