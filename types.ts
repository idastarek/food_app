export default interface IngredientType {
  id?: number
  name: string
  quantity: string
  unit: string
  imageUrl?: string
  onDelete?: () => void
}
