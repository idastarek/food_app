import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

const initialIngredients = [
  { name: "Bread", quantity: "0.3", unit: "kg" },
  { name: "Tomato", quantity: "0.5", unit: "kg" },
  { name: "Pasta", quantity: "1", unit: "kg" },
  { name: "Carrot", quantity: "200", unit: "g" },
  {
    name: "Olive Oil",
    quantity: "100",
    unit: "ml",
  },
  { name: "Cheese", quantity: "200", unit: "g" },
  { name: "Onion", quantity: "300", unit: "g" },
  {
    name: "Garlic",
    quantity: "50",
    unit: "g",
  },
  { name: "Milk", quantity: "500", unit: "ml" },
  { name: "Butter", quantity: "100", unit: "g" },
];

const initialRecipes = [
  {
    recipeName: "Spaghetti Bolognese",
    ingredients: [
      { name: "Pasta", quantity: "200", unit: "g" },
      { name: "Tomato", quantity: "400", unit: "g" },
      { name: "Onion", quantity: "1", unit: "pcs" },
      { name: "Garlic", quantity: "2", unit: "cloves" },
      { name: "Olive Oil", quantity: "2", unit: "tbsp" },
      { name: "Cheese", quantity: "50", unit: "g" },
    ],
    instruction: [
      "Boil the pasta according to package instructions",
      "Sauté onion and garlic in olive oil",
      "Add chopped tomatoes and simmer to make sauce",
      "Mix in cooked pasta",
      "Top with cheese before serving",
    ],
  },
  {
    recipeName: "Tortilla de Papas",
    ingredients: [
      { name: "Potato", quantity: "500", unit: "g" },
      { name: "Onion", quantity: "1", unit: "pcs" },
      { name: "Eggs", quantity: "4", unit: "pcs" },
      { name: "Olive Oil", quantity: "3", unit: "tbsp" },
      { name: "Salt", quantity: "1", unit: "tsp" },
    ],
    instruction: [
      "Peel and thinly slice potatoes and onion",
      "Sauté potatoes and onion in olive oil until soft",
      "Beat eggs and mix with cooked potatoes and onion",
      "Cook mixture in a frying pan until set on both sides",
    ],
  },
  {
    recipeName: "Matar Paneer",
    ingredients: [
      { name: "Paneer", quantity: "200", unit: "g" },
      { name: "Peas", quantity: "150", unit: "g" },
      { name: "Onion", quantity: "1", unit: "pcs" },
      { name: "Tomato", quantity: "2", unit: "pcs" },
      { name: "Garlic", quantity: "3", unit: "cloves" },
      { name: "Ginger", quantity: "1", unit: "inch" },
      { name: "Spices", quantity: "2", unit: "tsp" },
      { name: "Oil", quantity: "2", unit: "tbsp" },
    ],
    instruction: [
      "Cube the paneer and lightly fry in oil",
      "Sauté onion, garlic, and ginger until golden",
      "Add tomatoes and spices, cook to form sauce",
      "Add peas and paneer, simmer for 10 minutes",
      "Serve hot with rice or bread",
    ],
  },
  {
    recipeName: "Garlic Butter Bread",
    ingredients: [
      { name: "Bread", quantity: "4", unit: "slices" },
      { name: "Garlic", quantity: "2", unit: "cloves" },
      { name: "Butter", quantity: "50", unit: "g" },
      { name: "Cheese", quantity: "50", unit: "g" },
    ],
    instruction: [
      "Preheat oven to 180°C",
      "Mix softened butter with minced garlic",
      "Spread mixture on bread slices",
      "Top with cheese and bake for 10 minutes",
    ],
  },
  {
    recipeName: "Carrot Soup",
    ingredients: [
      { name: "Carrot", quantity: "400", unit: "g" },
      { name: "Onion", quantity: "1", unit: "pcs" },
      { name: "Garlic", quantity: "2", unit: "cloves" },
      { name: "Olive Oil", quantity: "1", unit: "tbsp" },
      { name: "Milk", quantity: "200", unit: "ml" },
    ],
    instruction: [
      "Chop carrots, onion, and garlic",
      "Sauté onion and garlic in olive oil",
      "Add carrots and water, cook until soft",
      "Blend the mixture and add milk",
      "Season with salt and pepper",
    ],
  },
  {
    recipeName: "Tomato Pasta",
    ingredients: [
      { name: "Pasta", quantity: "200", unit: "g" },
      { name: "Tomato", quantity: "300", unit: "g" },
      { name: "Olive Oil", quantity: "2", unit: "tbsp" },
      { name: "Garlic", quantity: "2", unit: "cloves" },
      { name: "Cheese", quantity: "50", unit: "g" },
    ],
    instruction: [
      "Cook pasta according to package instructions",
      "Sauté garlic in olive oil",
      "Add chopped tomatoes and simmer",
      "Mix in pasta and top with cheese",
    ],
  },
];

const seed = async () => {
  await prisma.ingredients.createMany({
    data: initialIngredients,
  });
  await prisma.recipes.createMany({
    data: initialRecipes,
  });
};

seed()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
