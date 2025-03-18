
import { AITool, ToolCategory } from "@/types";
import { mockTools } from "@/lib/mockData";

declare global {
  interface Window {
    puter?: {
      ai?: {
        chat: (prompt: string) => Promise<{ message?: { content: string } } | string>;
      };
    };
  }
}

export const toolInterface = `export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  url: string;
  logoUrl: string;
  pricing?: array;
  company?: string;
  origin?: string;
  trending?: boolean;
  featured?: boolean;
  tags?: string[];
  features: string[];
  pros: string[];
  cons: string[];
  rating: number;
  users: string;
  reviews?: number;
  useCases?: string[];
  integrations?: string[];
  alternatives?: {
    id: string;
    name: string;
    logoUrl: string;
  }[];
  testimonials?: {
    author: string;
    company: string;
    content: string;
    rating: number;
  }[];
  created: string;
  updated: string;
}`;

export const trendingToolsPrompt = (countryFilter: string = '') => {
  let prompt = `Research and list the top 10 trending AI tools currently available`;
  if (countryFilter) {
    prompt = `Research and list the top trending AI tools currently available`;
    prompt += ` from ${countryFilter}`;
  }
  prompt += `. Please ensure your response spans a diverse range of categories. For each tool, gather and include comprehensive details including:
    - Primary use case and target audience
    - Key features and standout functionalities
    - Pricing details and user statistics
    - User testimonials and reviews
    - Use cases and integrations
    - Similar tools and alternatives
    - All additional metadata and statistics

    Return your answer strictly as a JSON array where each element is an object conforming to the following TypeScript interface:

    ${toolInterface}

    Ensure that:
    1. Each tool's object includes all the fields listed above. If certain details are not available, provide an appropriate null or empty value.
    2. The "description" field succinctly summarizes the tool's capabilities, primary use case, and its target market.
    3. The final output is strictly well-formatted, valid JSON with no extra commentary or markdown formatting.`;
  return prompt;
};

export const featuredToolsPrompt = () => {
  return `Research and list the top 8 featured AI tools that stand out for their innovation and impact. 
  These should be noteworthy tools that have received significant recognition or have unique capabilities.
  
  Return your answer strictly as a JSON array where each element is an object conforming to the following TypeScript interface:
  
  ${toolInterface}
  
  Ensure that each tool has the featured property set to true, and include all the required fields.`;
};

export const searchToolsPrompt = (query: string) => {
  return `Search for AI tools related to "${query}" and provide comprehensive details on the top matches.
  
  Return your answer strictly as a JSON array where each element is an object conforming to the following TypeScript interface:
  
  ${toolInterface}
  
  Ensure all details are accurate and up-to-date.`;
};

export const categoryToolsPrompt = (category: ToolCategory) => {
  return `List the top AI tools in the ${category} category, providing comprehensive details for each.
  
  Return your answer strictly as a JSON array where each element is an object conforming to the following TypeScript interface:
  
  ${toolInterface}
  
  Ensure that each tool properly belongs to the ${category} category.`;
};

export const compareToolsPrompt = (tools: string[]) => {
  return `Provide a detailed comparison of the following AI tools: ${tools.join(', ')}.
  Compare them on features, pricing, usability, and target audience.
  
  Return your answer strictly as a JSON array where each element is an object conforming to the following TypeScript interface:
  
  ${toolInterface}
  
  Ensure all comparison data is accurate and highlight key differences between the tools.`;
};

const getAiResponse = async (prompt: string): Promise<string> => {
  if (!window.puter?.ai?.chat) {
    console.warn("Puter AI is not initialized. Using mock data instead.");
    throw new Error("Puter AI is not initialized");
  }

  try {
    const aiResponse = await window.puter.ai.chat(prompt);

    if (typeof aiResponse === "string") {
      return aiResponse;
    }

    if (aiResponse?.message?.content) {
      return aiResponse.message.content;
    }

    throw new Error("Unexpected response format from Puter AI.");
  } catch (error: unknown) {
    console.error("Error calling Puter AI:", error);
    throw new Error(`Failed to get AI response from Puter: ${(error as Error).message}`);
  }
};

export const fetchTrendingTools = async (countryFilter: string = ''): Promise<AITool[]> => {
  try {
    const prompt = trendingToolsPrompt(countryFilter);
    const response = await getAiResponse(prompt);
    return JSON.parse(response) as AITool[];
  } catch (error) {
    console.error("Error fetching trending tools:", error);
    return mockTools.filter(tool => tool.trending);
  }
};

export const fetchFeaturedTools = async (): Promise<AITool[]> => {
  try {
    const prompt = featuredToolsPrompt();
    const response = await getAiResponse(prompt);
    return JSON.parse(response) as AITool[];
  } catch (error) {
    console.error("Error fetching featured tools:", error);
    return mockTools.filter(tool => tool.featured);
  }
};

export const searchTools = async (query: string): Promise<AITool[]> => {
  try {
    const prompt = searchToolsPrompt(query);
    const response = await getAiResponse(prompt);
    return JSON.parse(response) as AITool[];
  } catch (error) {
    console.error("Error searching tools:", error);
    return mockTools.filter(tool => 
      tool.name.toLowerCase().includes(query.toLowerCase()) || 
      tool.description.toLowerCase().includes(query.toLowerCase()) ||
      (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
    );
  }
};

export const fetchToolsByCategory = async (category: ToolCategory): Promise<AITool[]> => {
  if (category === 'All') {
    try {
      const trendingTools = await fetchTrendingTools();
      const featuredTools = await fetchFeaturedTools();
      const combinedTools = [...trendingTools, ...featuredTools];
      // Remove duplicates based on id
      const uniqueTools = Array.from(new Map(combinedTools.map(tool => [tool.id, tool])).values());
      return uniqueTools;
    } catch (error) {
      console.error("Error fetching all tools:", error);
      return mockTools;
    }
  }
  
  try {
    const prompt = categoryToolsPrompt(category);
    const response = await getAiResponse(prompt);
    return JSON.parse(response) as AITool[];
  } catch (error) {
    console.error(`Error fetching tools for category ${category}:`, error);
    return mockTools.filter(tool => tool.category === category);
  }
};

export const compareTools = async (toolIds: string[]): Promise<AITool[]> => {
  const toolNames = toolIds.map(id => {
    const tool = mockTools.find(t => t.id === id);
    return tool ? tool.name : id;
  });
  
  try {
    const prompt = compareToolsPrompt(toolNames);
    const response = await getAiResponse(prompt);
    return JSON.parse(response) as AITool[];
  } catch (error) {
    console.error("Error comparing tools:", error);
    return mockTools.filter(tool => toolIds.includes(tool.id));
  }
};
