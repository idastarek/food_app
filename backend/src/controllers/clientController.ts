import * as clientServices from '../services/clientServices';
import { Request, Response } from 'express';
import { IngredientType } from '../services/clientServices';

export const getIngredients = async (req: Request, res: Response) => {
    try {
        const ingredients = await clientServices.getAllIngredients();
        res.status(200).json(ingredients);
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createIngredient = async (req: Request, res: Response) => {
    try {
        const ingredient: IngredientType = await clientServices.createIngredient(req.body);
        res.status(201).json(ingredient);
    } catch (error) {
        console.error('Error creating ingredient:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}