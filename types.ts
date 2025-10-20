export default interface IngredientType {
  name: string;
  quantity: string;
  unit: string;
  imageUrl?: string;
  onDelete?: () => void;
}