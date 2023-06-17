
import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'




export default function ViewProduct() {
    const {id} = useParams()
    console.log(id,"this is id of product")

    useEffect(()=>{
        try{
        const fetchdata= async()=>{
            let response = await axios.get(`https://dummyjson.com/products/categories ${id}`)
            console.log(response.data)
        }
        fetchdata()
    } catch (erro){
        console.log(error)
    }
    })

  return (

    <div>ViewProduct</div>
  )
}
