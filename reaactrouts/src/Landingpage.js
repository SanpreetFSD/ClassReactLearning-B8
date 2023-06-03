import axios from "axios";
import React, {useEffect, useState} from "react";


export default function LandingPage() {
    const [counter, setCouter] = useState(0)
    console.log(" I am rendering in landing page component");

    let a  = 10;

    useEffect(() => {
        console.log( "I am getting printed from useEffect Body..");

        // let body = document.querySelector(".header");
        // console.log(body);
        const apicalling= async()=>{
            try{
                let response= await axios.get("https://dummyjson.com/products");
                console.log(response.data);

            }catch (error) {
                console.log(error);
            }

        }
        apicalling()

    }, [])

    console.log(" I am rendering in landing page component");

    //  [] : dependency array 

    // case 1 : dependency is empty: useEffect runs only single time when the page  reders
    // case 2 : dependency arrya has some state or prop: whenever the state or prop changes, your useEffect triggers that many times.

    // return(
    //     <div className="header">LandingPage : {a}</div>
    // )
        //  

    return (
        <div className="header">
            {/* in the line calling of statefunction useing arrow function*/}
            <button onClick={()=>setCouter(counter+1)}>+</button>
               {counter}
        </div>

    )

}