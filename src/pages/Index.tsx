
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedTools from '@/components/FeaturedTools';
import TrendingTools from '@/components/TrendingTools';
import Footer from '@/components/Footer';
import { ArrowRight, Grid3X3, Zap, LineChart, Layers, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '@/lib/mockData';
import { setupRevealAnimations } from '@/utils/animations';

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize reveal animations
    const cleanup = setupRevealAnimations();
    
    // Scroll to top on load
    window.scrollTo(0, 0);
    
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar transparent />
      
      <main>
        <HeroSection />
        
        <FeaturedTools />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 reveal">
              <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Categories
              </div>
              <h2 className="text-3xl font-bold mb-4 text-balance">
                Explore AI Tools by Category
              </h2>
              <p className="text-gray-600 text-lg">
                Browse our comprehensive collection of AI tools organized by functionality and use case.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
              {categories.slice(1, 7).map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-subtle hover:shadow-elevation transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                    {category.id === 'ml' && <Brain className="h-6 w-6 text-primary" />}
                    {category.id === 'nlp' && <MessageSquareText className="h-6 w-6 text-primary" />}
                    {category.id === 'generative' && <Sparkles className="h-6 w-6 text-primary" />}
                    {category.id === 'vision' && <Eye className="h-6 w-6 text-primary" />}
                    {category.id === 'audio' && <Music className="h-6 w-6 text-primary" />}
                    {category.id === 'video' && <Video className="h-6 w-6 text-primary" />}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </Link>
              ))}
              
              <Link
                to="/categories"
                className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white rounded-xl p-6 flex justify-center items-center gap-2 shadow-subtle hover:shadow-elevation transition-all duration-300 hover:bg-gray-50"
              >
                <span className="font-medium text-primary">View all categories</span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </div>
        </section>
        
        <TrendingTools />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 reveal">
              <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold mb-4 text-balance">
                The Ultimate AI Tool Discovery Platform
              </h2>
              <p className="text-gray-600 text-lg">
                We help you navigate the rapidly evolving AI landscape by providing comprehensive, up-to-date information on the best tools available.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <div className="bg-white rounded-xl p-6 shadow-subtle flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Real-Time Updates</h3>
                <p className="text-gray-600">
                  Stay informed with daily updates on new and trending AI tools across all categories.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-subtle flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Detailed Comparisons</h3>
                <p className="text-gray-600">
                  Make informed decisions with our side-by-side comparisons of features, pricing, and use cases.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-subtle flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Community Insights</h3>
                <p className="text-gray-600">
                  Benefit from real user reviews, ratings, and testimonials to find the best tools for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-elevation overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
              
              <div className="max-w-3xl relative z-10">
                <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Join Our Community
                </div>
                <h2 className="text-3xl font-bold mb-4 text-balance">
                  Stay Updated with the Latest AI Tools and Trends
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Subscribe to our newsletter and be the first to know about new AI tools, exclusive insights, and industry trends.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-primary text-white rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-md"
                  >
                    Subscribe
                  </button>
                </form>
                
                <p className="text-sm text-gray-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// These components are used in this file but not imported directly
// They are dynamically rendered based on category.id
const Brain: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.5C15.5 18.5 17 16.5 17 13.5C17 12 17 10 15.5 9C15.5 9 16 8 15 6.5C14 5 12 4.5 10.5 5.5C10 5.5 8.5 5.5 8 6.5C6.5 6.5 5 8 5 10.5C5 13 7 13.5 7 13.5C7 15 8 18.5 12 18.5Z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.5C12 20.5 12.5 21 14 21.5"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 11.5C10 12.6046 10.8954 13.5 12 13.5C13.1046 13.5 14 12.6046 14 11.5C14 10.3954 13.1046 9.5 12 9.5C10.8954 9.5 10 10.3954 10 11.5Z"></path>
  </svg>
);

const MessageSquareText: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
  </svg>
);

const Sparkles: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
  </svg>
);

const Eye: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
  </svg>
);

const Music: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
  </svg>
);

const Video: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
  </svg>
);

export default Index;
