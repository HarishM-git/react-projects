import React from 'react';
import {useState} from 'react';
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
    <main >
     {items.map((item)=>{
      return(
          <ul >
          <li   key={item.id}>
            <div className='flex'>
              <div><input className='checkbox'type="checkbox" name="check" id={item.id} /></div>
              <div><label>{item.label}</label></div>
            <div><IoMdTrash role='button' tabIndex={0} /></div>
            
            </div>
          </li>

        </ul>
      
        
      )
     })}
    </main>
  )
}

export default Content