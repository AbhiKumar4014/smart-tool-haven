
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ToolCard from './ToolCard';
import { AITool } from '@/types';
import { fetchTrendingTools } from '@/services/aiToolsService';

const TrendingTools: React.FC = () => {
  const [tools, setTools] = useState<AITool[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTools = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingTools();
        setTools(data.slice(0, 4)); // Show only 4 trending tools
        setError('');
      } catch (err) {
        console.error('Failed to fetch trending tools:', err);
        setError('Failed to load trending tools. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadTools();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Trending Tools
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-subtle h-64 animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-200"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded-md w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trending Tools
          </h2>
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Trending Tools
          </h2>
          <Link
            to="/trending"
            className="flex items-center text-primary font-medium transition-colors hover:text-primary/80"
          >
            View all
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTools;
