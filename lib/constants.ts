export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'AI Prompts', href: '/prompts' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const CTA_BUTTONS = [
  { label: 'Get AI Prompts', href: '/prompts', variant: 'primary' as const },
  { label: 'Hire Me', href: '/contact', variant: 'secondary' as const },
];

export const FEATURES = [
  {
    icon: '💻',
    title: 'Full Stack Development',
    description: 'Building scalable web apps with React, Next.js, Node.js, and modern databases',
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    description: 'Leveraging ChatGPT, Claude, and custom AI solutions to automate workflows',
  },
  {
    icon: '✨',
    title: 'Prompt Engineering',
    description: 'Crafting optimized prompts for image generation, video, and code generation',
  },
  {
    icon: '📚',
    title: 'AI Prompts Library',
    description: 'Access professional prompts for image generation, video scripts, and coding tasks',
  },
  {
    icon: '🎥',
    title: 'YouTube Tutorials',
    description: 'Watch tutorials on web development, AI automation, and modern tech stacks',
  },
  {
    icon: '🚀',
    title: 'Rapid Deployment',
    description: 'Deploy projects to Vercel, AWS, Docker—fast, scalable, and production-ready',
  },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'AI Prompts', href: '/prompts' },
      { label: 'YouTube', href: '/youtube' },
      { label: 'Services', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    icon: '📧',
    href: 'mailto:hello@devai.com',
    label: 'Email',
  },
  {
    icon: '🔗',
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: '𝕏',
    href: 'https://twitter.com',
    label: 'Twitter',
  },
];

export const PROMPT_CATEGORIES = ['All', 'Image', 'Video', 'Coding'];

export const PROMPT_DATA = [
  {
    id: '1',
    title: 'Professional Product Photography',
    description: 'Generate stunning product photos with perfect lighting and composition',
    category: 'Image',
    content: `Create a professional product photograph of [PRODUCT] on a clean white background with soft natural lighting from the top-left. The product should be in sharp focus with a shallow depth of field. 85mm lens equivalent, f/2.8, studio lighting, professional color grading in the style of Apple product photography.`,
  },
  {
    id: '2',
    title: 'Cinematic Video Script Generator',
    description: 'AI-powered script generation for engaging video content',
    category: 'Video',
    content: `Write a cinematic video script about [TOPIC] that is 2-3 minutes long when spoken. Include: a compelling hook in the first 3 seconds, clear storytelling with 3-4 main points, emotional pacing, and a strong call-to-action. Use vivid descriptive language to guide cinematography and visual composition.`,
  },
  {
    id: '3',
    title: 'React Component Generator',
    description: 'Generates clean, reusable React components with TypeScript',
    category: 'Coding',
    content: `Create a React TypeScript component for [COMPONENT_NAME] that: includes proper prop typing, uses functional components with hooks, has clean code formatting, includes JSDoc comments, is fully typed with no 'any' types, and follows modern React best practices. Use Tailwind CSS for styling.`,
  },
  {
    id: '4',
    title: 'Logo Design Prompt',
    description: 'Create modern, minimalist logo designs for brands',
    category: 'Image',
    content: `Design a modern, minimalist logo for [COMPANY_NAME] that represents [BRAND_VALUES]. The logo should be: simple and memorable, consisting of a mark and wordmark, scalable to any size, work in single color and full color, and use [COLOR_PALETTE]. Style: [DESIGN_STYLE] with clean lines and professional appeal.`,
  },
  {
    id: '5',
    title: 'YouTube Thumbnail Creator',
    description: 'Eye-catching thumbnails that boost CTR',
    category: 'Image',
    content: `Create a YouTube thumbnail for a video titled "[VIDEO_TITLE]" that: uses high contrast colors with bright accent colors, displays the most important element clearly, includes bold text (max 3 words), has a compelling facial expression or reaction if relevant, maintains 16:9 aspect ratio, and includes a border for visibility in playlists.`,
  },
  {
    id: '6',
    title: 'API Integration Code',
    description: 'Generate API integration code with error handling',
    category: 'Coding',
    content: `Write TypeScript code to integrate with [API_NAME] API. Include: proper type definitions for request/response, error handling with try-catch, retry logic with exponential backoff, request/response logging, environment variable usage for API keys, and a reusable service class pattern. Follow RESTful standards.`,
  },
  {
    id: '7',
    title: 'Social Media Carousel',
    description: 'Multi-slide educational content for Instagram',
    category: 'Image',
    content: `Design a 5-slide Instagram carousel about [TOPIC]. Each slide should: have a single key point, use consistent brand colors, include bold readable text, feature a visual element or illustration, maintain 1080x1350px dimensions, and have a cohesive visual style. The sequence should build from introduction to conclusion with clear progression.`,
  },
  {
    id: '8',
    title: 'Explainer Video Script',
    description: 'Educational content that simplifies complex topics',
    category: 'Video',
    content: `Write a 60-90 second explainer video script about [COMPLEX_TOPIC] that: breaks down the concept into 3-4 simple steps, uses analogies to everyday objects, avoids technical jargon, includes visual cues for animation, ends with a clear benefit statement, has a conversational tone, and maintains audience engagement throughout.`,
  },
  {
    id: '9',
    title: 'Database Schema Designer',
    description: 'Design efficient database schemas for applications',
    category: 'Coding',
    content: `Design a PostgreSQL database schema for [APPLICATION_PURPOSE]. Include: proper table relationships (1:1, 1:N, M:N), appropriate data types and constraints, indexes for performance, soft delete patterns if needed, created_at/updated_at timestamps, user_id fields for multitenancy, and SQL comments explaining each table purpose.`,
  },
  {
    id: '10',
    title: 'Character Illustration',
    description: 'Create unique character designs for brands',
    category: 'Image',
    content: `Illustrate a character for [BRAND_NAME] that: embodies the brand personality, has distinctive visual features, displays [EMOTION/EXPRESSION], wears [STYLE_OF_CLOTHING], is drawn in [ART_STYLE] with [COLOR_PALETTE], is suitable for use across digital platforms, and can express multiple emotions through simple pose/expression variations.`,
  },
  {
    id: '11',
    title: 'Database Query Optimizer',
    description: 'Write optimized SQL queries for large datasets',
    category: 'Coding',
    content: `Write optimized SQL queries for [OPERATION] that: uses appropriate JOINs and indexes, minimizes subqueries, includes proper aggregation, filters data at the query level not in application, explains execution plan, uses query hints if needed, handles NULL values appropriately, and includes performance metrics comments.`,
  },
  {
    id: '12',
    title: 'Product Demo Animation',
    description: 'Animated walkthroughs of product features',
    category: 'Video',
    content: `Script a 90-second product demo video for [PRODUCT] that: highlights the top 3 features, shows the user journey from problem to solution, includes B-roll of the interface in action, uses text overlays for feature names, has ambient background music, includes a demo of a real-world use case, and ends with pricing/CTA.`,
  },
];

export const YOUTUBE_VIDEOS = [
  {
    id: 'yt1',
    title: 'Building a Full Stack App with React & Supabase',
    description: 'Learn how to build a production-ready application with authentication, database, and real-time features',
    thumbnailUrl: 'https://via.placeholder.com/1280x720?text=Full+Stack+App',
    videoUrl: 'https://youtube.com/watch?v=example1',
    duration: '28:45',
  },
  {
    id: 'yt2',
    title: 'AI Automation: ChatGPT API Integration Tutorial',
    description: 'Complete guide to integrating ChatGPT API with practical examples, error handling, and best practices',
    thumbnailUrl: 'https://via.placeholder.com/1280x720?text=AI+Automation',
    videoUrl: 'https://youtube.com/watch?v=example2',
    duration: '35:20',
  },
  {
    id: 'yt3',
    title: 'Master Prompt Engineering in 30 Minutes',
    description: 'From beginner to advanced: techniques to get better results from AI models',
    thumbnailUrl: 'https://via.placeholder.com/1280x720?text=Prompt+Engineering',
    videoUrl: 'https://youtube.com/watch?v=example3',
    duration: '32:15',
  },
  {
    id: 'yt4',
    title: 'Node.js 14 Complete Course',
    description: 'Build modern web applications with server components, app router, and best practices',
    thumbnailUrl: 'https://via.placeholder.com/1280x720?text=Node.js+14',
    videoUrl: 'https://youtube.com/watch?v=example4',
    duration: '2:14:30',
  },
  {
    id: 'yt5',
    title: 'Deploy Your App in 10 Minutes',
    description: 'Quick deployment guide using Vercel, environment variables, and custom domains',
    thumbnailUrl: 'https://via.placeholder.com/1280x720?text=Deploy+App',
    videoUrl: 'https://youtube.com/watch?v=example5',
    duration: '9:47',
  },
  {
    id: 'yt6',
    title: 'TypeScript Tips & Tricks',
    description: 'Advanced TypeScript patterns that will improve your code quality and development speed',
    thumbnailUrl: 'https://via.placeholder.com/1280x720?text=TypeScript+Tips',
    videoUrl: 'https://youtube.com/watch?v=example6',
    duration: '22:30',
  },
];

export const SERVICES_DATA = [
  {
    id: 'service-1',
    icon: '💻',
    title: 'Full Stack Development',
    description:
      'End-to-end web application development with modern technologies and best practices',
    included: [
      'React, Next.js, TypeScript',
      'Responsive UI/UX Design',
      'Database Design & Optimization',
      'Node.js, Express, Supabase',
      'API Development & Integration',
      'Deployment & DevOps',
    ],
    cta: {
      text: 'Get Started',
      href: '/contact',
    },
  },
  {
    id: 'service-2',
    icon: '🤖',
    title: 'AI Automation & Integration',
    description:
      'Leverage AI to automate workflows and enhance your applications',
    included: [
      'ChatGPT & Claude Integration',
      'Prompt Engineering',
      'Document Processing',
      'Custom AI Workflows',
      'AI-Powered Chatbots',
      'Image & Video Generation',
    ],
    cta: {
      text: 'Get Started',
      href: '/contact',
    },
  },
];

export const CONTACT_METHODS = [
  {
    id: 'email',
    icon: '✉️',
    label: 'Email',
    value: 'contact@devai.com',
    link: 'mailto:contact@devai.com',
    bgColor: '#8B5CF6',
  },
  {
    id: 'phone',
    icon: '📞',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    bgColor: '#06B6D4',
  },
  {
    id: 'whatsapp',
    icon: '💬',
    label: 'WhatsApp',
    value: '+1 (555) 123-4567',
    link: 'https://wa.me/15551234567',
    bgColor: '#10B981',
  },
  {
    id: 'youtube',
    icon: '📺',
    label: 'YouTube',
    value: '@devai',
    link: 'https://youtube.com/@devai',
    bgColor: '#EF4444',
  },
  {
    id: 'instagram',
    icon: '📷',
    label: 'Instagram',
    value: '@devai',
    link: 'https://instagram.com/devai',
    bgColor: '#EC4899',
  },
];

