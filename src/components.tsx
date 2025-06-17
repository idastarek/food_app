// title component
export function Title({ title }: {title: string}) {
  return <h1>{title}</h1>
}

// single input component 

export function InputField({ inputItem, placeholder, value, onChange }) {

  return (
    <>
      <label htmlFor={inputItem}></label>
          <input 
            type="text" 
            id={inputItem} 
            className="input-field"
            name="name" 
            placeholder={placeholder}
            value={value} 
            onChange={onChange} 
        />
    </>
  )
}