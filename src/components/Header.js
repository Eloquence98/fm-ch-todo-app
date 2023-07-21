import React, { useEffect, useState } from 'react'
import { ReactComponent as Moon } from '../svgs/icon-moon.svg'
import { ReactComponent as Sun } from '../svgs/icon-sun.svg'

function Header() {
  const [them, setThem] = useState(false)

  useEffect(() => {
    if (them) document.body.className = 'dark'
    if (!them) document.body.className = ''
  }, [them])

  return (
    <header className='header'>
      <h1>TODO</h1>
      <button onClick={() => setThem(!them)}>
        {them ? <Sun /> : <Moon />}
      </button>
    </header>
  )
}

export default Header
