import InputField from "./InputField";
import type { ChangeEvent } from 'react';

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
export default function SelectDropdown({ options, inputItem, name, placeholder,value, onChange }: SelectDropdownProps) {

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