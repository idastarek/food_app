import type { ChangeEvent, ElementType } from 'react';

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
export default function InputField({ as: Component, type, inputItem, name, placeholder, value, onChange, children }: InputFieldProps) {

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