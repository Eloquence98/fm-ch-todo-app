import React, { useState } from 'react'
import Button from './Button'

function Footer({ onSort }) {
  const [isActive, setIsActive] = useState('all')

  function handleIsActive(e) {
    setIsActive(e.target.value)
    onSort(e.target.value)
  }

  return (
    <footer className='footer'>
      <Button value={'all'} condition={isActive} onClick={handleIsActive}>
        All
      </Button>
      <Button value={'active'} condition={isActive} onClick={handleIsActive}>
        Active
      </Button>
      <Button value={'completed'} condition={isActive} onClick={handleIsActive}>
        Completed
      </Button>
    </footer>
  )
}

export default Footer
