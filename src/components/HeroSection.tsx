
import React, { useEffect } from 'react';
import { setupRevealAnimations } from '@/utils/animations';
import SearchBar from './SearchBar';

const HeroSection: React.FC = () => {
  useEffect(() => {
    const cleanup = setupRevealAnimations();
    return cleanup;
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container px-4 mx-auto z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium reveal">
            <span className="mr-2">✨</span>
            Discover the best AI tools for every need
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance reveal">
            Find the Perfect<br /> 
            <span className="text-primary">AI Tool</span> for Your Workflow
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance reveal">
            Explore our curated collection of cutting-edge AI tools to enhance your productivity, creativity, and decision-making.
          </p>
          
          <div className="max-w-xl mx-auto mb-12 reveal">
            <SearchBar fullWidth />
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500 reveal">
            <span>Popular searches:</span>
            <a href="/search?q=image+generation" className="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              Image Generation
            </a>
            <a href="/search?q=chatbots" className="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              Chatbots
            </a>
            <a href="/search?q=coding+assistant" className="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              Coding Assistant
            </a>
            <a href="/search?q=video+generation" className="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              Video Generation
            </a>
          </div>
        </div>
        
        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center reveal">
          <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-subtle">
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-gray-500">AI Tools</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-subtle">
            <div className="text-3xl font-bold text-gray-900">40+</div>
            <div className="text-gray-500">Categories</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-subtle">
            <div className="text-3xl font-bold text-gray-900">10K+</div>
            <div className="text-gray-500">Reviews</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-subtle">
            <div className="text-3xl font-bold text-gray-900">Daily</div>
            <div className="text-gray-500">Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
