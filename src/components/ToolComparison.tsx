
import React from 'react';
import { ExternalLink, Check, X } from 'lucide-react';
import { AITool } from '@/types';

interface ToolComparisonProps {
  tools: AITool[];
}

const ToolComparison: React.FC<ToolComparisonProps> = ({ tools }) => {
  // Get all unique features from all tools
  const allFeatures = Array.from(new Set(tools.flatMap(tool => tool.features)));
  
  // Get all unique pricing plans
  const allPricingPlans = Array.from(
    new Set(
      tools.flatMap(tool => 
        tool.pricing?.map(pricing => pricing.plan) || []
      )
    )
  );

  return (
    <div className="overflow-x-auto pb-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="py-4 px-6 text-left min-w-[200px] border-b border-gray-200"></th>
            {tools.map(tool => (
              <th key={tool.id} className="py-4 px-6 text-left min-w-[250px] border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <img 
                    src={tool.logoUrl} 
                    alt={tool.name} 
                    className="w-10 h-10 object-contain rounded-md"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{tool.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">⭐ {tool.rating.toFixed(1)}</span>
                      <a 
                        href={tool.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        <span className="text-xs">Visit</span>
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Category */}
          <tr>
            <td className="py-4 px-6 font-medium text-gray-900 border-b border-gray-200">
              Category
            </td>
            {tools.map(tool => (
              <td key={tool.id} className="py-4 px-6 border-b border-gray-200">
                {tool.category}
                {tool.subcategory && <span className="text-gray-500 text-sm ml-1">({tool.subcategory})</span>}
              </td>
            ))}
          </tr>
          
          {/* Description */}
          <tr>
            <td className="py-4 px-6 font-medium text-gray-900 border-b border-gray-200">
              Description
            </td>
            {tools.map(tool => (
              <td key={tool.id} className="py-4 px-6 border-b border-gray-200 text-sm">
                {tool.description}
              </td>
            ))}
          </tr>
          
          {/* Company */}
          <tr>
            <td className="py-4 px-6 font-medium text-gray-900 border-b border-gray-200">
              Company
            </td>
            {tools.map(tool => (
              <td key={tool.id} className="py-4 px-6 border-b border-gray-200">
                {tool.company || "—"}
              </td>
            ))}
          </tr>
          
          {/* User Base */}
          <tr>
            <td className="py-4 px-6 font-medium text-gray-900 border-b border-gray-200">
              User Base
            </td>
            {tools.map(tool => (
              <td key={tool.id} className="py-4 px-6 border-b border-gray-200">
                {tool.users}
              </td>
            ))}
          </tr>
          
          {/* Features section */}
          <tr className="bg-gray-50">
            <td colSpan={tools.length + 1} className="py-3 px-6 font-semibold text-gray-900 border-b border-gray-200 text-lg">
              Features
            </td>
          </tr>
          
          {allFeatures.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="py-3 px-6 font-medium text-gray-900 border-b border-gray-200">
                {feature}
              </td>
              {tools.map(tool => (
                <td key={tool.id} className="py-3 px-6 border-b border-gray-200 text-center">
                  {tool.features.includes(feature) ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-400 mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}
          
          {/* Pricing section */}
          <tr className="bg-gray-50">
            <td colSpan={tools.length + 1} className="py-3 px-6 font-semibold text-gray-900 border-b border-gray-200 text-lg">
              Pricing
            </td>
          </tr>
          
          {allPricingPlans.map((plan, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="py-3 px-6 font-medium text-gray-900 border-b border-gray-200">
                {plan}
              </td>
              {tools.map(tool => {
                const pricingPlan = tool.pricing?.find(p => p.plan === plan);
                return (
                  <td key={tool.id} className="py-3 px-6 border-b border-gray-200">
                    {pricingPlan ? (
                      <div>
                        <div className="font-medium">{pricingPlan.cost}</div>
                        <div className="text-xs text-gray-500">{pricingPlan.type}</div>
                        {pricingPlan.recommended && (
                          <div className="mt-1 inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                            Recommended
                          </div>
                        )}
                      </div>
                    ) : (
                      "—"
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
          
          {/* Pros section */}
          <tr className="bg-gray-50">
            <td colSpan={tools.length + 1} className="py-3 px-6 font-semibold text-gray-900 border-b border-gray-200 text-lg">
              Pros & Cons
            </td>
          </tr>
          
          <tr>
            <td className="py-3 px-6 font-medium text-gray-900 border-b border-gray-200">
              Pros
            </td>
            {tools.map(tool => (
              <td key={tool.id} className="py-3 px-6 border-b border-gray-200">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {tool.pros.slice(0, 3).map((pro, i) => (
                    <li key={i} className="text-gray-700">{pro}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          
          <tr>
            <td className="py-3 px-6 font-medium text-gray-900 border-b border-gray-200">
              Cons
            </td>
            {tools.map(tool => (
              <td key={tool.id} className="py-3 px-6 border-b border-gray-200">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {tool.cons.slice(0, 3).map((con, i) => (
                    <li key={i} className="text-gray-700">{con}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToolComparison;
