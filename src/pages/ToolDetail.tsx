
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AITool } from '@/types';
import { fetchToolById } from '@/services/aiToolsService';
import { 
  ArrowLeft, ExternalLink, Star, Users, Check, X, 
  Tag, Briefcase, Calendar, MapPin, MessageSquare 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { handleImageLoad } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ToolDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tool, setTool] = useState<AITool | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const loadTool = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const data = await fetchToolById(id);
        setTool(data);
      } catch (error) {
        console.error(`Failed to fetch tool with ID ${id}:`, error);
        toast({
          title: 'Error',
          description: 'Failed to load tool details. Please try again later.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadTool();
  }, [id, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-8 w-40 bg-gray-200 rounded mb-6"></div>
              <div className="h-10 w-3/4 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded mb-10"></div>
              
              <div className="flex gap-6 mb-10">
                <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="h-80 bg-gray-200 rounded-lg mb-6"></div>
                </div>
                <div>
                  <div className="h-60 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Tool Not Found</h1>
            <p className="text-gray-600 mb-6">The AI tool you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/"
            className="inline-flex items-center text-primary font-medium hover:underline mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to AI Tools
          </Link>
          
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div 
              className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center
                ${!imageLoaded ? 'animate-pulse' : ''}`}
            >
              <img
                src={tool.logoUrl}
                alt={`${tool.name} logo`}
                className={`w-16 h-16 md:w-20 md:h-20 object-contain ${imageLoaded ? 'img-loaded' : 'img-loading'}`}
                onLoad={(e) => {
                  handleImageLoad(e);
                  setImageLoaded(true);
                }}
              />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{tool.name}</h1>
                <div className="flex items-center text-amber-500 font-medium">
                  <Star className="h-5 w-5 fill-amber-500 mr-1" />
                  {tool.rating.toFixed(1)}
                </div>
                {tool.trending && (
                  <div className="px-2 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500">
                    Trending
                  </div>
                )}
                {tool.featured && (
                  <div className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-4">
                {tool.category && (
                  <Link to={`/category/${tool.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors">
                    <Tag className="h-4 w-4 mr-1 inline" />
                    {tool.category}
                  </Link>
                )}
                {tool.company && (
                  <div>
                    <Briefcase className="h-4 w-4 mr-1 inline" />
                    {tool.company}
                  </div>
                )}
                {tool.origin && (
                  <div>
                    <MapPin className="h-4 w-4 mr-1 inline" />
                    {tool.origin}
                  </div>
                )}
                {tool.users && (
                  <div>
                    <Users className="h-4 w-4 mr-1 inline" />
                    {tool.users} users
                  </div>
                )}
                {tool.reviews && (
                  <div>
                    <MessageSquare className="h-4 w-4 mr-1 inline" />
                    {tool.reviews} reviews
                  </div>
                )}
                {tool.created && (
                  <div>
                    <Calendar className="h-4 w-4 mr-1 inline" />
                    Released: {new Date(tool.created).toLocaleDateString()}
                  </div>
                )}
              </div>
              
              <p className="text-gray-700 mb-6">{tool.description}</p>
              
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                
                {tool.tags && tool.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tool.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2">
              <Tabs defaultValue="features">
                <TabsList className="mb-6">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
                  <TabsTrigger value="pros-cons">Pros & Cons</TabsTrigger>
                  {tool.testimonials && tool.testimonials.length > 0 && (
                    <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                  )}
                </TabsList>
                
                <TabsContent value="features" className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-subtle">
                    <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                    <ul className="space-y-3">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="use-cases" className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-subtle">
                    <h2 className="text-xl font-semibold mb-4">Common Use Cases</h2>
                    {tool.useCases && tool.useCases.length > 0 ? (
                      <ul className="space-y-3">
                        {tool.useCases.map((useCase, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500">No use cases available for this tool.</p>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="pros-cons" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-subtle">
                      <h2 className="text-xl font-semibold mb-4 text-green-600">Pros</h2>
                      <ul className="space-y-3">
                        {tool.pros.map((pro, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-subtle">
                      <h2 className="text-xl font-semibold mb-4 text-red-600">Cons</h2>
                      <ul className="space-y-3">
                        {tool.cons.map((con, index) => (
                          <li key={index} className="flex items-start">
                            <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                {tool.testimonials && tool.testimonials.length > 0 && (
                  <TabsContent value="testimonials" className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-subtle">
                      <h2 className="text-xl font-semibold mb-4">User Testimonials</h2>
                      <div className="space-y-4">
                        {tool.testimonials.map((testimonial, index) => (
                          <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium">{testimonial.author}</div>
                              <div className="flex items-center text-amber-500">
                                <Star className="h-4 w-4 fill-amber-500 mr-1" />
                                {testimonial.rating.toFixed(1)}
                              </div>
                            </div>
                            <div className="text-sm text-gray-500 mb-2">{testimonial.company}</div>
                            <p className="text-gray-700">{testimonial.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </div>
            
            <div className="space-y-6">
              {tool.pricing && tool.pricing.length > 0 && (
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-subtle">
                  <h2 className="text-xl font-semibold mb-4">Pricing</h2>
                  <div className="space-y-4">
                    {tool.pricing.map((price, index) => (
                      <div key={index} className={`p-4 rounded-lg ${price.recommended ? 'bg-primary/5 border border-primary/20' : 'bg-gray-50'}`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium">{price.plan}</div>
                            <div className="text-sm text-gray-500">{price.type}</div>
                          </div>
                          {price.recommended && (
                            <div className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                              Recommended
                            </div>
                          )}
                        </div>
                        <div className="text-xl font-bold mb-2">{price.cost}</div>
                        {price.features && price.features.length > 0 && (
                          <ul className="text-sm space-y-1">
                            {price.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="h-4 w-4 text-primary mr-1 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {tool.integrations && tool.integrations.length > 0 && (
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-subtle">
                  <h2 className="text-xl font-semibold mb-4">Integrations</h2>
                  <ul className="space-y-2">
                    {tool.integrations.map((integration, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {integration}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {tool.alternatives && tool.alternatives.length > 0 && (
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-subtle">
                  <h2 className="text-xl font-semibold mb-4">Alternatives</h2>
                  <div className="space-y-3">
                    {tool.alternatives.map((alt, index) => (
                      <Link 
                        key={index} 
                        to={`/tool/${alt.id}`}
                        className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-8 h-8 mr-3 bg-gray-50 rounded overflow-hidden flex items-center justify-center">
                          <img 
                            src={alt.logoUrl} 
                            alt={`${alt.name} logo`}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <span>{alt.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolDetailPage;
