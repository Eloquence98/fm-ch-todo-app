import React, { useEffect, useState } from 'react'
import Todo from './components/Todo'

function App() {
  const [width, setWidth] = useState(true)

  const windowWidth = window.screen.width
  function handleWidthChange() {
    if (windowWidth > 560) setWidth(true)
    if (windowWidth <= 560) setWidth(false)
  }

  useEffect(() => {
    windowWidth <= 560 ? setWidth(false) : setWidth(true)
  }, [windowWidth])

  window.addEventListener('resize', handleWidthChange)

  return (
    <>
      <div className='bg'></div>
      <div className='app'>
        <Todo width={width} />
      </div>
    </>
  )
}

export default App
