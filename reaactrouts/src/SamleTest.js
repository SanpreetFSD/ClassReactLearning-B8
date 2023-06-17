import React from "react";

export default function SamleTest({setCookie}){

    function handleChange(e){
        console.log(e.target.value)
        setCookie("name",e.target.value,{path:"/"})
    }

return (
    <div>
        <h3>This is my component</h3>
        <input type="text" placeholder="enter your name" onChange={handleChange}/>


    </div>
)

}