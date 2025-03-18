
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import SearchBar from './SearchBar';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 w-full',
    {
      'glass-nav shadow-sm': isScrolled || !transparent,
      'bg-transparent': transparent && !isScrolled
    }
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-primary flex items-center gap-2 transition-transform duration-300 transform hover:scale-[1.02]"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span>AI Tool Hub</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/categories" className="hover:text-primary transition-colors duration-200">Categories</Link>
          <Link to="/trending" className="hover:text-primary transition-colors duration-200">Trending</Link>
          <Link to="/new-releases" className="hover:text-primary transition-colors duration-200">New Releases</Link>
          <Link to="/compare" className="hover:text-primary transition-colors duration-200">Compare</Link>
        </div>
        
        <div className="flex items-center gap-4">
          {showSearch ? (
            <div className="relative">
              <SearchBar onClose={() => setShowSearch(false)} />
            </div>
          ) : (
            <button 
              onClick={() => setShowSearch(true)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          )}
          
          <button className="px-5 py-2 bg-primary text-white rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-md">
            Submit Tool
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
