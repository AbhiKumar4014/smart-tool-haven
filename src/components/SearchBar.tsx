
import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AITool } from '@/types';
import { searchTools } from '@/services/aiToolsService';

interface SearchBarProps {
  onClose?: () => void;
  fullWidth?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, fullWidth = false }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<AITool[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
        if (onClose) onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);
  
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length >= 2) {
        setIsLoading(true);
        try {
          const data = await searchTools(query);
          setResults(data);
          setShowResults(true);
        } catch (error) {
          console.error('Error searching tools:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
        setShowResults(false);
      }
    }, 300);
    
    return () => clearTimeout(delayDebounceFn);
  }, [query]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setShowResults(false);
      if (onClose) onClose();
    }
  };
  
  return (
    <div 
      ref={searchRef}
      className={`relative ${fullWidth ? 'w-full' : 'w-[300px] md:w-[400px]'}`}
    >
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search AI tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            autoFocus
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
      
      {showResults && (
        <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-elevation overflow-hidden border border-gray-100">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              Searching tools...
            </div>
          ) : results.length > 0 ? (
            <div className="max-h-[400px] overflow-y-auto">
              {results.slice(0, 5).map((tool) => (
                <div 
                  key={tool.id}
                  onClick={() => {
                    navigate(`/tool/${tool.id}`);
                    setShowResults(false);
                    if (onClose) onClose();
                  }}
                  className="p-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors duration-150"
                >
                  <img 
                    src={tool.logoUrl} 
                    alt={tool.name} 
                    className="w-10 h-10 rounded-md object-contain p-1 border border-gray-100"
                  />
                  <div className="flex-1 text-left">
                    <p className="font-medium text-gray-900">{tool.name}</p>
                    <p className="text-xs text-gray-500 line-clamp-1">{tool.description}</p>
                  </div>
                </div>
              ))}
              <div 
                onClick={() => {
                  navigate(`/search?q=${encodeURIComponent(query)}`);
                  setShowResults(false);
                  if (onClose) onClose();
                }}
                className="p-3 text-center text-primary text-sm hover:bg-gray-50 cursor-pointer"
              >
                See all results for "{query}"
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
