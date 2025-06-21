import type { ChangeEvent, ElementType } from 'react';

// title component
export function Title({ title }: {title: string}) {
  return <h1>{title}</h1>
}

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

export interface SelectDropdownProps {
  options: { value: string; label: string }[];
  inputItem: string;
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

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