
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
import { useGlobalContext } from '../context'

function ForgotPassword() {
  const { email, setEmail} = useGlobalContext()


       let navigate = useNavigate()

    function handleSubmit(event){
      event.preventDefault()
        axios.post("https://mealapp-api-2.onrender.com/forgot-password", 
        {email}).then((response) =>{
         if(response.data.status){
              toast.info("Reset password link has been sent to your email")
         }
     }).catch(err=>{
      console.log("error")
     })
      

      



    }
  return (
    <>
    
        <h2 style={{marginLeft:"1%"}}>Forgot Password</h2>
        <form onSubmit={handleSubmit}>

            <input type="email" 
            onChange={(e)=>setEmail(e.target.value)}
            required

            placeholder='Email'/>
             <span className="backAndSend">
              <button onClick={()=>navigate("/login")} className="backHome">Go Back</button>
            <button type="submit" className="btn1">Send</button>
              </span>
              

        </form>
            
    </>
  )
}

export default ForgotPassword