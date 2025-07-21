// ingredient interface
export interface IngredientType  {
  name: string;
  quantity: string;
  unit: string;
  imageUrl?: string;
}

// ingredient component
export default function Ingredient({ name, quantity, unit, imageUrl }: IngredientType) {
  return (
    <>
      <div className="ingredient-container">
        <h3 className="ingredient-name">{name}</h3>
        <img src={imageUrl} alt={`icon of ${name}`} className="ingredient-icon" />
        <img src="/images/x-button.png" alt="remove ingredient" className="remove-ingredient-btn" title="x button icon" />
        <p className="ingredient-quantity">{quantity} {unit}</p>
      </div>
    </>
  )
}