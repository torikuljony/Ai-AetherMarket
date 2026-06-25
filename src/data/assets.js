const assets = [
  {
    id: 1,
    title: "Architectural Visualization Master Prompt",
    tag: "Midjourney",
    difficulty: "Advanced",
    price: 5,
    copies: "1.2k",
    sales: "1240+",
    views: "12.4k",
    rating: 4.9,
    reviews: 124,
    creator: "VisualSynthesist",
    creatorName: "VisualSynthesist",
    creatorEmail: "visualsynthesist@gmail.com",
    description: "Generate ultra-realistic architectural renders with advanced lighting, material control, and cinematic environments.",
    tags: ["GPT-4", "Architecture", "Midjourney V6", "Cinematic"],
    reviewsData: [
      {
        user: "John_Dev",
        rating: 5,
        comment: "The lighting parameters are incredibly precise.",
      },
      {
        user: "Art_Minima",
        rating: 4,
        comment: "Solid results. Massive time saver.",
      },
      {
        user: "Sarah_K",
        rating: 5,
        comment: "Absolutely worth the price.",
      },
    ],
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200",
    promptText: `Generate an ultra-realistic architectural visualization.

Requirements:
- cinematic lighting
- realistic shadows
- 8k render quality
- ultra detailed textures
- photorealistic materials

Scene:
Modern luxury villa with dramatic evening lighting and premium materials.`
  },
  {
    id: 2,
    title: "Data-Rich UI Architect",
    tag: "SDXL",
    difficulty: "Beginner",
    price: 0,
    copies: "856",
    sales: "856",
    views: "8.1k",
    rating: 4.7,
    reviews: 89,
    creator: "UIForge",
    creatorName: "UIForge",
    creatorEmail: "uiforge@gmail.com",
    description: "Create modern dashboard interfaces with data visualization and responsive layouts.",
    tags: ["SDXL", "UI Design", "Dashboard"],
    reviewsData: [],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    promptText: `Create a modern dashboard UI design.

Requirements:
- dark theme
- glassmorphism
- analytics charts
- responsive layout
- premium clean design

Output:
Professional SaaS dashboard interface.`
  },
  {
    id: 3,
    title: "Pro Python Code Reviewer",
    tag: "ChatGPT",
    difficulty: "Intermediate",
    price: 5,
    copies: "2.1k",
    sales: "2100+",
    views: "18k",
    rating: 4.8,
    reviews: 210,
    creator: "CodeMaster",
    creatorName: "CodeMaster",
    creatorEmail: "codemaster@gmail.com",
    description: "Analyze Python code, detect bugs, improve readability, and optimize performance.",
    tags: ["ChatGPT", "Python", "Developer"],
    reviewsData: [],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200",
    promptText: `Review this Python code like a senior engineer.

Tasks:
- detect bugs
- improve readability
- optimize performance
- suggest best practices
- explain improvements clearly

Return improved version with explanation.`
  },
  {
    id: 4,
    title: "Isometric Habitat Series",
    tag: "Stable Diffusion",
    difficulty: "Beginner",
    price: 5,
    copies: "429",
    sales: "429",
    views: "5.4k",
    rating: 4.6,
    reviews: 64,
    creator: "DesignCraft",
    creatorName: "DesignCraft",
    creatorEmail: "designcraft@gmail.com",
    description: "Generate beautiful isometric worlds and futuristic habitats.",
    tags: ["SD", "Isometric", "Art"],
    reviewsData: [],
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200",
    promptText: `Generate an isometric futuristic habitat.

Requirements:
- clean isometric perspective
- sci-fi environment
- soft lighting
- detailed structures
- premium render quality

Theme:
Futuristic floating smart city.`
  },
  {
    id: 5,
    title: "Cyber Future UI",
    tag: "Midjourney",
    difficulty: "Advanced",
    price: 8,
    copies: "1.7k",
    sales: "1700+",
    views: "15.2k",
    rating: 4.9,
    reviews: 320,
    creator: "FuturePixel",
    creatorName: "FuturePixel",
    creatorEmail: "futurepixel@gmail.com",
    description: "Create futuristic cyberpunk-inspired interfaces and product concepts.",
    tags: ["Cyberpunk", "UI", "Midjourney"],
    reviewsData: [],
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1200",
    promptText: `Create a futuristic cyberpunk UI design.

Requirements:
- neon glow
- dark futuristic theme
- holographic elements
- sharp layouts
- premium visuals

Theme:
AI operating system dashboard.`
  },
  {
    id: 6,
    title: "Prompt Engineer Pack",
    tag: "ChatGPT",
    difficulty: "Intermediate",
    price: 4,
    copies: "678",
    sales: "678",
    views: "6.2k",
    rating: 4.5,
    reviews: 98,
    creator: "PromptLab",
    creatorName: "PromptLab",
    creatorEmail: "promptlab@gmail.com",
    description: "A collection of high-performing prompts for productivity and content generation.",
    tags: ["Prompting", "AI", "ChatGPT"],
    reviewsData: [],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    promptText: `Act as an expert prompt engineer.

Your tasks:
- improve weak prompts
- make prompts detailed
- maximize output quality
- optimize for ChatGPT and Claude

Return optimized final prompt.`
  },
  {
    id: 7,
    title: "AI Art Collection",
    tag: "SDXL",
    difficulty: "Beginner",
    price: 6,
    copies: "512",
    sales: "512",
    views: "4.8k",
    rating: 4.4,
    reviews: 77,
    creator: "DreamCanvas",
    creatorName: "DreamCanvas",
    creatorEmail: "dreamcanvas@gmail.com",
    description: "Generate artistic illustrations and concept art with SDXL.",
    tags: ["Art", "SDXL", "Illustration"],
    reviewsData: [],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
    promptText: `Generate premium AI artwork.

Requirements:
- highly detailed
- artistic composition
- cinematic mood
- sharp focus
- professional quality

Style:
Fantasy concept art with rich colors.`
  },
  {
    id: 8,
    title: "Prompt Vault Premium",
    tag: "Claude",
    difficulty: "Advanced",
    price: 10,
    copies: "3.4k",
    sales: "3400+",
    views: "25k",
    rating: 5.0,
    reviews: 512,
    creator: "VaultAI",
    creatorName: "VaultAI",
    creatorEmail: "vaultai@gmail.com",
    description: "Premium collection of advanced prompts for creators and businesses.",
    tags: ["Claude", "Premium", "Business"],
    reviewsData: [],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    promptText: `You are an elite AI business consultant.

Tasks:
- solve business problems
- generate growth strategies
- optimize operations
- improve revenue

Response style:
Strategic, actionable, high-value.`
  },
];

export default assets;