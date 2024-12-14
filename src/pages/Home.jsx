<<<<<<< HEAD
import React, {useState,useEffect} from "react";
import SearchForm from "../components/Home/SearchForm";
import AllCocktails from "../components/Home/AllCocktails";
import { useGlobalContext } from "../context";
import {useNavigate, Link} from "react-router-dom"
import axios from "axios"
import {FaUserCircle, FaChevronUp,FaChevronDown} from "react-icons/fa"

function Home() {
  const {loggedIn, setLoggedIn, setUsername,username}= useGlobalContext()
  let navigate= useNavigate()
  const[dropDown, setDropDown] = useState(false)

  axios.defaults.withCredentials=true;
  function handleLogOut(e){
    e.preventDefault()
    axios.get("http://localhost:5000/logout").then((response)=>{           
           if(response.data.status){
             setLoggedIn(false)
               navigate("/login")
           } 
    }).catch(err =>{
        console.log(err)
    })
}
useEffect(()=>{
 axios.get("http://localhost:5000/verify")
 .then(res=>{
  if(res.data.status){
    setLoggedIn(res.data.status)
    setUsername(res.data.username)
  }
  else {
    setLoggedIn(false)
  }
 })
},[])
  return (
    <div>
      <span>
                    
             
                <main>
                   {
                    loggedIn==false? <div>
                        <Link to="/login" style={{fontWeight:"bold",marginRight:"5px",color:"gray",float:"right", textDecoration:"underline"}}>Login</Link>
                           <Link to="/register" style={{fontWeight:"bold",marginRight:"20px",color:"gray",float:"right", textDecoration:"underline"}}>Register</Link>
                             <h2 style={{marginLeft:"5px"}}>Meal recipes </h2>
 
                  </div>:
                  <div>
                  <h2 style={{marginLeft:"5px"}}>Meal recipes </h2>
                  <div style={{marginLeft:"5px"}}>
                  <span style={{color:"white"}} ><FaUserCircle/>{username}</span>
                  <span onClick={()=>setDropDown(!dropDown)} style={{color:"whitesmoke",background:"black", borderRadius:"100%", padding:"10px"}}>
                    {dropDown?<FaChevronUp/>:<FaChevronDown/>}</span>

                  </div>


                {dropDown==true? <div style={{marginLeft:"5px"}}>
                  <button onClick={handleLogOut} className="btn1">Log out</button>
                </div>
                :
               null
                }


                  </div>
                  
                   }
                         

               
=======
import SearchForm from "../Home/SearchForm";
import AllCocktails from "../Home/AllCocktails";

function Home() {
  return (
    <div>
      <span>          
                <main>            
                  <div>
                  <h2 style={{marginLeft:"5px"}}>Meal recipes </h2>
                  </div>                         
>>>>>>> 4e57375 (first c)
               </main>
             
     </span> 
           <br/>
<<<<<<< HEAD

=======
>>>>>>> 4e57375 (first c)
<p style={{textAlign:"center"}}>Looking for recipe to make your own delicious meal? we got you!
</p>
<SearchForm/>
<br /><br />
<AllCocktails />
<<<<<<< HEAD
       
    
     
=======
>>>>>>> 4e57375 (first c)
    </div>
  );
}

export default Home;