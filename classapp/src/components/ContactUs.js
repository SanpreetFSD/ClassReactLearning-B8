import React from "react"
// import Hello from "./hello"

export default function Contactus(props){
    console.log(props.salutation)

    return(<>
        Name: {props.name}<br></br>
        Phone: {props.phone}<br></br>
        email: {props.email}<br></br>
        </>)

}





//export default Contactus