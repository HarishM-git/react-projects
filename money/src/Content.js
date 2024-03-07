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
    <main>
     {items.map((item)=>{
      return(
        <ul>
          <li>
            <input type="checkbox" name="check" id={item.id} />
            <label>{item.label}</label>
            <button>delete</button>
          </li>

        </ul>
      )
     })}
    </main>
  )
}

export default Content