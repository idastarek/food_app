import "../styles/RecipeSuggestions.scss";
import recipes from '../../src/data/recipes.json';

console.log("all recipes", recipes);
console.log("recipies length", recipes.length);



function Title() {
    return <h1>How about...</h1>
}

function Recipe() {
    return (
        <>
            <div className="recipe-container">
                <img className="recipe-icon" alt="A small icon of a plate of spaghetti" src="../images/spaghetti.png" />
                <div className="recipe-name">
                    <h2>Spaghetti bolognese</h2>
                    <div className="recipe-additional-info">
                        <p>Time: 30 min</p>
                        <p>You have 6/8 ingredients!</p>
                    </div>
                </div>
            </div>
        </>
    )
}


function RecipesGrid() {
    return (
        <>
            <div id="recipes-container">
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        </>
    )
}


export default function RecipeSuggestions() {

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
                    <Title />
                </div>
                <RecipesGrid />
            </div>
        </>
    )
}

