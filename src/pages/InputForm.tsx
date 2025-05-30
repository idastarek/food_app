import { useState } from "react";
import '../styles/InputForm.scss';

interface Ingredient  {
  name: string;
  quantity: number;
  unit: string;
}

function Title() {
    return <h1>I currently have...</h1>
}

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
        <label htmlFor="ingredient"></label>
        <input 
          type="text" 
          id="ingredient" 
          className="input-field"
          name="ingredient" 
          placeholder="Log your food here"
          value={inputData.ingredient} 
          onChange={handleChange} 
        />

        <div id="form-quantity-fields">
            <label htmlFor="quantity"></label>
            <input 
            type="number" 
            id="quantity" 
            className="input-field"
            name="quantity" 
            value={inputData.quantity} 
            onChange={handleChange} 
            />

            <label htmlFor="unit"></label>
            <select 
            id="unit" 
            className="input-field"
            name="unit" 
            value={inputData.unit} 
            onChange={handleChange} 
            >
            <option value="">Select unit</option>
            <option value="g">grams</option>
            <option value="kg">kilograms</option>
            <option value="ml">mililiters</option>
            <option value="liters">liters</option>
            <option value="pcs">pieces</option>
            </select>
        </div>

        <button type="submit" className="input-field-button">Add ingredient</button>
      </form>
    </>
    )
}


function Ingredient() {
  return (
    <>
      <div className="ingredient-container">
        <h3 className="ingredient-name">Potatos</h3>
        <img src="../../public/images/potato.png" alt="" className="ingredient-icon" />
        <p className="ingredient-quantity">0,5 kg</p>
      </div>
    </>
  )
}


function GetRecipesButton() {
  return (
    <>
        <div id="get-recipes-btn">
            <button >Get recipes!</button>
        </div>
    </>
  );
}


export default function InputScreen() {
  return (
    <>
        <div id="container">
            <div id="top-screen">
                <Title />
                <div id="input-fields">
                    <InputFields />
                </div>
            </div>
            <div className="ingredients-container-outer">
              <div className="ingredients-container-inner">
                <Ingredient />
                <Ingredient />
                <Ingredient />
                <Ingredient />
                <Ingredient />
              </div>
            </div>
            <GetRecipesButton />
        </div>
    </>
  );
}
