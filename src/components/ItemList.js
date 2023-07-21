import React, { useState } from 'react'
import Item from './Item'
import Stats from './Stats'
import Scrollbar from './Scrollbar'

function ItemList({
  items,
  onComplete,
  onDelete,
  onHover,
  onClearCompleted,
  onReorder,
  sortBy,
  onSort,
  width,
}) {
  const [dragStart, setDragStart] = useState(null)
  const [dragOver, setDragOver] = useState(null)

  function handleDragEnd() {
    const reOrdered = items.map((item) =>
      dragStart === item ? dragOver : dragOver === item ? dragStart : item
    )
    onReorder(reOrdered)
    setDragStart(null)
    setDragOver(null)
  }

  let sortedItems
  if (sortBy === 'all') sortedItems = items
  if (sortBy === 'active') sortedItems = items.filter((item) => !item.completed)
  if (sortBy === 'completed')
    sortedItems = items.filter((item) => item.completed)

  return (
    <>
      <ul className='list'>
        <Scrollbar>
          {sortedItems.map((item, index) => (
            <Item
              key={index}
              item={item}
              onComplete={onComplete}
              onDelete={onDelete}
              onDragStart={setDragStart}
              onDragOver={setDragOver}
              onDragEnd={handleDragEnd}
              width={width}
            />
          ))}
        </Scrollbar>

        <Stats
          sortedItems={sortedItems}
          onClearCompleted={onClearCompleted}
          onSort={onSort}
          width={width}
        />
      </ul>
    </>
  )
}

export default ItemList
