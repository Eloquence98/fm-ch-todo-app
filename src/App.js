import React, { useEffect, useState } from 'react'
import Todo from './components/Todo'

function debounce(fn, ms) {
  let timer
  return (_) => {
    clearTimeout(timer)
    timer = setTimeout((_) => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

function App() {
  const [width, setWidth] = useState(window.innerWidth <= 560 ? false : true)

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(window.innerWidth <= 560 ? false : true)
    }, 100)

    window.addEventListener('resize', debouncedHandleResize)

    return (_) => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

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
