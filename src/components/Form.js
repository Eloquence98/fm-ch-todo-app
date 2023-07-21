import React, { useState } from 'react'

function Form({ onAdd }) {
  const [input, setInput] = useState('')
  const [check, setCheck] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input) return
    const newItem = {
      title: input,
      completed: check,
    }
    onAdd(newItem)
    setInput('')
    setCheck(false)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='checkbox'>
        <input
          type='checkbox'
          checked={check}
          onChange={() => setCheck(!check)}
        />
        <span className='checkmark'></span>
      </label>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  )
}

export default Form
