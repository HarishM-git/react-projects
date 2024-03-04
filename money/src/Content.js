import React from 'react'
import { useState } from 'react'




const Content=()=>{
  const [items,setItems]=useState([
    {
      id:1,
      checked:true,
      label:'practice coding'
    },
    {
      id:1,
      checked:true,
      label:'eat HEALTHY'
    },
    {
      id:1,
      checked:false,
      label:'go to GYM'
    }
  ]);


    





  return (
    <main>
      
      {/*<div><p>main</p></div>
      <button onClick={change}>subscribe</button>
  <div> Harish is a {name}</div>*/}


    <ul>
      {items.map((item)=>{
        <li>
          <input type="checkbox" checked={item.checked} />
          <label htmlFor="">{item.label}</label>
          <button>delete</button>
        </li>
      })}
    </ul>

    </main>
  )
}

export default Content