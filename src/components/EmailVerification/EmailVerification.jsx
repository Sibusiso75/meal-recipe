import React,{useState, useEffect} from 'react'
import axios from "axios"
import {FaCheck} from "react-icons/fa"
import { useParams } from 'react-router-dom'
function EmailVerification() {
    const [validUrl, setValidUrl]=useState(false)
    let param = useParams()

    async function verifyLink(){
    try {
        const url = `https://mealapp-api-2.onrender.com/${params.id}verify/${param.token}`
        const {data} = await axios.get(url)
        console.log(data)
        setValidUrl(true)        
    } catch (error) {
        console.log("Error")
        setValidUrl(false)        


    }
    }
    useEffect(()=>{
        verifyLink()
    },[param])
  return (
    <div>
        {

        validUrl?<h2>EMAIL VERIFIFIED <FaCheck/></h2>
        : <h2>404 - Page not found</h2>
        }
    </div>
  )
}

export default EmailVerification