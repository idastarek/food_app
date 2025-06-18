import type { ChangeEvent } from 'react';

// title component
export function Title({ title }: {title: string}) {
  return <h1>{title}</h1>
}

export interface InputFieldType {
  type: string;
  inputItem: string;
  name: string;
  placeholder: string
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// single input component 
export function InputField({ type, inputItem, name, placeholder, value, onChange }: InputFieldType) {

  return (
    <>
      <label htmlFor={inputItem}></label>
      <input 
        type={type}
        id={inputItem} 
        className="input-field"
        name={name}
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
      />
    </>
  )
}

export function SelectDropdown() {

  const options = [
    { value: "", label: "Select unit" },
    { value: "g", label: "grams" },
    { value: "kg", label: "kilograms" },
    { value: "ml", label: "milliliters" },
    { value: "l", label: "liters" },
    { value: "pcs", label: "pieces" },
  ];

  return (
    <>
    {options.map(({ value, label}) => {
      <option value={value}>{label}</option>
    })}
    </>
  )
}