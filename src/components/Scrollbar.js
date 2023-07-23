import React from 'react'
// import { useEffect, useRef, useState } from "react";

function Scrollbar({ children }) {
  // const [height, setHeight] = useState(null)
  // const ref = useRef(null)

  // // height set
  // useEffect(() => {
  //   setHeight(ref.current.clientHeight)
  // }, [])
  return (
    <div
      className={'scroll-bar'}
      // style={{ maxHeight: `${height - 17.5}px` }}
      style={{ maxHeight: `23.1rem` }}
      // ref={ref}
    >
      {children}
    </div>
  )
}

export default Scrollbar
