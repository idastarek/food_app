import express from 'express'
import * as clientController from '../controllers/clientController'

const router = express.Router()

router.get('/ingredients', clientController.getIngredients)
router.post('/ingredients', clientController.createIngredient)
router.delete('/ingredients/:id', clientController.deleteIngredient)

export default router
