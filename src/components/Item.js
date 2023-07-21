import React, { useEffect, useState } from 'react'
import { ReactComponent as Cross } from '../svgs/icon-cross.svg'

function Item({
  item,
  onComplete,
  onDelete,
  onDragStart,
  onDragOver,
  onDragEnd,
  width,
}) {
  const [hover, setHover] = useState(false)
  function handleHover(value) {
    if (!width) return
    value === 'left' ? setHover(false) : setHover(true)
  }

  useEffect(() => {
    width ? setHover(false) : setHover(true)
  }, [width])
  return (
    <li
      onMouseEnter={() => handleHover(item)}
      onMouseLeave={() => handleHover('left')}
      draggable
      onDragStart={(e) => onDragStart(item)}
      onDragOver={(e) => onDragOver(item)}
      onDragEnd={onDragEnd}
    >
      <label className='checkbox'>
        <input
          type='checkbox'
          onChange={() => onComplete(item.title)}
          checked={item.completed}
        />
        <span className='checkmark'></span>
      </label>
      <span className={item.completed ? 'checked' : ''}>
        {width
          ? item.title
          : item.title.length > 20
          ? `${item.title.substring(0, 20)}...`
          : item.title}
      </span>
      {hover && (
        <button onClick={() => onDelete(item.title)}>
          <Cross />
        </button>
      )}
    </li>
  )
}

export default Item
