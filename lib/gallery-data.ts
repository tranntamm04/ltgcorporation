export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface GalleryCollection {
  id: string;
  name: string;
  description: string;
  images: GalleryImage[];
  featured: boolean;
  coverImage: string;
}

export const galleryImages: GalleryImage[] = [
  // Nature Collection
  {
    id: 'nature-1',
    title: 'Mountain Peaks',
    description: 'Majestic mountain landscape at sunrise',
    category: 'nature',
    image: '/images/nature-mountains.jpg',
    tags: ['landscape', 'mountains', 'nature'],
    featured: true,
  },
  {
    id: 'nature-2',
    title: 'Forest Stream',
    description: 'Serene forest stream flowing through ancient trees',
    category: 'nature',
    image: '/images/nature-forest.jpg',
    tags: ['forest', 'water', 'nature'],
    featured: false,
  },
  {
    id: 'nature-3',
    title: 'Ocean Waves',
    description: 'Powerful ocean waves crashing on the shore',
    category: 'nature',
    image: '/images/nature-ocean.jpg',
    tags: ['ocean', 'water', 'seascape'],
    featured: false,
  },
  {
    id: 'nature-4',
    title: 'Golden Fields',
    description: 'Beautiful golden wheat fields under blue sky',
    category: 'nature',
    image: '/images/nature-fields.jpg',
    tags: ['fields', 'landscape', 'agriculture'],
    featured: true,
  },
  {
    id: 'nature-5',
    title: 'Desert Dunes',
    description: 'Vast desert landscape with undulating sand dunes',
    category: 'nature',
    image: '/images/nature-desert.jpg',
    tags: ['desert', 'landscape', 'sand'],
    featured: false,
  },
  {
    id: 'nature-6',
    title: 'Aurora Borealis',
    description: 'Magical northern lights dancing in the Arctic sky',
    category: 'nature',
    image: '/images/nature-aurora.jpg',
    tags: ['northern lights', 'sky', 'arctic'],
    featured: true,
  },

  // Architecture Collection
  {
    id: 'architecture-1',
    title: 'Modern Skyline',
    description: 'Contemporary city skyline with glass and steel towers',
    category: 'architecture',
    image: '/images/architecture-skyline.jpg',
    tags: ['buildings', 'urban', 'modern'],
    featured: true,
  },
  {
    id: 'architecture-2',
    title: 'Historic Cathedral',
    description: 'Grand cathedral with intricate architectural details',
    category: 'architecture',
    image: '/images/architecture-cathedral.jpg',
    tags: ['historical', 'religious', 'details'],
    featured: false,
  },
  {
    id: 'architecture-3',
    title: 'Industrial Design',
    description: 'Abstract industrial structures and geometric patterns',
    category: 'architecture',
    image: '/images/architecture-industrial.jpg',
    tags: ['industrial', 'abstract', 'structure'],
    featured: false,
  },
  {
    id: 'architecture-4',
    title: 'Urban Bridge',
    description: 'Modern architectural bridge spanning the river',
    category: 'architecture',
    image: '/images/architecture-bridge.jpg',
    tags: ['bridge', 'urban', 'infrastructure'],
    featured: true,
  },
  {
    id: 'architecture-5',
    title: 'Glass Facades',
    description: 'Reflective glass building with contemporary design',
    category: 'architecture',
    image: '/images/architecture-glass.jpg',
    tags: ['modern', 'glass', 'reflection'],
    featured: false,
  },
  {
    id: 'architecture-6',
    title: 'Classical Columns',
    description: 'Majestic classical architecture with marble columns',
    category: 'architecture',
    image: '/images/architecture-columns.jpg',
    tags: ['classical', 'marble', 'heritage'],
    featured: true,
  },

  // Travel Collection
  {
    id: 'travel-1',
    title: 'Tropical Paradise',
    description: 'Crystal clear waters and white sandy beaches',
    category: 'travel',
    image: '/images/travel-beach.jpg',
    tags: ['beach', 'tropical', 'vacation'],
    featured: true,
  },
  {
    id: 'travel-2',
    title: 'Ancient Ruins',
    description: 'Historic archaeological sites and ancient structures',
    category: 'travel',
    image: '/images/travel-ruins.jpg',
    tags: ['history', 'ruins', 'exploration'],
    featured: false,
  },
  {
    id: 'travel-3',
    title: 'Vibrant Streets',
    description: 'Colorful streets filled with local culture and life',
    category: 'travel',
    image: '/images/travel-streets.jpg',
    tags: ['urban', 'culture', 'street'],
    featured: false,
  },
  {
    id: 'travel-4',
    title: 'Mountain Village',
    description: 'Picturesque village nestled in the mountains',
    category: 'travel',
    image: '/images/travel-village.jpg',
    tags: ['village', 'mountains', 'architecture'],
    featured: true,
  },
  {
    id: 'travel-5',
    title: 'Temple Sanctuary',
    description: 'Sacred temple surrounded by peaceful nature',
    category: 'travel',
    image: '/images/travel-temple.jpg',
    tags: ['temple', 'spiritual', 'architecture'],
    featured: false,
  },
  {
    id: 'travel-6',
    title: 'Urban Night Life',
    description: 'City lights and vibrant nightlife atmosphere',
    category: 'travel',
    image: '/images/travel-night.jpg',
    tags: ['city', 'night', 'urban'],
    featured: true,
  },

  // Portrait Collection
  {
    id: 'portrait-1',
    title: 'Elegance',
    description: 'Professional portrait with natural lighting',
    category: 'portrait',
    image: '/images/portrait-elegance.jpg',
    tags: ['portrait', 'professional', 'fashion'],
    featured: true,
  },
  {
    id: 'portrait-2',
    title: 'Emotion',
    description: 'Candid portrait capturing genuine emotion',
    category: 'portrait',
    image: '/images/portrait-emotion.jpg',
    tags: ['portrait', 'emotion', 'candid'],
    featured: false,
  },
  {
    id: 'portrait-3',
    title: 'Style Statement',
    description: 'Fashion portrait showcasing modern style',
    category: 'portrait',
    image: '/images/portrait-style.jpg',
    tags: ['fashion', 'portrait', 'style'],
    featured: false,
  },
  {
    id: 'portrait-4',
    title: 'Character Study',
    description: 'Portrait revealing character and personality',
    category: 'portrait',
    image: '/images/portrait-character.jpg',
    tags: ['portrait', 'character', 'expression'],
    featured: true,
  },
  {
    id: 'portrait-5',
    title: 'Minimalist',
    description: 'Minimalist portrait with clean composition',
    category: 'portrait',
    image: '/images/portrait-minimalist.jpg',
    tags: ['portrait', 'minimalist', 'clean'],
    featured: false,
  },
  {
    id: 'portrait-6',
    title: 'Dramatic Lighting',
    description: 'Portrait with dramatic and moody lighting',
    category: 'portrait',
    image: '/images/portrait-dramatic.jpg',
    tags: ['portrait', 'dramatic', 'lighting'],
    featured: true,
  },
];

export const categories = [
  { id: 'all', name: 'All', color: 'forest-green' },
  { id: 'nature', name: 'Nature', color: 'green-600' },
  { id: 'architecture', name: 'Architecture', color: 'slate-600' },
  { id: 'travel', name: 'Travel', color: 'amber-600' },
  { id: 'portrait', name: 'Portrait', color: 'rose-600' },
];

export const collections: GalleryCollection[] = [
  {
    id: 'nature',
    name: 'Nature & Landscapes',
    description: 'Explore the breathtaking beauty of natural landscapes, from mountains and forests to oceans and deserts.',
    images: galleryImages.filter((img) => img.category === 'nature'),
    featured: true,
    coverImage: '/images/nature-mountains.jpg',
  },
  {
    id: 'architecture',
    name: 'Architecture & Design',
    description: 'Discover stunning architectural masterpieces and modern design innovations from around the world.',
    images: galleryImages.filter((img) => img.category === 'architecture'),
    featured: true,
    coverImage: '/images/architecture-skyline.jpg',
  },
  {
    id: 'travel',
    name: 'Travel & Culture',
    description: 'Journey through vibrant cultures and discover hidden gems from destinations across the globe.',
    images: galleryImages.filter((img) => img.category === 'travel'),
    featured: true,
    coverImage: '/images/travel-beach.jpg',
  },
  {
    id: 'portrait',
    name: 'Portraits & People',
    description: 'Intimate portraits and compelling stories of people from different walks of life.',
    images: galleryImages.filter((img) => img.category === 'portrait'),
    featured: true,
    coverImage: '/images/portrait-elegance.jpg',
  },
];

export const featuredImages = galleryImages.filter((img) => img.featured);
