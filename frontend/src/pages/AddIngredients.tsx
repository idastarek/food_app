import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddIngredients.scss';
import Title from '../components/Title.tsx';
import InputField from '../components/InputField.tsx';
import SelectDropdown from '../components/SelectDropdown.tsx';
import Button from '../components/Button.tsx';
import ItemsGrid from '../components/ItemsGrid.tsx';
import Ingredient from '../components/Ingredient.tsx';
import type { IngredientType}  from '../components/Ingredient.tsx';
import ingredients from '../../src/data/ingredients.json';
import { hasEmptyFields } from '../utils/formValidation.ts'


function GetRecipesButton() {
  const navigate = useNavigate();
  function handleRedirect() {
    navigate('/recipe-suggestions');
  }

  return (
        <div id="get-recipes-btn">
            <Button 
              type="button"
              text="Get recipes!"
              onClick={handleRedirect}
            />
        </div>
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
    ingredient_name: "",
    ingredient_quantity: "",
    ingredient_unit: "",
    imageUrl: "../../public/images/potato.png"
  }

  // adding ingredients from JSON on page load
  useEffect(() => {

    try {
      // check localStorage inside useEffect to get an up-to-date value
      const existingIngredients = localStorage.getItem("ingredients");

      if (!existingIngredients) {
        if (ingredients.length) {
          localStorage.setItem("ingredients", JSON.stringify(ingredients));
          setIngredientsArray(ingredients);
        }
      } else {
        const parsedIngredients = JSON.parse(existingIngredients);
        setIngredientsArray(parsedIngredients);
      } 
    } catch (error) {
        console.error("Error with localStorage:", error);
        setIngredientsArray(ingredients);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value} = event.target;
    setInputData((prev) => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  const [inputData, setInputData] = useState<IngredientType>(resetInputData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ingredient: IngredientType = {
      ingredient_name: inputData.ingredient_name,
      ingredient_quantity: inputData.ingredient_quantity,
      ingredient_unit: inputData.ingredient_unit,
      imageUrl: inputData.imageUrl,
    };

    console.log("ingredient", ingredient);


    // TODO add an error state and message for each input

    // validate if none of the fields was left empty
    if (hasEmptyFields(ingredient, ['ingredient_name', 'ingredient_quantity', 'ingredient_unit'])) {
      alert("At least one of the fields is empty!");
      return;
    }

    // update state by creating a new ingredients array including the new ingredient
    const updatedArray = [...ingredientsArray, ingredient];
    setIngredientsArray(updatedArray);

    console.log("updated ingredients array", updatedArray);

    localStorage.setItem("ingredients", JSON.stringify(updatedArray));

    console.log("ingredient", ingredient);

    // send the new ingredient to the backend
    fetch('http://localhost:3000/api/ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(ingredient),
    })

      .then((respose) => {
        console.log(respose.json());
        console.log("new ingredient", ingredient);
        return respose.json();
      })
      

      .catch((error) => {
        console.log(error);
      });

    // reset the input fields after data is submitted
    setInputData(resetInputData);
  }

  // TODO: 
  // (1) if user adds ingredient already present, combine the amounts rather than having
  // two separate ingredients
  // (2) "are you sure you want to delete?" notification
  // (3) long pressing / double clicking ingredient allows the user to readjust the quantity / delete


  const handleDeleteIngredient = (ingToDelete: string) => {
    const updatedArray = ingredientsArray.filter(ingredient => ingredient.ingredient_name !== ingToDelete);
    setIngredientsArray(updatedArray);
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
                        name="ingredient_name"
                        placeholder="Log your food here"
                        value={inputData.ingredient_name}
                        onChange={handleChange}
                    />

                    <div id="form-quantity-fields">
                      <InputField 
                          as="input"
                          type="text"
                          inputItem="quantity"
                          name="ingredient_quantity"
                          placeholder="0"
                          value={inputData.ingredient_quantity}
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
                        name="ingredient_unit"
                        placeholder="Select unit"
                        value={inputData.ingredient_unit}
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
                      key={item.ingredient_name + index}
                      ingredient_name={item.ingredient_name}
                      ingredient_quantity={item.ingredient_quantity}
                      ingredient_unit={item.ingredient_unit}
                      imageUrl={item.imageUrl}
                      onDelete={() => handleDeleteIngredient(item.ingredient_name)}
                    />
                  )}
                />
              </div>
            </div>
            {(ingredientsArray.length > 0) && <GetRecipesButton/>}
        </div>
    </>
  );
}
