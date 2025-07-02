import "../styles/RecipeSuggestions.scss";
import recipes from '../../src/data/recipes.json';
import Title from '../components/Title.tsx';
import ItemsGrid from '../components/ItemsGrid.tsx';
import Recipe from '../components/Recipe.tsx';
import type { RecipeType } from '../components/Recipe.tsx';


console.log("all recipes", recipes);
console.log("recipes length", recipes.length);


export default function RecipeSuggestions() {

    // temporarily set the recipes array to the recipes from the json file
    const recipesArray: RecipeType[] = recipes;

    const localStorageData = localStorage.getItem("ingredients");

    if (localStorageData) {
        const ingredients = JSON.parse(localStorageData);

        console.log("ingredients from local storage ", ingredients);

        // basic matching logic 
        // iterate over every ingredient against every recipe - if there's a match,
        // create a new object with a key of the recipe and value of the ingredient
        // keep iterating, if there is a match with a recipe that already exists, 
        // just add the ingredient as a value
        // if the key (recipe) hasn't had a match before, create a new key

        // iterate over every ingredient
        // ingredients.map(ingredient => {
        //     if (ingredient.name) 
        // })

        // todo: make the matching logic more elaborated, check the amounts of ingredients
        // if no ingredient, check for substitutes 
    } 


    return (
        <>
            <div id="container">
                <div id="top-screen">
                    <Title title="How about..." />
                </div>
                <div className="recipes-container">
                    <ItemsGrid 
                        itemsArray={recipesArray} 
                        renderItem={(item, index) => (
                            <Recipe
                                key={item.name + index}
                                name={item.name}
                                imageUrl={item.imageUrl}
                                ingredients={item.ingredients}
                                instructions={item.instructions}
                                time={item.time}
                                ingredientsOwned={item.ingredientsOwned}
                                ingredientsRequired={item.ingredientsRequired}
                            />
                        )}
                    />
                </div>
            </div>
        </>
    )
}

