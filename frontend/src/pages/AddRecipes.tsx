import { useState } from 'react';
import "../styles/AddRecipies.scss";
import Title from '../components/Title.tsx';


interface RecipeType {
    name: string;
    ingredients: string;
    instruction: string;
}


function AddRecipesForm({ 
    recipiesArray, 
    setRecipiesArray 
}: {
    recipiesArray: RecipeType[];
    setRecipiesArray: React.Dispatch<React.SetStateAction<RecipeType[]>>;
}) {

    const [inputData, setInputData] = useState<RecipeType>({
        name: "",
        ingredients: "",
        instruction: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value} = event.target;
        setInputData((prev) => ({ 
            ...prev, 
            [name]: value 
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // reset the input fields after data is submitted
        setInputData({
            name: "",
            ingredients: "",
            instruction: ""
        })

        const recipe: RecipeType = {
            name: inputData.name,
            ingredients: inputData.ingredients,
            instruction: inputData.instruction
        } 

        console.log("recipe", recipe);

        // use the setter to create a new array
        const updatedArray = [...recipiesArray, recipe];
        setRecipiesArray(updatedArray);

        console.log("recipies array", updatedArray);

        localStorage.setItem("recipies", JSON.stringify(updatedArray));

    }

    return (
        <>
            <div id="input-fields">
                <form onSubmit={handleSubmit} >
                    <label htmlFor="recipe-name"></label>
                    <input 
                        type="text" 
                        id="recipe-name" 
                        className="input-field"
                        name="name" 
                        placeholder="Recipe name"
                        value={inputData.name} 
                        onChange={handleChange} 
                    />

                    <label htmlFor="ingredients"></label>
                    <input 
                        type="text" 
                        id="ingredients" 
                        className="input-field"
                        name="ingredients" 
                        placeholder="Ingredinets"
                        value={inputData.ingredients} 
                        onChange={handleChange} 
                    />

                    <label htmlFor="instruction"></label>
                    <input 
                        type="text" 
                        id="instruction" 
                        className="input-field"
                        name="instruction" 
                        placeholder="Instructions"
                        value={inputData.instruction} 
                        onChange={handleChange} 
                    />

                    
                    <button type="submit" className="input-field-button">Add recipe</button>
                
                </form>
            </div>
        </>
    )
}

export default function() {

    const [recipiesArray, setRecipiesArray] = useState<RecipeType[]>(
        []
    );
 
    return (
        <>
        <div id="container">
            <div id="top-screen">
                <Title title="Add new recipes"/>
                <AddRecipesForm 
                    recipiesArray={recipiesArray} 
                    setRecipiesArray={setRecipiesArray}
                />  
            </div>
        </div>
        </>
    )
}