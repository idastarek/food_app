import type { IngredientType } from "../components/Ingredient";
import type { RecipeType } from "../components/Recipe";

interface MatchedRecipe extends RecipeType {
    matchingScore: number;
}

type Unit = 'kg' | 'g' | 'l' | 'ml' | 'tbsp' | 'tsp';

interface UnitConversion {
    factor: number;
    unit: string;
}

interface NormalisedIngredient {
    quantity: number,
    unit: string;
}

export default function computeRecipeMatches(
    userIngredients: IngredientType[],
    recipesArray: RecipeType[]
): MatchedRecipe[] {

    // transform ingredients data type for matching logic
    function convertIngredientsArrayToMatcherFormat(
        ingredientsArray: IngredientType[]
    ): Map<string, { quantity: number; unit: string }>{
        const matcherMap = new Map();
        ingredientsArray.forEach((ingredient) => {
            matcherMap.set(ingredient.name, {
            quantity: ingredient.quantity,
            unit: ingredient.unit,
            });
        });
        return matcherMap;
    }

    const ingredients = convertIngredientsArrayToMatcherFormat(userIngredients);
    console.log("ingredients: ", ingredients);

    // transform recipes ingredients data type for matching logic
    let recipes: RecipeType[] = [];
    recipesArray.forEach((recipe) => {
        const ingredientsMap = convertIngredientsArrayToMatcherFormat(recipe.ingredients);
        recipes.push({
            ...recipe,
            sanitisedIngredients: ingredientsMap,
        });
    });

    console.log("recipes", recipes);


    // sanitise ingredients names
    function sanitiseIngName(name: string): string {
        return name
            .toLowerCase()
            .trim()
            .replace(/(es|s)$/, "");
    }


    const unitConversions: Record<Unit, UnitConversion> = {
        kg: { factor: 1000, unit: "g" },
        g: { factor: 1, unit: "g" },
        l: { factor: 1000, unit: "ml" },
        ml: { factor: 1, unit: "ml" },
        tbsp: { factor: 15, unit: "ml" },
        tsp: { factor: 5, unit: "ml" },
    };

    // convert units
    function convertUnits(quantity: number, unit: string): NormalisedIngredient {
        if (unit in unitConversions) {
            const conversion = unitConversions[unit as keyof typeof unitConversions];
            const factor = conversion.factor;
            const standardUnit = conversion.unit;

            return {
            quantity: quantity * factor,
            unit: standardUnit,
            };
        }

        // return original if no conversion found
        return {
            quantity: quantity,
            unit: unit,
        };
    }


    // 1. Create sanitised ingredients map
    const sanitisedUserIngMap = new Map();
    ingredients.forEach((ingredient, ingredientName) => {
        const sanitisedName = sanitiseIngName(ingredientName);
        const converted = convertUnits(ingredient.quantity, ingredient.unit);
        sanitisedUserIngMap.set(sanitisedName, {
            ...ingredient,
            quantity: converted.quantity,
            unit: converted.unit,
        });
    });

    // 2. Create sanitised ingredients map in the recipes
    recipes.forEach((recipe) => {
        const sanitisedRecipeIngMap = new Map();
        recipe.ingredients.forEach((ingredient) => {
                const sanitisedName = sanitiseIngName(ingredient.name);
                const converted = convertUnits(Number(ingredient.quantity), ingredient.unit);

                sanitisedRecipeIngMap.set(sanitisedName, {
                ...ingredient,
                quantity: converted.quantity,
                unit: converted.unit,
                });
            });
            recipe.sanitisedIngredients = sanitisedRecipeIngMap;
    });


    // 3. Pre create the matches object with recipe names as keys
    let matches: {
        [recipeName: string]: {
            [ingredientName: string]: number | string;            
        }
    } = Object.fromEntries(recipes.map((recipe) => [recipe.name, {}]));


    // 4. main matching logic
    recipes.map((recipe, index) => {
        console.log(`${index + 1} - ${recipe.name}`);

        let matchingScore = 0;

        // determine if user has ingredient needed for recipe
        if (!recipe.sanitisedIngredients) {
            console.warn(`No sanitised ingredients found for recipe ${recipe.name}`)
            matches[recipe.name]["_score"] = 0;
            return
        }

        recipe.sanitisedIngredients.forEach(
            (recipeIngredient, sanitisedRecipeIngName) => {
            if (sanitisedUserIngMap.has(sanitisedRecipeIngName)) {
                // user has the ingredient
                const userIngredient = sanitisedUserIngMap.get(sanitisedRecipeIngName);
                const amountUserHas = Number(userIngredient.quantity);
                const recipeIngredientQuantity = Number(recipeIngredient.quantity);

                const points = Math.min(amountUserHas / recipeIngredientQuantity, 1);
                matches[recipe.name][sanitisedRecipeIngName] = points;

                matchingScore += points;
            } else {
                // user doesn't have the ingredient
                const points = 0;
                matches[recipe.name][sanitisedRecipeIngName] = points;
            }
            }
        );

        matchingScore = Number((matchingScore / recipe.ingredients.length).toFixed(4));
        matches[recipe.name]["_score"] = matchingScore;
        console.log(matches);
    });

    return recipes
    .map((recipe) => ({
        ...recipe,
        matchingScore: Number(matches[recipe.name]["_score"]),
    }))
    .sort((a, b) => b.matchingScore - a.matchingScore);
}