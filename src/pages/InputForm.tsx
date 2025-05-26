import { useState } from "react";


function InputFields() {
  const [inputData, setInputData] = useState({
    ingredient: "", 
    quantity: 0, 
    unit: "" 
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value} = event.target;
    setInputData((prevInputData => ({ ...prevInputData, [name]: value })));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Ingredient: ${inputData.ingredient}, Quantity: ${inputData.quantity}, Unit: ${inputData.unit} `
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label htmlFor="ingredient">Ingredient: </label>
        <input 
          type="text" 
          id="ingredient" 
          name="ingredient" 
          value={inputData.ingredient} 
          onChange={handleChange} 
        />
        <br />

        <label htmlFor="quantity">Quantity: </label>
        <input 
          type="number" 
          id="quantity" 
          name="quantity" 
          value={inputData.quantity} 
          onChange={handleChange} 
        />
        <br />

        <label htmlFor="unit">Unit: </label>
        <select 
          id="unit" 
          name="unit" 
          value={inputData.unit} 
          onChange={handleChange} 
        >
          <option value="">Select unit</option>
          <option value="g">grams (g)</option>
          <option value="kg">kilograms (kg)</option>
          <option value="ml">mililiters (ml)</option>
          <option value="liters">liters (l)</option>
          <option value="pcs">pieces (pcs)</option>
        </select>
        <br />

        <button type="submit">Add ingredient</button>
      </form>
    </>
    )
}


function Ingredient() {
  return (
    <>
      <div className="ingredient">
        <h3 className="ingredient-name">Potatos</h3>
        <p className="ingredient-quantity">0,5kg</p>
      </div>
    </>
  )
}


function GetRecipesButton() {
  return (
    <>
      <div id="get-recipes-btn">
        <button>Get recipes</button>
      </div>
    </>
  );
}


export default function InputScreen() {
  return (
    <>
      <InputFields />
      <Ingredient />
      <GetRecipesButton />
    </>
  );
}
