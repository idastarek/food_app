import express from 'express';
import * as clientController from '../controllers/clientController';

const router = express.Router();

router.get('/ingredients', clientController.getIngredients);
router.post('/ingredients', clientController.createIngredient);

export default router;