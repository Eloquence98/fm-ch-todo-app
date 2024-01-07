import React, { useEffect, useState } from 'react'
import { ReactComponent as Moon } from '../svgs/icon-moon.svg'
import { ReactComponent as Sun } from '../svgs/icon-sun.svg'

function Header() {
  const [theme, setTheme] = useState(true)

  useEffect(() => {
    if (theme) document.body.className = 'dark'
    if (!theme) document.body.className = ''
  }, [theme])

  return (
    <header className='header'>
      <h1>TODO</h1>
      <button onClick={() => setTheme(!theme)}>
        {theme ? <Sun /> : <Moon />}
      </button>
    </header>
  )
}

export default Header
