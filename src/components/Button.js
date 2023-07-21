import React from 'react'

function Button({ value, condition, onClick, children }) {
  return (
    <button
      className={`button ${condition === value ? 'active' : ''}`}
      value={value}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  )
}

export default Button
