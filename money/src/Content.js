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


 




  return (
    <main >
     {items.map((item)=>{

const handleCheck=(id)=>{
  const listItem=items.map((item)=>
    item.id===id ? {...item,checked:!item.checked}:item
    
  )
  setItems(listItem)
  localStorage.setItem("changed",JSON.stringify(listItem))
 }

const deleteList=(id)=>{
  const listItem=items.filter((item)=>
    item.id!==id)
  setItems(listItem)
  localStorage.setItem("changed",JSON.stringify(listItem))
} 

    
  
      return(
        <ul key={item.id} >
          <li className='item'   >
            
            
              <input 
              className='checkbox'
              type="checkbox" 
              name="check" 
              
              id={item.id} 
              onChange={()=>handleCheck(item.id)} />
              <label
              
              onDoubleClick={()=>handleCheck(item.id)}>{item.label}</label>
            <IoMdTrash 
            role='button' 
            tabIndex={0} 
            onClick={()=>deleteList(item.id)}
            />
            
            
          </li>

        </ul>
      
        
      )
     })}
    </main>
  )
}

export default Content