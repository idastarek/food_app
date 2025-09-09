import { query } from '../db';
interface IngredientType {
  ingredientName: string;
  ingredientQuantity: string;
  ingredientUnit: string;
  imageUrl?: string;
}

export const getAllIngredients = async () => {
    const res = await query('SELECT * FROM ingredients', []);
    return res.rows;
};

export const createIngredient = async (ingredientData: IngredientType) => {
    const {ingredientName: ingredientName, ingredientQuantity: ingredientQuantity, ingredientUnit: ingredientUnit} = ingredientData;
    const { rows } = await query(`
        INSERT INTO ingredients (ingredientName, ingredientQuantity, ingredientUnit) 
        VALUES ($1, $2, $3) RETURNING *`, [ingredientName, ingredientQuantity, ingredientUnit]);
    return rows[0];
}