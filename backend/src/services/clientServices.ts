import { query } from '../db';
interface IngredientType {
  ingredient_name: string;
  ingredient_quantity: string;
  ingredient_unit: string;
  imageUrl?: string;
}

export const getAllIngredients = async () => {
    const res = await query('SELECT * FROM ingredients', []);
    return res.rows;
};

export const createIngredient = async (ingredientData: IngredientType) => {
    const {ingredient_name, ingredient_quantity, ingredient_unit} = ingredientData;
    const { rows } = await query(`
        INSERT INTO ingredients (ingredient_name, ingredient_quantity, ingredient_unit) 
        VALUES ($1, $2, $3) RETURNING *`, [ingredient_name, ingredient_quantity, ingredient_unit]);
    return rows[0];
}