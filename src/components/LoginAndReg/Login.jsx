import Axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
import { useGlobalContext } from '../../context'

function Login() {
    const {loading, email, setEmail,password, setPassword, setLoggedIn,setUsername,username} = useGlobalContext()
       
    let navigate = useNavigate()
    // https://mealapp-api-2.onrender.com/login

    Axios.defaults.withCredentials=true;
    function handleSubmit(e){
        e.preventDefault()
        Axios.post("http://localhost:5000/login", 
          { email, password}).then(response =>{
            if(response.data.status){
                navigate("/")
            }
            else {
                toast.error("Invalid login details")
            }
        }).catch(err =>{
            toast.error("error")
        })
   }
   
  return (
    <div>
         <div style={{margin:"15px"}}>
         <Link to="/" style={{color:"gray",float:"right", textDecoration:"underline"}}>Browse</Link>
            <h2 style={{marginLeft:"10%"}}>Login</h2>
        

        <form onSubmit={handleSubmit}>
       
          
            <input type="email" 
             required
            onChange={(e)=>setEmail(e.target.value)}
            
            placeholder='Email'/>

            <input type="password" 
             required
            onChange={(e)=>setPassword(e.target.value)}
            
            placeholder='Password'/>
            <button type="submit" className="btn2">Login</button>
         
        </form>
        <Link to="/forgotPassword">Forgot Password?</Link>
            <p>Don't have an account? <Link to ="/register">
                Sign up
            </Link></p>
            </div>
    </div>
  )
}

export default Login