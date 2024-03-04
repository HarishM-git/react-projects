import React from 'react';
import {useState} from 'react';

const Content = () => {
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
  
      
 


    <ul>
      {items.map((item)=>{
        <li>
          <input type="checkbox" checked={item.checked} />
          <label htmlFor="">{item.label}</label>
          <button>delete</button>
        </li>
      })}
    </ul>

 
  )
}

export default Content