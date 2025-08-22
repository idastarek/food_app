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

export const createIngredient = async (ingredient: IngredientType) => {
  const { ingredient_name, ingredient_quantity, ingredient_unit } = ingredient;

  const sql = `
        INSERT INTO public.ingredients (ingredient_name, ingredient_quantity, ingredient_unit)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;

  const values = [ingredient_name, ingredient_quantity, ingredient_unit];
  const result = await query(sql, values);
  return result.rows[0];
};
