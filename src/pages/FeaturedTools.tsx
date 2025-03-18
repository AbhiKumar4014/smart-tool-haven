
import React, { useState, useEffect } from 'react';
import { fetchFeaturedTools } from '@/services/aiToolsService';
import { AITool } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FeaturedToolsPage: React.FC = () => {
  const [tools, setTools] = useState<AITool[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadTools = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFeaturedTools();
        setTools(data);
      } catch (error) {
        console.error('Failed to fetch featured tools:', error);
        toast({
          title: 'Error',
          description: 'Failed to load featured tools. Please try again later.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadTools();
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Featured AI Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our hand-picked selection of exceptional AI tools that stand out for their innovation, quality, and impact on various industries.
            </p>
          </div>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-2 text-lg">Loading featured tools...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} featured />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeaturedToolsPage;
