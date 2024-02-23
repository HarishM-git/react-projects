import React from 'react'
import { useState } from 'react'

const Main = () => {


  
  const [name,setName]=useState('hello');

  
  function change(){
    setName((hello)=>{
      const vane=['developer','hacker','scientist','entrupuner'];
      let int= Math.floor(Math.random()*4) 
      return vane[int];
    })
  }


  return (
    <main>
      
      <div><p>main</p></div>
      <button onClick={change}>subscribe</button>
      <div> Harish is a {name}</div>
    </main>
  )
}

export default Main