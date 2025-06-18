import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/InputForm.scss';
import { Title, InputField } from '../components.tsx';

interface IngredientType  {
  name: string;
  quantity: number;
  unit: string;
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


    // todo
    // how to remove ingredients - if pressed or double clicked - do you want to delete?
    // instead of deleting - readjust the amount you have - pop up window, update databse



function GetRecipesButton() {
  const navigate = useNavigate();
  function handleRedirect() {
    navigate("/recipe-suggestions");
  }

  return (
    <>
        <div id="get-recipes-btn">
            {/* // todo: make navigation conditional on item presence */}
            <button onClick={handleRedirect}>Get recipes!</button>
        </div>
    </>
  );
}


export default function AddIngredients() {

  // initialise an array to store ingredient objects
  const [ingredientsArray, setIngredientsArray] = useState<IngredientType[]>([]);

  // default data for the input fields
  const defaultInputData: IngredientType = {
    name: "",
    quantity: 0,
    unit: ""
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value} = event.target;
    setInputData((prev) => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  // lift up the inpuData state to be able to move submit logic and adding to local storage here
  const [inputData, setInputData] = useState<IngredientType>(defaultInputData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // reset the input fields after data is submitted
    setInputData(defaultInputData);

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
  }

  return (
    <>
        <div id="container">
            <div id="top-screen">
                <Title title="I currently have..." />
                <div id="input-fields">
                  <form onSubmit={handleSubmit}>
                    <InputField 
                        type="text"
                        inputItem="ingredient"
                        name="name"
                        placeholder="Log your food here"
                        value={inputData.name}
                        onChange={handleChange}
                    />
                    <div id="form-quantity-fields">
                      <InputField 
                          type="number"
                          inputItem="quantity"
                          name="quantity"
                          placeholder="0"
                          value={inputData.quantity}
                          onChange={handleChange}
                      />
                      
                    </div>
                  </form>
                </div>           
            </div>


            <IngredientsGrid ingredientsArray={ingredientsArray} />
            <GetRecipesButton />
        </div>
    </>
  );
}
