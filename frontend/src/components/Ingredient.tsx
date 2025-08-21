// ingredient interface
export interface IngredientType  {
  name: string;
  quantity: string;
  unit: string;
  imageUrl?: string;
  onDelete?: () => void;
}

// ingredient component
export default function Ingredient({ name, quantity, unit, imageUrl, onDelete }: IngredientType) {
  return (
    <>
      <div className="ingredient-container">
        <h3 className="ingredient-name">{name}</h3>
        <img src={imageUrl} alt={`icon of ${name}`} className="ingredient-icon" />
        <button
          onClick={onDelete}
          className="remove-ingredient-btn" 
          aria-label={`Remove ${name}`}
        >
          <img 
            src="/images/x-button.png" 
            alt="remove ingredient" 
            className="h-5 w-5"
          />
        </button>
        <p className="ingredient-quantity">{quantity} {unit}</p>
      </div>
    </>
  )
}