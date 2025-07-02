import IngredientType from "./Ingredient";

// recipe interface
export interface RecipeType { 
  name: string;
  imageUrl?: string;
  ingredients: typeof IngredientType[];
  instructions: string[];
  time?: number;
  ingredientsOwned?: number;
  ingredientsRequired?: number;
}

// recipe component
export default function Recipe({ name, imageUrl, time, ingredientsOwned, ingredientsRequired }: RecipeType) {
  return (
      <>
          <div className="recipe-container">
              <img className="recipe-icon" alt="A small icon of a plate of spaghetti" src={imageUrl} />
              <div className="recipe-name">
                  <h2>{name}</h2>
                  <div className="recipe-additional-info">
                      <p>Time: {time} min</p>
                      <p>You have {ingredientsOwned}/{ingredientsRequired} ingredients!</p>
                  </div>
              </div>
          </div>
      </>
  )
}