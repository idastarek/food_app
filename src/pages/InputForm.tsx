import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/InputForm.scss';

interface IngredientType  {
  name: string;
  quantity: number;
  unit: string;
}

function Title() {
  return <h1>I currently have...</h1>
}

function Ingredient({ name, quantity, unit }: IngredientType) {
  return (
    <>
      <div className="ingredient-container">
        <h3 className="ingredient-name">{name}</h3>
        <img src="../../public/images/potato.png" alt={`icon of ${name}`} className="ingredient-icon" />
        <p className="ingredient-quantity">{quantity} {unit}</p>
      </div>
    </>
  )
}

function IngredientsGrid({ ingredientsArray }: {ingredientsArray: IngredientType[] }) {
  {/* dynamically render ingredients from the state array */}

  return (
    <div className="ingredients-container-outer">
    <div className="ingredients-container-inner">
      {ingredientsArray.map(item => (
        <Ingredient 
          name={item.name} 
          quantity={item.quantity} 
          unit={item.unit} />
      ))}
    </div>
  </div>
  )
}


function InputFields({
  ingredientsArray,
  setIngredientsArray
}: {
  ingredientsArray: IngredientType[];
  setIngredientsArray: React.Dispatch<React.SetStateAction<IngredientType[]>>;
}) {

  const [inputData, setInputData] = useState<IngredientType>({
    name: "", 
    quantity: 0, 
    unit: "" 
  });

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
      quantity: 0,
      unit: ""
    })

    const ingredient: IngredientType = {
      name: inputData.name,
      quantity: Number(inputData.quantity),
      unit: inputData.unit
    } 
    console.log("ingredient", ingredient);

    // use the setter to create a new array
    const updatedArray = [...ingredientsArray, ingredient];
    setIngredientsArray(updatedArray);

    console.log("ingredients array", updatedArray);

    localStorage.setItem("ingredients", JSON.stringify(updatedArray));

    // todo
    // fix styling
    // how to remove ingredients - if pressed or double clicked - do you want to delete?
    // instead of deleting - readjust the amount you have - pop up window, update databse
    // how to compare ingredients against recipes    
  }

  return (
    <>
      <div id="input-fields">
        <form onSubmit={handleSubmit} >
          <label htmlFor="ingredient"></label>
          <input 
            type="text" 
            id="ingredient" 
            className="input-field"
            name="name" 
            placeholder="Log your food here"
            value={inputData.name} 
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
      </div>
    </>
    )
}


function GetRecipesButton() {

  const navigate = useNavigate();
  function handleRedirect() {
    navigate("/recipe-suggestions");
  }

  return (
    <>
        <div id="get-recipes-btn">
            {/* // todo: make navigation conditional on item presence */}
            <button onClick={handleRedirect} >Get recipes!</button>
        </div>
    </>
  );
}


export default function InputScreen() {

  // initialise an array to store ingredient objects
  const [ingredientsArray, setIngredientsArray] = useState<IngredientType[]>(
    []
  );

  return (
    <>
        <div id="container">
            <div id="top-screen">
                <Title />
                <InputFields 
                  ingredientsArray={ingredientsArray} 
                  setIngredientsArray={setIngredientsArray} 
                />                
            </div>
            <IngredientsGrid ingredientsArray={ingredientsArray} />
            <GetRecipesButton />
        </div>
    </>
  );
}
