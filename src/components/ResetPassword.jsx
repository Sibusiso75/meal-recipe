import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import {toast} from "react-toastify"

function ResetPassword() {
   
    const {password, setPassword} = useGlobalContext()
    let navigate = useNavigate()
    let {token} = useParams()

  
    function handleSubmit(e){
        e.preventDefault()
       axios.post(`https://mealapp-api-2.onrender.com/reset-password/${token}`, 
           {password}).then(response =>{
            if(response.data.status){
                toast.success("Password has been successfully updated")
                navigate("/login")
            }
        }).catch(err =>{
            console.log("Error")
        })
      


    }
  return (
    <div style={{margin:"30px"}}>
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
       
             <label htmlFor="password">Password</label>
            <input type="password" 
            onChange={(e)=>setPassword(e.target.value)}

            placeholder='Password'/>

            <button type="submit" className="btn1">Reset</button>
            <p>Already have an account?<Link to ="/login">
                Login
            </Link></p>
        </form>
    </div>
  )
}

export default ResetPassword