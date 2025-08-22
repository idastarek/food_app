// Temporary in-memory storage for development
let ingredients: IngredientType[] = [];

export interface IngredientType {
  ingredient_name: string;
  ingredient_quantity: string;
  ingredient_unit: string;
  imageUrl?: string;
}

export const getAllIngredients = async () => {
    return ingredients;
};

export const createIngredient = async (ingredientData: IngredientType) => {
    const newIngredient = {
        ...ingredientData,
        id: Date.now() // temporary ID
    };
    ingredients.push(newIngredient);
    return newIngredient;
}