
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchTools } from '@/services/aiToolsService';
import { AITool } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import SearchBar from '@/components/SearchBar';
import { Loader2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [tools, setTools] = useState<AITool[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const performSearch = async () => {
      if (!query) return;
      
      try {
        setIsLoading(true);
        setNoResults(false);
        const results = await searchTools(query);
        setTools(results);
        setNoResults(results.length === 0);
      } catch (error) {
        console.error('Error searching tools:', error);
        toast({
          title: 'Search Error',
          description: 'Failed to perform search. Please try again later.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [query, toast]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Search Results
            </h1>
            
            <div className="mb-8">
              <SearchBar fullWidth />
            </div>
            
            {query && (
              <p className="text-lg text-gray-600 mb-8">
                {isLoading ? 'Searching for' : noResults ? 'No results found for' : 'Results for'} 
                <span className="font-semibold"> "{query}"</span>
              </p>
            )}
          </div>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-2 text-lg">Searching...</span>
            </div>
          ) : noResults ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No tools found</h3>
              <p className="text-gray-600 max-w-md">
                We couldn't find any AI tools matching your search query. Try different keywords or browse our categories.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
