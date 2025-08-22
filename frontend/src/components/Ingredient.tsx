export interface IngredientType {
  ingredient_name: string;
  ingredient_quantity: string;
  ingredient_unit: string;
  imageUrl?: string;
  onDelete?: () => void;
}

// ingredient component
export default function Ingredient({
  ingredient_name,
  ingredient_quantity,
  ingredient_unit,
  imageUrl,
  onDelete,
}: IngredientType) {
  return (
    <>
      <div className="ingredient-container" key={ingredient_name}>
        <h3 className="ingredient-name">{ingredient_name}</h3>
        <img
          src={imageUrl}
          alt={`icon of ${ingredient_name}`}
          className="ingredient-icon"
        />
        <button
          onClick={onDelete}
          className="remove-ingredient-btn"
          aria-label={`Remove ${ingredient_name}`}
        >
          <img
            src="/images/x-button.png"
            alt="remove ingredient"
            className="h-5 w-5"
          />
        </button>
        <p className="ingredient-quantity">
          {ingredient_quantity} {ingredient_unit}
        </p>
      </div>
    </>
  );
}
