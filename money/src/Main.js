import React from 'react'
import { useState } from 'react'

const Main = () => {
  function adida(){
    setCount(count+1)
  }
  function odada(){
    setCount(count-1)
  }

  const [count,setCount]=useState(0)


  return (
    <main>
      
      <div><p>main</p></div>
      <button onClick={adida}>+</button>
      <div>{count}</div>
      <button onClick={odada}>-</button>
    </main>
  )
}

export default Main