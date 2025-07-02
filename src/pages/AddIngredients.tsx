import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/InputForm.scss';
import Title from '../components/Title.tsx';
import InputField from '../components/InputField.tsx';
import SelectDropdown from '../components/SelectDropdown.tsx';
import Button from '../components/Button.tsx';
import ItemsGrid from '../components/ItemsGrid.tsx';
import Ingredient from '../components/Ingredient.tsx';
import type { IngredientType}  from '../components/Ingredient.tsx';
import ingredients from '../../src/data/ingredients.json';


// todo
// how to remove ingredients - if pressed or double clicked - do you want to delete?
// instead of deleting - readjust the amount you have - pop up window, update database


function GetRecipesButton() {
  const navigate = useNavigate();
  function handleRedirect() {
    navigate("/recipe-suggestions");
  }

  return (
    <>
        <div id="get-recipes-btn">
            <Button 
              type="button"
              text="Get recipes!"
              onClick={handleRedirect}
            />
        </div>
    </>
  );
}


export default function AddIngredients() {  
  
  // set the default ingredients values to the ingredients from the json file
  const defaultIngredientsValues: IngredientType[] = ingredients;
  console.log("default ingredients values", defaultIngredientsValues);

  // initialise an array to store ingredient objects
  const [ingredientsArray, setIngredientsArray] = useState<IngredientType[]>(defaultIngredientsValues);

  // empty input fields - resetting
  const resetInputData: IngredientType = {
    name: "",
    quantity: "",
    unit: "",
    imageUrl: "../../public/images/potato.png"
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value} = event.target;
    setInputData((prev) => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  // lift up the inpuData state to be able to move submit logic and adding to local storage here
  const [inputData, setInputData] = useState<IngredientType>(resetInputData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // reset the input fields after data is submitted
    setInputData(resetInputData);

    const ingredient: IngredientType = {
      name: inputData.name,
      quantity: inputData.quantity,
      unit: inputData.unit,
      imageUrl: inputData.imageUrl
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
                        as="input"
                        type="text"
                        inputItem="ingredient"
                        name="name"
                        placeholder="Log your food here"
                        value={inputData.name}
                        onChange={handleChange}
                    />

                    <div id="form-quantity-fields">
                      <InputField 
                          as="input"
                          type="text"
                          inputItem="quantity"
                          name="quantity"
                          placeholder="0"
                          value={inputData.quantity}
                          onChange={handleChange}
                      />

                      <SelectDropdown 
                        options={[
                          { value: "", label: "Select unit" },
                          { value: "g", label: "grams" },
                          { value: "kg", label: "kilograms" },
                          { value: "ml", label: "milliliters" },
                          { value: "l", label: "liters" },
                          { value: "pcs", label: "pieces" },
                        ]}
                        inputItem="unit"
                        name="unit"
                        placeholder="Select unit"
                        value={inputData.unit}
                        onChange={handleChange}
                      />
                    </div>
                    <Button
                      type="submit"
                      text="Add ingredient"
                      className="input-field-button"
                    />
                  </form>
                </div>           
            </div>
            <div className="ingredients-container-outer">
              <div className="ingredients-container-inner">
                <ItemsGrid 
                  itemsArray={ingredientsArray} 
                  renderItem={(item, index) => (
                    <Ingredient
                      key={item.name + index}
                      name={item.name}
                      quantity={item.quantity}
                      unit={item.unit}
                      imageUrl={item.imageUrl}
                    />
                  )}
                />
              </div>
            </div>
            {(ingredientsArray.length > 0) && <GetRecipesButton />}
        </div>
    </>
  );
}
