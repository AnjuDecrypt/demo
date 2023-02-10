import React,{useState} from 'react'
import validator from 'validator'


export default function Test() {
  const [number,setNumder]= useState("")
  const validatornumber=(number) =>{

  }
  
  return (
    <div>
    <div className='m-5yarn add react-select'>
        <input type="text" 
        onChange={(e) =>  validatornumber(e.target.value)}></input> <br />
    </div>
    </div>
  );
}
