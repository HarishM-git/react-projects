import React from 'react';
import {useState} from 'react';
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { IoMdTrash } from "react-icons/io";


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
          <li key={item.id}>
            <input type="checkbox" name="check" id={item.id} />
            <label>{item.label}</label>
            <span><IoMdTrash role='button' tabIndex={0} /></span>
          </li>

        </ul>
      )
     })}
    </main>
  )
}

export default Content