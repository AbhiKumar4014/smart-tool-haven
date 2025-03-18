
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, Users, ArrowUpRight } from 'lucide-react';
import { AITool } from '@/types';
import { handleImageLoad } from '@/utils/animations';

interface ToolCardProps {
  tool: AITool;
  featured?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, featured = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const cardClasses = `
    relative group flex flex-col h-full overflow-hidden rounded-xl border border-gray-100
    transition-all duration-300 bg-white
    ${featured ? 'shadow-elevation hover:shadow-lg' : 'shadow-subtle hover:shadow-elevation'}
  `;

  return (
    <div className={cardClasses}>
      {/* Badge if trending or featured */}
      {(tool.trending || tool.featured) && (
        <div className="absolute top-3 left-3 z-10">
          <div className={`px-2 py-1 text-xs font-medium rounded-full 
            ${tool.featured ? 'bg-primary/10 text-primary' : 'bg-orange-500/10 text-orange-500'}`}>
            {tool.featured ? 'Featured' : 'Trending'}
          </div>
        </div>
      )}
      
      <div className="flex items-center gap-3 p-4 pb-3">
        <div 
          className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center
            ${!imageLoaded ? 'animate-pulse' : ''}`}
        >
          <img
            src={tool.logoUrl}
            alt={`${tool.name} logo`}
            className={`w-10 h-10 object-contain img-loading ${imageLoaded ? 'img-loaded' : ''}`}
            onLoad={(e) => {
              handleImageLoad(e);
              setImageLoaded(true);
            }}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate group-hover:text-primary transition-colors">
            {tool.name}
          </h3>
          <div className="flex items-center text-sm text-gray-500">
            <span className="truncate">{tool.category}</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm font-medium text-amber-500">
          <Star className="h-4 w-4 fill-amber-500 mr-1" />
          {tool.rating.toFixed(1)}
        </div>
      </div>
      
      <div className="px-4 pb-2 flex-1">
        <p className="text-sm text-gray-600 line-clamp-3">
          {tool.description}
        </p>
      </div>
      
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center text-xs text-gray-500">
          <Users className="h-3 w-3 mr-1" />
          <span>{tool.users} users</span>
        </div>
        
        <div className="flex gap-2">
          <Link 
            to={`/tool/${tool.id}`}
            className="p-1.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="View details"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          
          <a 
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Visit website"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
