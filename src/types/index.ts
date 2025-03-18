
export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  url: string;
  logoUrl: string;
  pricing?: PricingTier[];
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
}

export interface PricingTier {
  type: string;
  plan: string;
  cost: string;
  features: string[];
  recommended: boolean;
}

export type ToolCategory = 
  | 'All'
  | 'Machine Learning'
  | 'NLP'
  | 'Generative AI'
  | 'Computer Vision'
  | 'AI Audio'
  | 'AI Video'
  | 'AI Business'
  | 'AI Research'
  | 'AI Development';

export interface CategoryData {
  id: string;
  name: ToolCategory;
  description: string;
  icon: string;
}
