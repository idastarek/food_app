import '../styles/RecipeSuggestions.scss'
import recipes from '../../src/data/recipes.json'
import Title from '../components/Title.tsx'
import ItemsGrid from '../components/ItemsGrid.tsx'
import Recipe from '../components/Recipe.tsx'
import type { RecipeType } from '../components/Recipe.tsx'
import { useState, useEffect } from 'react'
import computeRecipeMatches from '../utils/matchingLogic.ts'
import axios from 'axios'

console.log('all recipes', recipes)
console.log('recipes length', recipes.length)

export default function RecipeSuggestions() {
  // API call function
  //   useEffect(() => {
  //     const makeAPICall = async () => {
  //       console.log('API call was made!')
  //       try {
  //         const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
  //         const response = await fetch(url)
  //         const data = await response.json()
  //         console.log('API call response: ', data)
  //       } catch (error) {
  //         console.error('API call failed: ', error)
  //       }
  //     }
  //     makeAPICall()
  //   }, [])

  // temporarily set the recipes array to the recipes from the json file
  const recipesArray: RecipeType[] = recipes

  const [sortedRescipes, setSortedRecipes] = useState<RecipeType[]>([])

  useEffect(() => {
    // const localStorageIngredients = localStorage.getItem('ingredients')
    const fetchIngredientsAndMatch = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/ingredients'
        )
        const recipesWithScores = computeRecipeMatches(
          response.data,
          recipesArray
        )
        setSortedRecipes(recipesWithScores)
      } catch (error) {
        console.error('Error fetching ingredients: ', error)
      }
    }
    fetchIngredientsAndMatch()
  }, [])

  return (
    <>
      <div id="container">
        <div id="top-screen">
          <Title title="How about..." />
        </div>
        <div className="recipes-container">
          <ItemsGrid
            itemsArray={sortedRescipes}
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
