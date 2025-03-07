import { Cuisine, CuisineRelationship } from '../types';

// Define all cuisines with their details
export const cuisines: Record<string, Cuisine> = {
  italian: {
    name: 'Italian',
    region: 'Southern Europe',
    dishes: ['Pizza Margherita', 'Pasta Carbonara'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Fresh ingredients, simple preparation, and bold flavors define this Mediterranean cuisine.'
  },
  thai: {
    name: 'Thai',
    region: 'Southeast Asia',
    dishes: ['Pad Thai', 'Green Curry'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Balance of sweet, sour, salty and spicy flavors with aromatic herbs.'
  },
  japanese: {
    name: 'Japanese',
    region: 'East Asia',
    dishes: ['Sushi', 'Ramen'],
    image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Emphasis on seasonality, quality ingredients and meticulous presentation.'
  },
  mexican: {
    name: 'Mexican',
    region: 'North America',
    dishes: ['Tacos', 'Enchiladas'],
    image: 'https://images.unsplash.com/photo-1544601280-a468c8e73e83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Bold flavors with corn, beans, chiles, and diverse regional variations.'
  },
  indian: {
    name: 'Indian',
    region: 'South Asia',
    dishes: ['Butter Chicken', 'Biryani'],
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Complex spice blends, diverse regional styles, and vegetarian traditions.'
  },
  french: {
    name: 'French',
    region: 'Western Europe',
    dishes: ['Coq au Vin', 'Crème Brûlée'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Refined techniques, rich sauces, and emphasis on quality ingredients.'
  },
  spanish: {
    name: 'Spanish',
    region: 'Southern Europe',
    dishes: ['Paella', 'Tapas'],
    image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Olive oil, seafood, and regional specialties with Moorish influences.'
  },
  greek: {
    name: 'Greek',
    region: 'Southern Europe',
    dishes: ['Moussaka', 'Souvlaki'],
    image: 'https://images.unsplash.com/photo-1566454825481-9c31bd88c36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Mediterranean diet with olive oil, fresh vegetables, and grilled meats.'
  },
  chinese: {
    name: 'Chinese',
    region: 'East Asia',
    dishes: ['Dim Sum', 'Kung Pao Chicken'],
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Diverse regional styles with balance of flavors, textures, and cooking methods.'
  },
  vietnamese: {
    name: 'Vietnamese',
    region: 'Southeast Asia',
    dishes: ['Pho', 'Banh Mi'],
    image: 'https://images.unsplash.com/photo-1511910849309-0dffb8785146?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Fresh herbs, light preparations, and influence from French colonization.'
  },
  korean: {
    name: 'Korean',
    region: 'East Asia',
    dishes: ['Bibimbap', 'Kimchi'],
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Fermented foods, communal dining, and balance of spicy, sweet, and sour.'
  },
  lebanese: {
    name: 'Lebanese',
    region: 'Middle East',
    dishes: ['Hummus', 'Shawarma'],
    image: 'https://images.unsplash.com/photo-1544489518-2881a5b4c261?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Mezze culture with olive oil, herbs, and grilled meats.'
  },
  moroccan: {
    name: 'Moroccan',
    region: 'North Africa',
    dishes: ['Tagine', 'Couscous'],
    image: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Aromatic spices, slow-cooked stews, and sweet-savory combinations.'
  },
  turkish: {
    name: 'Turkish',
    region: 'Middle East/Europe',
    dishes: ['Kebabs', 'Baklava'],
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Bridge between Eastern and Western culinary traditions with rich history.'
  },
  brazilian: {
    name: 'Brazilian',
    region: 'South America',
    dishes: ['Feijoada', 'Churrasco'],
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Diverse influences from indigenous, African, and European traditions.'
  }
};

// Define relationships between cuisines
export const cuisineRelationships: CuisineRelationship = {
  italian: [
    cuisines.french,
    cuisines.spanish,
    cuisines.greek,
    cuisines.moroccan
  ],
  thai: [
    cuisines.vietnamese,
    cuisines.indian,
    cuisines.chinese,
    cuisines.japanese
  ],
  japanese: [
    cuisines.korean,
    cuisines.chinese,
    cuisines.vietnamese,
    cuisines.thai
  ],
  mexican: [
    cuisines.spanish,
    cuisines.brazilian,
    cuisines.moroccan,
    cuisines.lebanese
  ],
  indian: [
    cuisines.thai,
    cuisines.lebanese,
    cuisines.moroccan,
    cuisines.turkish
  ],
  french: [
    cuisines.italian,
    cuisines.spanish,
    cuisines.greek,
    cuisines.moroccan
  ],
  spanish: [
    cuisines.italian,
    cuisines.french,
    cuisines.moroccan,
    cuisines.greek
  ],
  greek: [
    cuisines.turkish,
    cuisines.lebanese,
    cuisines.italian,
    cuisines.moroccan
  ],
  chinese: [
    cuisines.japanese,
    cuisines.korean,
    cuisines.vietnamese,
    cuisines.thai
  ],
  vietnamese: [
    cuisines.thai,
    cuisines.chinese,
    cuisines.japanese,
    cuisines.korean
  ],
  korean: [
    cuisines.japanese,
    cuisines.chinese,
    cuisines.vietnamese,
    cuisines.thai
  ],
  lebanese: [
    cuisines.turkish,
    cuisines.greek,
    cuisines.moroccan,
    cuisines.indian
  ],
  moroccan: [
    cuisines.turkish,
    cuisines.lebanese,
    cuisines.spanish,
    cuisines.italian
  ],
  turkish: [
    cuisines.greek,
    cuisines.lebanese,
    cuisines.moroccan,
    cuisines.indian
  ],
  brazilian: [
    cuisines.mexican,
    cuisines.spanish,
    cuisines.moroccan,
    cuisines.italian
  ]
};