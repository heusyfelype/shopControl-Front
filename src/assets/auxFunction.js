export function reattributeIndexItems(items) {
  const newItems = items.map((item, index) => {
    item.positionIndex = index;
    return item
  })
  return newItems;
}