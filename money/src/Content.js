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
      id:2,
      checked:true,
      label:'eat HEALTHY'
    },
    {
      id:3,
      checked:false,
      label:'go to GYM'
    }
  ]);


 
  const handlecheck=(id)=>{
    const listItem=items.map((item)=>
      item.id===id ? {...item,checked:!item.checked}:item
      
    )
    setItems(listItem)
   }




  return (
    <main >
     {items.map((item)=>{
    
  
      return(
          <ul >
          <li className='item'   key={item.id}>
            
              <input 
              className='checkbox'
              type="checkbox" 
              name="check" 
              id={item.id} 
              onChange={()=>handlecheck(item.id)} />
              <label>{item.label}</label>
            <IoMdTrash role='button' tabIndex={0} />
            
            
          </li>

        </ul>
      
        
      )
     })}
    </main>
  )
}

export default Content