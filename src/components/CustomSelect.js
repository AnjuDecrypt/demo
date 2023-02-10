import React from 'react'
import Select from 'react-select'
const option=[
    {label:"Html",value:"html"},
    {label:"Css",value:"css"},
    {label:"Java",value:"java"},
    {label:"React",value:"react"},
    {label:"JavaScript",value:"javascript"},
   
]
console.log();
export default function CustomSelect({style}) {
  return (
    <div className='m-5' style={style}>
      <Select  defaultValue={"drop down"} options={option} />
    </div>
  )
}