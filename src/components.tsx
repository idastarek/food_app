import type { ChangeEvent, ElementType } from 'react';

// title component
export function Title({ title }: {title: string}) {
  return <h1>{title}</h1>
}

// input field component interface
export interface InputFieldProps {
  as: ElementType;
  type?: string;
  inputItem: string;
  name: string;
  placeholder?: string
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  children?: React.ReactNode;
}

// single input component 
export function InputField({ as: Component, type, inputItem, name, placeholder, value, onChange, children }: InputFieldProps) {

  return (
    <>
      <label htmlFor={inputItem}></label>
      <Component 
        type={type}
        id={inputItem} 
        className="input-field"
        name={name}
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
      >
        {children}
      </Component>
    </>
  )
}

// select dropdown component interface
export interface SelectDropdownProps {
  options: { value: string; label: string }[];
  inputItem: string;
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

// select dropdown component
export function SelectDropdown({ options, inputItem, name, placeholder,value, onChange }: SelectDropdownProps) {

  return (
    <>
    <InputField as="select" inputItem={inputItem} name={name} placeholder={placeholder} value={value} onChange={onChange} >
    {options.map(({ value, label}) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
    </InputField>
    </>
  );
} 

// button component interface
export interface ButtonType {
  type: "button" | "submit" | "reset";
  text: string;
  className?: string;
  onClick?: () => void;
}

// button component
export function Button({ type, text, className, onClick }: ButtonType) {
  return (
    <button type={type} className={className} onClick={onClick}>{text}</button>
  );
}

// ingredient interface
export interface IngredientType  {
  name: string;
  quantity: number;
  unit: string;
  imageUrl?: string;
}

// ingredient component
export function Ingredient({ name, quantity, unit, imageUrl }: IngredientType) {
  return (
    <>
      <div className="ingredient-container">
        <h3 className="ingredient-name">{name}</h3>
        <img src={imageUrl} alt={`icon of ${name}`} className="ingredient-icon" />
        <p className="ingredient-quantity">{quantity} {unit}</p>
      </div>
    </>
  )
}

// recipe interface
export interface RecipeType { 
  name: string;
  imageUrl?: string;
  ingredients: IngredientType[];
  instructions: string[];
  time?: number;
  ingredientsOwned?: number;
  ingredientsRequired?: number;
}

// recipe component
export function Recipe({ name, imageUrl, time, ingredientsOwned, ingredientsRequired }: RecipeType) {
  return (
      <>
          <div className="recipe-container">
              <img className="recipe-icon" alt="A small icon of a plate of spaghetti" src={imageUrl} />
              <div className="recipe-name">
                  <h2>{name}</h2>
                  <div className="recipe-additional-info">
                      <p>Time: {time} min</p>
                      <p>You have {ingredientsOwned}/{ingredientsRequired} ingredients!</p>
                  </div>
              </div>
          </div>
      </>
  )
}

// items grid component interface
export interface ItemsGridProps<T> {
  itemsArray: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

// items grid component
export function ItemsGrid<T>({ itemsArray, renderItem }: ItemsGridProps<T>) {
  {/* dynamically render ingredients / recipes from the state array */}
  return (
    <>
      {itemsArray.map((item, index) => renderItem(item, index))}
    </>
  )
}
