
import { AITool, CategoryData, ToolCategory } from "@/types";

export const mockTools: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "An advanced AI chatbot developed by OpenAI that uses natural language processing to create humanlike conversational dialogue.",
    category: "Generative AI",
    subcategory: "Chatbots",
    url: "https://chat.openai.com",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",
    pricing: [
      {
        type: "Free",
        plan: "Basic",
        cost: "$0",
        features: ["Access to GPT-3.5", "Basic chat functionality", "Limited requests per day"],
        recommended: false
      },
      {
        type: "Premium",
        plan: "ChatGPT Plus",
        cost: "$20/month",
        features: ["Access to GPT-4", "Faster response times", "Priority access to new features", "Available even during peak times", "Unlimited messages"],
        recommended: true
      }
    ],
    company: "OpenAI",
    origin: "United States",
    trending: true,
    featured: true,
    tags: ["AI Chatbot", "NLP", "Conversational AI", "Text Generation"],
    features: [
      "Natural language understanding",
      "Context awareness in conversations",
      "Multiple language support",
      "Custom instructions",
      "Web browsing capability",
      "Code generation and debugging",
      "Content summarization"
    ],
    pros: [
      "Highly advanced natural language understanding",
      "Versatile applications from creative writing to technical assistance",
      "Regular updates with new capabilities",
      "User-friendly interface",
      "Ability to remember context within conversations",
      "Extensive knowledge base",
      "Handles complex queries effectively"
    ],
    cons: [
      "May occasionally provide incorrect information",
      "Knowledge cutoff date limits current information",
      "Lacks true understanding of concepts",
      "Can sometimes be too verbose",
      "No emotional intelligence",
      "Potential biases in responses",
      "Limited critical reasoning"
    ],
    rating: 4.7,
    users: "100M+",
    reviews: 25000,
    useCases: [
      "Customer support automation",
      "Content creation and brainstorming",
      "Language translation and tutoring",
      "Programming assistance and debugging",
      "Research summarization",
      "Personal assistant for everyday queries",
      "Educational tool for students and teachers"
    ],
    integrations: [
      "Microsoft Bing",
      "Slack",
      "Discord",
      "Zapier",
      "WordPress"
    ],
    alternatives: [
      {
        id: "claude",
        name: "Claude",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Anthropic_Logo.svg/1200px-Anthropic_Logo.svg.png"
      },
      {
        id: "bard",
        name: "Google Gemini",
        logoUrl: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini_2.max-1000x1000.png"
      }
    ],
    testimonials: [
      {
        author: "Alex Thompson",
        company: "Tech Innovators Inc.",
        content: "ChatGPT has revolutionized how our team brainstorms content. It's like having an extra creative mind in the room.",
        rating: 5
      },
      {
        author: "Maria Rodriguez",
        company: "Global Education Solutions",
        content: "As an educator, I've found ChatGPT incredibly useful for generating lesson plans and explanations tailored to different learning levels.",
        rating: 4.5
      }
    ],
    created: "2022-11-30",
    updated: "2023-12-15"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "A generative AI program that creates images from textual descriptions, similar to OpenAI's DALL-E and Stable Diffusion.",
    category: "Generative AI",
    subcategory: "Image Generation",
    url: "https://www.midjourney.com",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Midjourney_Emblem.png",
    pricing: [
      {
        type: "Subscription",
        plan: "Basic",
        cost: "$10/month",
        features: ["200 generations/month", "Standard queue", "Basic image resolution"],
        recommended: false
      },
      {
        type: "Subscription",
        plan: "Standard",
        cost: "$30/month",
        features: ["Unlimited generations", "Fast queue", "Higher image resolution", "Private generations"],
        recommended: true
      },
      {
        type: "Subscription",
        plan: "Pro",
        cost: "$60/month",
        features: ["Unlimited generations", "Maximum speed queue", "Maximum resolution", "Team collaboration features"],
        recommended: false
      }
    ],
    company: "Midjourney, Inc.",
    origin: "United States",
    trending: true,
    featured: true,
    tags: ["AI Art", "Image Generation", "Creative Tools", "Design"],
    features: [
      "Text-to-image generation",
      "Style customization",
      "High-resolution outputs",
      "Community showcase",
      "Discord integration",
      "Custom aspect ratios",
      "Stylize and variation parameters"
    ],
    pros: [
      "Produces highly aesthetic and artistic results",
      "Active and supportive community",
      "Regular model improvements",
      "Simple text prompt interface",
      "Good understanding of art styles and concepts",
      "Capable of photorealistic outputs",
      "Rapid generation process"
    ],
    cons: [
      "Discord-only interface may not suit all users",
      "Learning prompt engineering takes time",
      "Less control over specific details than some competitors",
      "Limited editing capabilities",
      "Can struggle with certain concepts like hands and faces",
      "No free tier available",
      "Queue times can be long during peak usage"
    ],
    rating: 4.8,
    users: "15M+",
    reviews: 12000,
    useCases: [
      "Concept art for products and marketing",
      "Social media visual content creation",
      "Book and album cover design",
      "Character and environment design for games",
      "Architectural visualization",
      "Fashion design concept generation",
      "Interior design visualization"
    ],
    integrations: [
      "Discord",
      "Various third-party prompt tools"
    ],
    alternatives: [
      {
        id: "dalle",
        name: "DALL-E",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/DALL-E_Logo.png/640px-DALL-E_Logo.png"
      },
      {
        id: "stable-diffusion",
        name: "Stable Diffusion",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Stable_Diffusion_logo.svg/1024px-Stable_Diffusion_logo.svg.png"
      }
    ],
    testimonials: [
      {
        author: "Daniel Wright",
        company: "Creative Visuals Studio",
        content: "Midjourney has completely transformed our concept art process. We can explore dozens of ideas in minutes rather than days.",
        rating: 5
      },
      {
        author: "Sara Patel",
        company: "Independent Artist",
        content: "The quality of Midjourney's outputs is consistently impressive. It's become an essential part of my creative workflow.",
        rating: 4.8
      }
    ],
    created: "2022-07-12",
    updated: "2023-11-05"
  },
  {
    id: "claude",
    name: "Claude",
    description: "An AI assistant created by Anthropic designed to be helpful, harmless, and honest, offering natural conversations and content generation.",
    category: "Generative AI",
    subcategory: "Chatbots",
    url: "https://claude.ai",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Anthropic_Logo.svg/1200px-Anthropic_Logo.svg.png",
    pricing: [
      {
        type: "Free",
        plan: "Basic",
        cost: "$0",
        features: ["Access to Claude 2", "100K character context", "Limited daily messages"],
        recommended: false
      },
      {
        type: "Premium",
        plan: "Claude Pro",
        cost: "$20/month",
        features: ["Priority access", "Increased usage limits", "200K character context", "5x more daily messages"],
        recommended: true
      }
    ],
    company: "Anthropic",
    origin: "United States",
    trending: true,
    featured: false,
    tags: ["AI Assistant", "Conversational AI", "Content Generation", "Research"],
    features: [
      "Long context understanding",
      "Document analysis",
      "Content summarization",
      "Multiple file upload capability",
      "Code generation and explanation",
      "Lower hallucination rates",
      "Constitutional AI approach for safety"
    ],
    pros: [
      "Exceptional handling of long contexts",
      "Known for more factually accurate responses",
      "Superior document analysis capabilities",
      "Clean, focused interface",
      "Strong performance on reasoning tasks",
      "Good awareness of limitations",
      "Designed with safety as a priority"
    ],
    cons: [
      "More limited knowledge base than some competitors",
      "Less widespread integration with other tools",
      "Can sometimes be overly cautious",
      "Limited availability in some regions",
      "Fewer features than more established competitors",
      "No mobile app currently available",
      "API access requires enterprise subscription"
    ],
    rating: 4.6,
    users: "10M+",
    reviews: 8500,
    useCases: [
      "Long document analysis and summarization",
      "Research assistance",
      "Professional content creation",
      "Data analysis and interpretation",
      "Educational explanations and tutoring",
      "Legal document review and summarization",
      "Complex problem-solving"
    ],
    integrations: [
      "Quora's Poe",
      "Amazon AWS Bedrock",
      "Slack",
      "DuckDuckGo"
    ],
    alternatives: [
      {
        id: "chatgpt",
        name: "ChatGPT",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png"
      },
      {
        id: "bard",
        name: "Google Gemini",
        logoUrl: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini_2.max-1000x1000.png"
      }
    ],
    testimonials: [
      {
        author: "Dr. Jennifer Lewis",
        company: "Research Institute of Technology",
        content: "Claude's ability to process and analyze lengthy research papers has saved our team countless hours. Its summary and insight capabilities are impressive.",
        rating: 4.7
      },
      {
        author: "Michael Chen",
        company: "Legal Documentation Services",
        content: "We've integrated Claude into our workflow for contract analysis. It catches nuances that other AI tools miss and provides more reliable interpretations.",
        rating: 4.5
      }
    ],
    created: "2023-03-14",
    updated: "2023-11-21"
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    description: "An AI pair programmer that offers code suggestions and complete functions in real-time, right from your editor.",
    category: "AI Development",
    subcategory: "Coding Assistant",
    url: "https://github.com/features/copilot",
    logoUrl: "https://github.githubassets.com/images/modules/site/copilot/copilot.png",
    pricing: [
      {
        type: "Subscription",
        plan: "Individual",
        cost: "$10/month",
        features: ["Code suggestions", "Multiple IDE support", "Context-aware completions"],
        recommended: true
      },
      {
        type: "Subscription",
        plan: "Business",
        cost: "$19/user/month",
        features: ["All Individual features", "Organization-wide management", "IP indemnity", "Enterprise security features"],
        recommended: false
      }
    ],
    company: "GitHub (Microsoft)",
    origin: "United States",
    trending: true,
    featured: true,
    tags: ["Code Generation", "Programming", "Developer Tools", "Productivity"],
    features: [
      "Real-time code suggestions",
      "Multiple programming language support",
      "Integration with popular IDEs",
      "Complete function generation",
      "Comment-to-code generation",
      "Context-aware assistance",
      "Natural language to code conversion"
    ],
    pros: [
      "Significantly speeds up coding process",
      "Reduces time spent on boilerplate code",
      "Seamless integration with development workflow",
      "Learns from your coding style",
      "Supports numerous programming languages",
      "Excellent for learning new languages or frameworks",
      "High-quality code suggestions"
    ],
    cons: [
      "Monthly subscription cost",
      "Occasional incorrect or outdated suggestions",
      "Can suggest insecure or inefficient code",
      "May lead to over-reliance for new developers",
      "Some privacy concerns regarding code usage",
      "Performance varies by language and framework",
      "Requires good internet connection"
    ],
    rating: 4.7,
    users: "1M+",
    reviews: 15000,
    useCases: [
      "Accelerating software development",
      "Learning new programming languages",
      "Automating repetitive coding tasks",
      "Exploring alternative implementations",
      "Documentation generation",
      "Quick prototyping",
      "Testing concept implementations"
    ],
    integrations: [
      "Visual Studio Code",
      "Visual Studio",
      "Neovim",
      "JetBrains IDEs",
      "GitHub"
    ],
    alternatives: [
      {
        id: "tabnine",
        name: "Tabnine",
        logoUrl: "https://www.tabnine.com/static/tabnine.png"
      },
      {
        id: "codewhisperer",
        name: "Amazon CodeWhisperer",
        logoUrl: "https://d2908q01vomqb2.cloudfront.net/7719a1c782a1ba91c031a682a0a2f8658209adbf/2023/03/02/image-42.png"
      }
    ],
    testimonials: [
      {
        author: "James Wilson",
        company: "Innovative Software Solutions",
        content: "GitHub Copilot has reduced our development time by at least 30%. It's like having a knowledgeable colleague constantly looking over your shoulder with helpful suggestions.",
        rating: 5
      },
      {
        author: "Sophia Martinez",
        company: "Tech Startup Accelerator",
        content: "For our startup teams, Copilot has been a game-changer. It allows developers to focus on architecture and logic rather than getting bogged down with syntax and boilerplate.",
        rating: 4.5
      }
    ],
    created: "2021-06-29",
    updated: "2023-10-17"
  },
  {
    id: "runway",
    name: "Runway Gen-2",
    description: "An AI-powered creative suite that enables video generation, editing, and visual effects through intuitive AI tools.",
    category: "AI Video",
    subcategory: "Video Generation",
    url: "https://runway.ml",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Runway_ML_logo.png",
    pricing: [
      {
        type: "Subscription",
        plan: "Standard",
        cost: "$15/month",
        features: ["Basic video generation", "Limited renders", "720p resolution"],
        recommended: false
      },
      {
        type: "Subscription",
        plan: "Pro",
        cost: "$35/month",
        features: ["Advanced video generation", "More renders", "1080p resolution", "Priority processing"],
        recommended: true
      },
      {
        type: "Enterprise",
        plan: "Enterprise",
        cost: "Custom",
        features: ["Unlimited renders", "4K resolution", "Dedicated support", "Custom integrations"],
        recommended: false
      }
    ],
    company: "Runway AI, Inc.",
    origin: "United States",
    trending: true,
    featured: true,
    tags: ["Video Generation", "Video Editing", "Visual Effects", "Creative Tools"],
    features: [
      "Text-to-video generation",
      "Image-to-video transformation",
      "Video editing and enhancement",
      "Green screen and background removal",
      "Motion tracking",
      "Text and image inpainting",
      "AI-powered visual effects"
    ],
    pros: [
      "Revolutionary text-to-video capabilities",
      "Intuitive interface accessible to non-professionals",
      "High-quality output compared to competitors",
      "Regular updates with new models and features",
      "Versatile creative applications",
      "Good integration with traditional workflow",
      "Strong community and tutorial resources"
    ],
    cons: [
      "Relatively expensive for individual creators",
      "Limited video length in generations",
      "Rendering can take significant time",
      "Still developing technology with occasional artifacts",
      "Limited control over specific details",
      "Resource-intensive for complex projects",
      "Learning curve for advanced features"
    ],
    rating: 4.6,
    users: "5M+",
    reviews: 7500,
    useCases: [
      "Short film and content creation",
      "Advertising and marketing videos",
      "Special effects for productions",
      "Concept visualization",
      "Educational content creation",
      "Social media content",
      "Prototyping video projects"
    ],
    integrations: [
      "Adobe After Effects",
      "Adobe Premiere Pro",
      "DaVinci Resolve",
      "Final Cut Pro"
    ],
    alternatives: [
      {
        id: "pika",
        name: "Pika Labs",
        logoUrl: "https://assets-global.website-files.com/6473d9e0e13b9d00a10d8274/64890d0ffd7ad85be4f9d051_pika-logo.svg"
      },
      {
        id: "gen-1",
        name: "Wonder Dynamics",
        logoUrl: "https://wonderdynamics.com/assets/logo.svg"
      }
    ],
    testimonials: [
      {
        author: "Emma Rodriguez",
        company: "Creative Films Studio",
        content: "Runway has completely transformed our pre-visualization process. What used to take weeks can now be accomplished in days or even hours.",
        rating: 4.8
      },
      {
        author: "Thomas Lee",
        company: "Digital Marketing Agency",
        content: "The Gen-2 model has allowed our small team to create commercial-quality video content that would have previously required a full production crew.",
        rating: 4.5
      }
    ],
    created: "2022-09-20",
    updated: "2023-12-01"
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    description: "An AI-powered answer engine that provides cited, conversational responses to complex questions by synthesizing information from across the web.",
    category: "AI Research",
    subcategory: "Information Retrieval",
    url: "https://www.perplexity.ai",
    logoUrl: "https://download.logo.wine/logo/Perplexity_(company)/Perplexity_(company)-Logo.wine.png",
    pricing: [
      {
        type: "Free",
        plan: "Basic",
        cost: "$0",
        features: ["Limited daily searches", "Web search capabilities", "Basic AI models"],
        recommended: false
      },
      {
        type: "Subscription",
        plan: "Pro",
        cost: "$20/month",
        features: ["Unlimited searches", "Premium AI models", "Copilot feature", "Advanced search filters", "Image uploads"],
        recommended: true
      }
    ],
    company: "Perplexity Labs, Inc.",
    origin: "United States",
    trending: true,
    featured: false,
    tags: ["Research", "Search Engine", "Information Retrieval", "Knowledge Assistant"],
    features: [
      "Real-time web information access",
      "Source citation for answers",
      "Conversational follow-up capability",
      "Multi-modal queries with images",
      "Subject-specific search focus",
      "Mobile app availability",
      "Academic and professional search modes"
    ],
    pros: [
      "Provides cited sources for verification",
      "Combines up-to-date information with AI synthesis",
      "Clear, conversational responses",
      "Effective at complex research tasks",
      "Maintains context through conversation",
      "Intuitive, clean interface",
      "Good at distilling complex topics"
    ],
    cons: [
      "Citations sometimes misrepresent source content",
      "Can occasionally blend information inaccurately",
      "Limited historical knowledge compared to some AI models",
      "Search depth not as comprehensive as traditional search engines",
      "Pro subscription required for unlimited usage",
      "May oversimplify complex topics",
      "Still developing features compared to established competitors"
    ],
    rating: 4.5,
    users: "8M+",
    reviews: 6000,
    useCases: [
      "Academic research and paper writing",
      "Market and competitive analysis",
      "Factual information gathering",
      "Learning complex topics quickly",
      "Travel planning and information",
      "Technical problem solving",
      "Current events understanding"
    ],
    integrations: [
      "Web browsers (Chrome extension)",
      "Mobile devices (iOS and Android)",
      "Discord"
    ],
    alternatives: [
      {
        id: "you",
        name: "You.com",
        logoUrl: "https://pbs.twimg.com/profile_images/1731056618755162112/LNYVnTzB_400x400.jpg"
      },
      {
        id: "kagi",
        name: "Kagi Search",
        logoUrl: "https://pbs.twimg.com/profile_images/1499075498756210691/IN1Y1fr0_400x400.jpg"
      }
    ],
    testimonials: [
      {
        author: "Dr. Rebecca Chen",
        company: "Academic Research Institute",
        content: "Perplexity has streamlined our initial research process dramatically. Its ability to compile and cite relevant information saves hours of preliminary work.",
        rating: 4.6
      },
      {
        author: "Jason Thompson",
        company: "Market Analysis Firm",
        content: "The combination of up-to-date information with AI synthesis makes Perplexity uniquely valuable for our industry research. It surfaces connections we might otherwise miss.",
        rating: 4.3
      }
    ],
    created: "2022-08-30",
    updated: "2023-11-15"
  }
];

export const categories: CategoryData[] = [
  {
    id: "all",
    name: "All",
    description: "Browse all AI tools across various categories",
    icon: "layout-grid"
  },
  {
    id: "ml",
    name: "Machine Learning",
    description: "Tools that leverage machine learning algorithms",
    icon: "brain"
  },
  {
    id: "nlp",
    name: "NLP",
    description: "Natural language processing and understanding tools",
    icon: "message-square-text"
  },
  {
    id: "generative",
    name: "Generative AI",
    description: "Tools that create new content like text, images, or code",
    icon: "sparkles"
  },
  {
    id: "vision",
    name: "Computer Vision",
    description: "Tools for image recognition and visual data processing",
    icon: "eye"
  },
  {
    id: "audio",
    name: "AI Audio",
    description: "Voice, music, and audio processing AI tools",
    icon: "music"
  },
  {
    id: "video",
    name: "AI Video",
    description: "Video generation, editing, and enhancement tools",
    icon: "video"
  },
  {
    id: "business",
    name: "AI Business",
    description: "AI tools for business automation and analytics",
    icon: "briefcase"
  },
  {
    id: "research",
    name: "AI Research",
    description: "Tools for data analysis and research assistance",
    icon: "microscope"
  },
  {
    id: "development",
    name: "AI Development",
    description: "Tools for developers to implement AI in their applications",
    icon: "code"
  }
];
