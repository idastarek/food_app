import { query } from "../db";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();


interface IngredientType {
  name: string;
  quantity: string;
  unit: string;
  imageUrl?: string;
}

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
