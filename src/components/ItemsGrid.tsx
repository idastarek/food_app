// items grid component interface
export interface ItemsGridProps<T> {
  itemsArray: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

// items grid component
export function ItemsGrid<T>({ itemsArray, renderItem }: ItemsGridProps<T>) {
  {/* dynamically render ingredients / recipes from the state array */}
  return (
    <>
      {itemsArray.map((item, index) => renderItem(item, index))}
    </>
  )
}