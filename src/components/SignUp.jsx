import React, {useState} from 'react'
import  axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
import { useGlobalContext } from '../context'

function SignUp() {
    const {username, setUsername, email, setEmail, password, setPassword} = useGlobalContext()
   

let navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        axios.post("https://mealapp-api-2.onrender.com/register", 
           {username, email, password}).then((response)=>{           
               if(response.data.status){
                   toast.success("User successfully registered")
                   navigate("/login")
               } else{
                toast.error("User already exists")
               }
        }).catch(err =>{
            console.log("Error")
            toast.error("Error")

        })
    }
  return (
    <div style={{margin:"25px"}}>
       
    <Link to="/" style={{color:"gray",float:"right", textDecoration:"underline"}}>Browse</Link>
            <h2 style={{marginLeft:"10%"}}>Register</h2>

        
        <form onSubmit={handleSubmit}>
       
          
           <input type="text" 
          required
            onChange={(e)=>setUsername(e.target.value)}
            
            
            placeholder='Username'/>
            <input type="email" 
              required
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'/>
            <input type="password" 
            onChange={(e)=>setPassword(e.target.value)}
            required
            placeholder='Password'/>
            <button type="submit" className='btn2'>Sign up</button>
           
        </form>
        <p>Already have an account? <Link to ="/login">
                Login
            </Link></p>
    </div>
  )
}

export default SignUp