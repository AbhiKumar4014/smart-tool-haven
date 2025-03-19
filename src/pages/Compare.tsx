
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { fetchToolById } from '@/services/aiToolsService';
import { AITool } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolComparison from '@/components/ToolComparison';
import { Loader2, AlertCircle, PlusCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';

const ComparePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const toolIds = searchParams.get('tools')?.split(',') || [];
  
  const [tools, setTools] = useState<AITool[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const fetchTools = async () => {
      if (toolIds.length === 0) return;
      
      try {
        setIsLoading(true);
        setError('');
        
        const toolPromises = toolIds.map(id => fetchToolById(id));
        const fetchedTools = await Promise.all(toolPromises);
        
        setTools(fetchedTools.filter(Boolean) as AITool[]);
        
        if (fetchedTools.some(tool => !tool)) {
          toast({
            title: 'Warning',
            description: 'Some tools could not be loaded for comparison.',
            variant: 'destructive',
          });
        }
      } catch (error) {
        console.error('Error fetching tools for comparison:', error);
        setError('Failed to load tools for comparison');
        toast({
          title: 'Error',
          description: 'There was a problem loading the comparison data.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTools();
  }, [toolIds, toast]);

  const handleAddTool = () => {
    // This would ideally open a modal to select another tool
    // For now, we'll redirect to search
    navigate('/search');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Compare AI Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mb-6">
              Compare features, pricing, and benefits of different AI tools side by side to find the best fit for your needs.
            </p>
            
            {tools.length === 0 && !isLoading && !error && (
              <div className="mt-4">
                <SearchBar fullWidth />
                <p className="text-gray-500 mt-2 text-sm">
                  Search and select tools to compare them side by side
                </p>
              </div>
            )}
          </div>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-2 text-lg">Loading comparison data...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">Error Loading Comparison</h3>
              <p className="text-gray-600 max-w-md mb-6">
                {error}
              </p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          ) : tools.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <PlusCircle className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No Tools Selected</h3>
              <p className="text-gray-600 max-w-md mb-6">
                Select at least two AI tools to compare their features, pricing, and capabilities side by side.
              </p>
              <Button onClick={handleAddTool}>
                Find Tools to Compare
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8 flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Comparing {tools.length} {tools.length === 1 ? 'Tool' : 'Tools'}
                </h2>
                {tools.length < 4 && (
                  <Button 
                    variant="outline" 
                    onClick={handleAddTool}
                    className="flex items-center gap-2"
                  >
                    <PlusCircle className="w-4 h-4" />
                    Add Another Tool
                  </Button>
                )}
              </div>
              
              <ToolComparison tools={tools} />
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComparePage;
