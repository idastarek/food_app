import { PrismaClient } from "../../generated/prisma";
import type IngredientType from "../../../types.ts";
const prisma = new PrismaClient();

export const getAllIngredients = async () => {
  const ingredients = await prisma.ingredients.findMany();
  return ingredients;
};

export const createIngredient = async (ingredient: IngredientType) => {
  const newIngredient = await prisma.ingredients.create({
    data: {
      name: ingredient.name,
      quantity: ingredient.quantity,
      unit: ingredient.unit,
    },
  });
  return newIngredient;
};
