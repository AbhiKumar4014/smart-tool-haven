
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchToolsByCategory } from '@/services/aiToolsService';
import { AITool, ToolCategory } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const getCategoryNameFromId = (id: string): ToolCategory => {
  const mapping: Record<string, ToolCategory> = {
    'all': 'All',
    'machine-learning': 'Machine Learning',
    'nlp': 'NLP',
    'generative-ai': 'Generative AI',
    'computer-vision': 'Computer Vision',
    'ai-audio': 'AI Audio',
    'ai-video': 'AI Video',
    'ai-business': 'AI Business',
    'ai-research': 'AI Research',
    'ai-development': 'AI Development'
  };
  return mapping[id] || 'All';
};

const CategoryToolsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tools, setTools] = useState<AITool[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  const categoryName = id ? getCategoryNameFromId(id) : 'All';

  useEffect(() => {
    const loadTools = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const data = await fetchToolsByCategory(categoryName);
        setTools(data);
      } catch (error) {
        console.error(`Failed to fetch tools for category ${categoryName}:`, error);
        toast({
          title: 'Error',
          description: `Failed to load tools for ${categoryName}. Please try again later.`,
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadTools();
  }, [id, categoryName, toast]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/categories" 
            className="inline-flex items-center text-primary font-medium hover:underline mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Link>
          
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              {categoryName} Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore the best {categoryName.toLowerCase()} tools available today to enhance your projects and workflows.
            </p>
          </div>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-2 text-lg">Loading {categoryName} tools...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
              
              {tools.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <p className="text-gray-500 text-lg">No tools found in this category.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryToolsPage;
