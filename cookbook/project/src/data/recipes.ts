import { Recipe } from '../types';

export const recipes: Record<string, Recipe> = {
  // Italian Recipes
  "pizza_margherita": {
    id: "pizza_margherita",
    name: "Pizza Margherita",
    cuisine: "italian",
    prepTime: "20 minutes",
    cookTime: "10 minutes",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "500g pizza dough",
      "400g San Marzano tomatoes, crushed",
      "250g fresh mozzarella, torn into pieces",
      "Fresh basil leaves",
      "2 tbsp extra virgin olive oil",
      "1 tsp salt",
      "1 clove garlic, minced (optional)"
    ],
    instructions: [
      "Preheat your oven to the highest temperature (usually 500°F/260°C) with a pizza stone or baking sheet inside.",
      "Stretch the pizza dough into a 12-inch circle on a floured surface.",
      "Mix crushed tomatoes with salt and garlic if using.",
      "Spread the tomato sauce evenly over the dough, leaving a 1-inch border.",
      "Distribute mozzarella pieces evenly over the sauce.",
      "Carefully transfer the pizza to the preheated stone or baking sheet.",
      "Bake for 8-10 minutes until the crust is golden and the cheese is bubbling.",
      "Remove from oven, drizzle with olive oil, and scatter fresh basil leaves on top.",
      "Let rest for 1-2 minutes before slicing and serving."
    ],
    description: "The classic Neapolitan pizza featuring the colors of the Italian flag: red (tomato), white (mozzarella), and green (basil). Its simplicity highlights the quality of each ingredient."
  },
  "pasta_carbonara": {
    id: "pasta_carbonara",
    name: "Pasta Carbonara",
    cuisine: "italian",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "400g spaghetti or bucatini",
      "150g guanciale or pancetta, diced",
      "4 large egg yolks",
      "2 large whole eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmigiano Reggiano, grated",
      "Freshly ground black pepper",
      "Salt for pasta water"
    ],
    instructions: [
      "Bring a large pot of generously salted water to a boil.",
      "In a large bowl, whisk together egg yolks, whole eggs, and grated cheeses. Season with black pepper.",
      "Cook pasta according to package instructions until al dente.",
      "While pasta cooks, sauté guanciale in a large skillet over medium heat until crispy, about 8 minutes.",
      "Reserve 1 cup of pasta cooking water, then drain pasta.",
      "Working quickly, add hot pasta to the skillet with guanciale and toss to coat in the fat.",
      "Remove skillet from heat and let cool for 1 minute.",
      "Add the egg and cheese mixture to the pasta, stirring vigorously to create a creamy sauce. Add splashes of reserved pasta water as needed.",
      "Serve immediately with additional grated cheese and black pepper."
    ],
    description: "A rich Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper. The heat of the pasta cooks the raw eggs to create a creamy sauce without using any cream."
  },
  
  // Thai Recipes
  "pad_thai": {
    id: "pad_thai",
    name: "Pad Thai",
    cuisine: "thai",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "250g rice noodles",
      "200g chicken breast, thinly sliced (or tofu for vegetarian)",
      "2 eggs, lightly beaten",
      "100g bean sprouts",
      "4 green onions, chopped",
      "3 tbsp roasted peanuts, crushed",
      "2 tbsp vegetable oil",
      "Lime wedges and cilantro for serving",
      "For the sauce:",
      "3 tbsp fish sauce",
      "3 tbsp brown sugar",
      "2 tbsp tamarind paste",
      "1 tbsp rice vinegar",
      "1 tsp chili flakes (adjust to taste)"
    ],
    instructions: [
      "Soak rice noodles in warm water for 15-20 minutes until softened but still firm. Drain well.",
      "Mix all sauce ingredients in a small bowl until sugar dissolves.",
      "Heat oil in a large wok or skillet over high heat.",
      "Add chicken and stir-fry until nearly cooked through, about 3 minutes.",
      "Push chicken to one side and add beaten eggs to the empty space. Scramble until just set.",
      "Add drained noodles and sauce. Toss everything together and cook for 2-3 minutes until noodles absorb the sauce.",
      "Add bean sprouts and half the green onions. Toss for another minute.",
      "Transfer to serving plates and top with remaining green onions, crushed peanuts, cilantro, and lime wedges."
    ],
    description: "Thailand's most famous street food dish features stir-fried rice noodles with the perfect balance of sweet, sour, salty, and spicy flavors, complemented by a variety of textures."
  },
  "green_curry": {
    id: "green_curry",
    name: "Thai Green Curry",
    cuisine: "thai",
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "400ml coconut milk",
      "3-4 tbsp green curry paste",
      "500g chicken thighs, sliced (or vegetables for vegetarian)",
      "1 tbsp fish sauce",
      "2 tsp palm sugar or brown sugar",
      "4-5 kaffir lime leaves, torn",
      "1 red bell pepper, sliced",
      "100g Thai eggplants or regular eggplant, cubed",
      "Handful of Thai basil leaves",
      "1-2 red chilies, sliced (optional)",
      "Jasmine rice for serving"
    ],
    instructions: [
      "In a large pot or wok, heat 2-3 tablespoons of coconut milk over medium-high heat until it begins to bubble and separate.",
      "Add green curry paste and stir-fry for 1-2 minutes until fragrant.",
      "Add chicken and stir to coat with the paste. Cook for 3-4 minutes.",
      "Pour in remaining coconut milk, fish sauce, and sugar. Bring to a simmer.",
      "Add kaffir lime leaves, bell pepper, and eggplant. Simmer for 10-15 minutes until chicken is cooked and vegetables are tender.",
      "Taste and adjust seasoning if needed.",
      "Stir in Thai basil leaves just before serving.",
      "Serve hot with jasmine rice, garnished with sliced red chilies if desired."
    ],
    description: "A fragrant, coconut-based curry featuring the complex flavors of green curry paste made from fresh herbs, spices, and green chilies. The balance of heat, sweetness, and aromatics creates a deeply satisfying dish."
  },
  
  // Japanese Recipes
  "sushi": {
    id: "sushi",
    name: "Sushi Rolls (Maki)",
    cuisine: "japanese",
    prepTime: "30 minutes",
    cookTime: "20 minutes (for rice)",
    servings: 4,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "2 cups Japanese short-grain rice",
      "3 tbsp rice vinegar",
      "2 tbsp sugar",
      "1 tsp salt",
      "5 sheets nori (seaweed)",
      "1 cucumber, julienned",
      "1 avocado, sliced",
      "200g sashimi-grade salmon or tuna (optional)",
      "Wasabi paste",
      "Pickled ginger",
      "Soy sauce for serving",
      "Bamboo sushi rolling mat"
    ],
    instructions: [
      "Rinse rice until water runs clear. Cook according to package instructions.",
      "Mix rice vinegar, sugar, and salt in a small bowl until dissolved.",
      "Transfer hot rice to a large wooden bowl and gently fold in vinegar mixture. Fan the rice while mixing to cool it quickly.",
      "Place a nori sheet on the bamboo mat, shiny side down.",
      "With wet hands, spread a thin layer of rice over the nori, leaving a 1-inch border at the top.",
      "Place a small amount of wasabi in the center of the rice and arrange fillings in a line across the center.",
      "Using the bamboo mat, roll the nori and rice over the fillings, applying gentle pressure.",
      "Continue rolling until you reach the border without rice. Wet the border slightly to seal the roll.",
      "With a sharp knife, cut each roll into 6-8 pieces.",
      "Serve with soy sauce, wasabi, and pickled ginger."
    ],
    description: "The iconic Japanese dish featuring vinegared rice combined with various fillings and wrapped in nori seaweed. The perfect sushi balances flavor, texture, and visual appeal in each carefully crafted bite."
  },
  "ramen": {
    id: "ramen",
    name: "Tonkotsu Ramen",
    cuisine: "japanese",
    prepTime: "30 minutes",
    cookTime: "12 hours (for broth)",
    servings: 4,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "For the broth:",
      "2kg pork bones (trotters and neck bones)",
      "2 onions, halved",
      "2 carrots, roughly chopped",
      "4 garlic cloves, smashed",
      "2-inch piece ginger, sliced",
      "2 tbsp sesame oil",
      "For the ramen:",
      "400g fresh ramen noodles",
      "4 soft-boiled eggs, marinated in soy sauce and mirin",
      "200g chashu pork (braised pork belly), sliced",
      "4 green onions, thinly sliced",
      "100g bean sprouts, blanched",
      "Nori sheets, cut into strips",
      "Mayu (black garlic oil)",
      "Toasted sesame seeds"
    ],
    instructions: [
      "For the broth (prepare a day ahead):",
      "Blanch pork bones in boiling water for 5 minutes, then drain and rinse thoroughly.",
      "In a large stockpot, add bones, vegetables, garlic, and ginger. Cover with cold water.",
      "Bring to a boil, then reduce heat to a very low simmer.",
      "Simmer uncovered for 10-12 hours, occasionally skimming off any scum that rises to the surface.",
      "Strain the broth through a fine-mesh sieve and discard solids.",
      "For serving:",
      "Bring broth to a simmer and season with salt and a splash of sesame oil.",
      "Cook ramen noodles according to package instructions until al dente.",
      "Drain noodles well and divide among serving bowls.",
      "Ladle hot broth over noodles.",
      "Arrange toppings: chashu pork, marinated egg (halved), bean sprouts, green onions, and nori.",
      "Drizzle with mayu and sprinkle with sesame seeds."
    ],
    description: "A rich, creamy pork bone soup that simmers for hours to develop its characteristic milky appearance and deep flavor. Served with chewy noodles and an array of toppings, it's the ultimate Japanese comfort food."
  },
  
  // Mexican Recipes
  "tacos": {
    id: "tacos",
    name: "Tacos Al Pastor",
    cuisine: "mexican",
    prepTime: "30 minutes (plus 4 hours marinating)",
    cookTime: "20 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1kg pork shoulder, thinly sliced",
      "1 pineapple, half diced for marinade, half sliced for serving",
      "12 small corn tortillas",
      "1 white onion, finely diced",
      "Fresh cilantro, chopped",
      "2 limes, cut into wedges",
      "For the marinade:",
      "3 dried guajillo chilies, stemmed and seeded",
      "2 dried ancho chilies, stemmed and seeded",
      "3 cloves garlic",
      "1/2 cup pineapple, diced",
      "1/4 cup white vinegar",
      "2 tbsp achiote paste",
      "1 tbsp dried oregano",
      "1 tsp ground cumin",
      "1 tsp salt"
    ],
    instructions: [
      "For the marinade:",
      "Soak dried chilies in hot water for 20 minutes until soft, then drain.",
      "Blend chilies with garlic, pineapple, vinegar, achiote paste, oregano, cumin, and salt until smooth.",
      "Place sliced pork in a large bowl and pour marinade over it. Mix well to coat all pieces.",
      "Cover and refrigerate for at least 4 hours, preferably overnight.",
      "For cooking:",
      "Heat a large skillet over medium-high heat.",
      "Cook marinated pork in batches, about 3-4 minutes per side until slightly charred and cooked through.",
      "In the same pan, cook pineapple slices until caramelized, about 2 minutes per side.",
      "Chop cooked pork and pineapple into small pieces.",
      "Warm tortillas on a dry skillet or directly over a flame until pliable.",
      "To serve, place pork and pineapple on tortillas, top with diced onion and cilantro.",
      "Serve with lime wedges on the side."
    ],
    description: "A beloved Mexican street food with Lebanese influences, featuring marinated pork cooked on a vertical spit, traditionally topped with pineapple. The complex marinade creates a perfect balance of savory, sweet, and tangy flavors."
  },
  "enchiladas": {
    id: "enchiladas",
    name: "Chicken Enchiladas Verdes",
    cuisine: "mexican",
    prepTime: "25 minutes",
    cookTime: "35 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "12 corn tortillas",
      "3 cups cooked chicken, shredded",
      "2 cups Monterey Jack cheese, shredded",
      "1 cup Mexican crema or sour cream",
      "1/2 cup queso fresco, crumbled",
      "1/4 cup fresh cilantro, chopped",
      "1 small red onion, thinly sliced",
      "For the salsa verde:",
      "1.5 lbs tomatillos, husked and rinsed",
      "2 jalapeños, stemmed (seeds removed for less heat)",
      "1 small white onion, quartered",
      "3 garlic cloves",
      "1/2 cup fresh cilantro",
      "1 tbsp lime juice",
      "1 tsp salt"
    ],
    instructions: [
      "For the salsa verde:",
      "Place tomatillos and jalapeños in a pot and cover with water. Bring to a boil, then simmer for 10 minutes until tomatillos turn olive green and soften.",
      "Drain and transfer to a blender with onion, garlic, cilantro, lime juice, and salt. Blend until smooth.",
      "For the enchiladas:",
      "Preheat oven to 375°F (190°C).",
      "In a skillet, heat 1/2 cup of salsa verde. Dip each tortilla in the warm sauce for a few seconds to soften.",
      "Fill each tortilla with shredded chicken and a sprinkle of cheese. Roll up and place seam-side down in a baking dish.",
      "Pour remaining salsa verde over the enchiladas and top with remaining cheese.",
      "Bake for 20-25 minutes until cheese is melted and sauce is bubbling.",
      "Serve topped with Mexican crema, queso fresco, red onion slices, and fresh cilantro."
    ],
    description: "A comforting Mexican dish featuring corn tortillas filled with shredded chicken, smothered in tangy tomatillo salsa, and topped with melted cheese. The bright, acidic salsa verde perfectly complements the rich, savory filling."
  },
  
  // Indian Recipes
  "butter_chicken": {
    id: "butter_chicken",
    name: "Butter Chicken (Murgh Makhani)",
    cuisine: "indian",
    prepTime: "20 minutes (plus 4 hours marinating)",
    cookTime: "40 minutes",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1.5 kg chicken thighs, boneless and skinless",
      "For the marinade:",
      "1 cup plain yogurt",
      "2 tbsp lemon juice",
      "2 tsp turmeric powder",
      "2 tbsp garam masala",
      "2 tbsp cumin powder",
      "2 tbsp red chili powder (adjust to taste)",
      "4 cloves garlic, minced",
      "2-inch piece ginger, grated",
      "For the sauce:",
      "4 tbsp butter",
      "2 tbsp vegetable oil",
      "2 onions, finely chopped",
      "4 cloves garlic, minced",
      "2-inch piece ginger, grated",
      "2 green chilies, slit lengthwise",
      "2 tsp ground coriander",
      "800g canned tomatoes, pureed",
      "1 cup heavy cream",
      "2 tbsp kasuri methi (dried fenugreek leaves)",
      "2 tbsp honey",
      "Salt to taste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "For the marinade:",
      "In a large bowl, mix all marinade ingredients until well combined.",
      "Add chicken pieces and coat thoroughly. Cover and refrigerate for at least 4 hours, preferably overnight.",
      "For cooking:",
      "Preheat oven to 400°F (200°C). Place marinated chicken on a baking sheet and bake for 15 minutes.",
      "Meanwhile, heat butter and oil in a large pot over medium heat.",
      "Add onions and sauté until golden brown, about 8-10 minutes.",
      "Add garlic, ginger, and green chilies. Cook for 2 minutes until fragrant.",
      "Add ground coriander and cook for another minute.",
      "Pour in tomato puree and bring to a simmer. Cook for 15 minutes until sauce thickens.",
      "Add baked chicken pieces with any juices from the baking sheet.",
      "Stir in cream, kasuri methi, and honey. Simmer for 10-15 minutes until chicken is fully cooked and sauce is thick.",
      "Season with salt to taste.",
      "Garnish with fresh cilantro and serve with naan bread or rice."
    ],
    description: "A beloved North Indian dish featuring tender chicken in a rich, creamy tomato sauce. The combination of aromatic spices, tangy tomatoes, and velvety cream creates an unforgettable flavor that's both comforting and complex."
  },
  "biryani": {
    id: "biryani",
    name: "Chicken Biryani",
    cuisine: "indian",
    prepTime: "30 minutes (plus 2 hours marinating)",
    cookTime: "1 hour",
    servings: 6,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "For the rice:",
      "3 cups basmati rice, soaked for 30 minutes",
      "6 cups water",
      "5 cloves",
      "3 cardamom pods",
      "1 cinnamon stick",
      "1 bay leaf",
      "1 tsp salt",
      "For the chicken:",
      "1 kg chicken pieces, bone-in",
      "1 cup plain yogurt",
      "2 tbsp ginger-garlic paste",
      "1 tsp turmeric powder",
      "1 tbsp red chili powder",
      "1 tbsp coriander powder",
      "1 tsp cumin powder",
      "1 tsp garam masala",
      "Juice of 1 lemon",
      "Salt to taste",
      "For layering:",
      "3 tbsp ghee or oil",
      "2 large onions, thinly sliced and fried until golden",
      "1/4 cup fresh mint leaves, chopped",
      "1/4 cup fresh cilantro, chopped",
      "2 green chilies, sliced",
      "1/4 cup milk mixed with a pinch of saffron",
      "1 tbsp rose water (optional)"
    ],
    instructions: [
      "Marinate chicken with yogurt, ginger-garlic paste, turmeric, red chili powder, coriander powder, cumin powder, garam masala, lemon juice, and salt. Refrigerate for at least 2 hours.",
      "For the rice, bring water to a boil with cloves, cardamom, cinnamon, bay leaf, and salt.",
      "Add soaked and drained rice. Cook until rice is 70% done (still has a bite). Drain and set aside.",
      "In a heavy-bottomed pot with a tight-fitting lid, heat ghee or oil.",
      "Add marinated chicken and cook for 5 minutes, stirring occasionally.",
      "Layer half the partially cooked rice over the chicken.",
      "Sprinkle half the fried onions, mint, cilantro, and green chilies.",
      "Add remaining rice as the final layer.",
      "Top with remaining fried onions, herbs, and chilies.",
      "Drizzle saffron milk and rose water over the top.",
      "Cover with lid, sealing the edges with dough or foil to trap steam.",
      "Cook on low heat for 25-30 minutes until chicken is tender and rice is fully cooked.",
      "Let rest for 10 minutes before opening.",
      "Gently mix the layers before serving."
    ],
    description: "A majestic rice dish from the Indian subcontinent, featuring fragrant basmati rice layered with marinated meat and aromatic spices. The dum cooking method (slow cooking in a sealed pot) allows the flavors to meld beautifully."
  }
};