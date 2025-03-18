
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToolCategory, CategoryData } from '@/types';
import { Grid2X2, MessageSquare, Cpu, Image, Music, Video, Briefcase, BarChart3, Code } from 'lucide-react';

const categoryData: CategoryData[] = [
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    description: 'Tools for creating and optimizing machine learning models',
    icon: 'Cpu'
  },
  {
    id: 'nlp',
    name: 'NLP',
    description: 'Natural language processing tools for text analysis',
    icon: 'MessageSquare'
  },
  {
    id: 'generative-ai',
    name: 'Generative AI',
    description: 'Tools for creating content using AI',
    icon: 'Grid2X2'
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    description: 'Image recognition and analysis tools',
    icon: 'Image'
  },
  {
    id: 'ai-audio',
    name: 'AI Audio',
    description: 'Tools for audio processing and generation',
    icon: 'Music'
  },
  {
    id: 'ai-video',
    name: 'AI Video',
    description: 'Video analysis and generation tools',
    icon: 'Video'
  },
  {
    id: 'ai-business',
    name: 'AI Business',
    description: 'Business automation and productivity tools',
    icon: 'Briefcase'
  },
  {
    id: 'ai-research',
    name: 'AI Research',
    description: 'Tools for scientific research and data analysis',
    icon: 'BarChart3'
  },
  {
    id: 'ai-development',
    name: 'AI Development',
    description: 'Development frameworks and platforms for AI',
    icon: 'Code'
  }
];

const CategoryCard: React.FC<{ category: CategoryData }> = ({ category }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6" />;
      case 'Grid2X2': return <Grid2X2 className="w-6 h-6" />;
      case 'Image': return <Image className="w-6 h-6" />;
      case 'Music': return <Music className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
      case 'Code': return <Code className="w-6 h-6" />;
      default: return <Grid2X2 className="w-6 h-6" />;
    }
  };

  return (
    <Link 
      to={`/category/${category.id}`} 
      className="flex flex-col p-6 rounded-xl bg-white border border-gray-100 shadow-subtle hover:shadow-elevation transition-all duration-300"
    >
      <div className="p-3 mb-4 rounded-lg bg-primary/10 w-fit">
        {getIcon(category.icon)}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {category.name}
      </h3>
      <p className="text-gray-600">
        {category.description}
      </p>
    </Link>
  );
};

const CategoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              AI Tool Categories
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Browse through our comprehensive collection of AI tools organized by categories to find the perfect solution for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoriesPage;
