import { useState } from 'react';


interface RecipeType {
    recipeName: string;
    ingredients: string;
    instruction: string;
}


function Title() {
    return <h1>Add new recipes</h1>
}


function AddRecipesForm({ 
    recipiesArray, 
    setRecipiesArray 
}: {
    recipiesArray: RecipeType[];
    setRecipiesArray: 
}) {

    const [inputData, setInputData] = useState<RecipeType>({
        recipeName: "",
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
            recipeName: "",
            ingredients: "",
            instruction: ""
        })

        const recipe: RecipeType = {
            recipeName: inputData.recipeName,
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
                        value={inputData.recipeName} 
                        onChange={handleChange} 
                    />

                    <label htmlFor="ingredients"></label>
                    <input 
                        type="text" 
                        id="ingredients" 
                        className="input-field"
                        name="ingredients" 
                        value={inputData.ingredients} 
                        onChange={handleChange} 
                    />

                    <label htmlFor="instruction"></label>
                    <input 
                        type="text" 
                        id="instruction" 
                        className="input-field"
                        name="instruction" 
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
        <Title />
        <AddRecipesForm 
            recipiesArray={recipiesArray} 
            setRecipiesArray={setRecipiesArray}
            />
        </>
    )
}