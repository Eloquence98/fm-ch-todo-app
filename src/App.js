import React, { useEffect, useState } from 'react'
import Todo from './components/Todo'

function App() {
  const [width, setWidth] = useState(true)

  const windowWidth = window.screen.width

  useEffect(() => {
    windowWidth <= 560 ? setWidth(false) : setWidth(true)
  }, [windowWidth])

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
