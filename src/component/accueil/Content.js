import React from "react";
import Form from "../Form";
import { useState } from "react";

export default function Content() {
    const [isChecked, setIsChecked] = useState(false)

    const checking = ()=>{
        setIsChecked(!isChecked);
        console.log(isChecked);
    }
  return (
    <>
      <input type="checkbox" onClick={checking}/>
      <p style={{ color: true ? 'blue' : 'red'}} >Lorem ipsum dolor sit amet.</p>
    </>
  )
}