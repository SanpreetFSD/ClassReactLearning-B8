import React, {useRef} from 'react'    // useRef is a hook for use reference
import { useState } from 'react';

export default function LearnUseRef() {
    const inputref = useRef(null);
    const [name, setName] = useState('')

    console.log('this component is rendering')

    function handleClick(){
        console.log(inputref.current.value, "from use ref")
        console.log(name, "onchange and state")
    }
    function handleChange(e){
        setName(e.target.value)
    }

  return (
    <div>
        <input type="text" placeholder='using use ref' ref={inputref}/>
        <input type="text" placeholder='using on change and state' onChange={handleChange}/>
        
        <button onClick={handleClick}>Show the text</button>
    </div>
  )
}
