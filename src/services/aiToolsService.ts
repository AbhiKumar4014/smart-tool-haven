import { AITool, Category } from "@/types";
import { getMockTools } from "@/lib/mockData";

/**
 * Fetch all AI tools
 */
export const fetchAITools = async (): Promise<AITool[]> => {
  // In a real app, this would be an API call
  // For now, simulate delay and return mock data
  await new Promise(resolve => setTimeout(resolve, 500));
  return getMockTools();
};

/**
 * Fetch trending AI tools
 */
export const fetchTrendingTools = async (): Promise<AITool[]> => {
  // In a real app, this would be an API call
  // For now, simulate delay and return mock data
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Simulate trending by sorting by rating
  const tools = getMockTools()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  
  return tools;
};

/**
 * Fetch featured AI tools
 */
export const fetchFeaturedTools = async (): Promise<AITool[]> => {
  // In a real app, this would be an API call
  // For now, simulate delay and return mock data
  await new Promise(resolve => setTimeout(resolve, 700));
  
  // Simulate featured by filtering tools with rating >= 4.5
  const tools = getMockTools()
    .filter(tool => tool.rating >= 4.5)
    .slice(0, 6);
  
  return tools;
};

/**
 * Fetch a single AI tool by ID
 */
export const fetchToolById = async (id: string): Promise<AITool | null> => {
  // In a real app, this would be an API call
  // For now, simulate delay and return mock data
  await new Promise(resolve => setTimeout(resolve, 400));
  
  const tools = getMockTools();
  const tool = tools.find(tool => tool.id === id);
  
  return tool || null;
};

/**
 * Search AI tools by query
 */
export const searchTools = async (query: string): Promise<AITool[]> => {
  // In a real app, this would be an API call
  // For now, simulate delay and return mock data
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const tools = getMockTools();
  const searchTerm = query.toLowerCase();
  
  const results = tools.filter(tool => {
    return (
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.category.toLowerCase().includes(searchTerm) ||
      (tool.subcategory?.toLowerCase().includes(searchTerm) ?? false) ||
      tool.features.some(feature => feature.toLowerCase().includes(searchTerm))
    );
  });
  
  return results;
};

/**
 * Fetch new release AI tools
 */
export const fetchNewReleaseTools = async (): Promise<AITool[]> => {
  // In a real app, this would be an API call
  // For now, simulate delay and return mock data
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Get trending tools but modify data to simulate new releases
  const tools = getMockTools()
    .slice(8, 17)
    .map(tool => ({
      ...tool,
      releaseDate: new Date().toISOString().split('T')[0], // Today's date
      isNewRelease: true,
    }));
  
  return tools;
};
