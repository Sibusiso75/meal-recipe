import React, {useState,useEffect} from "react";
import SearchForm from "../components/SearchForm";
import AllCocktails from "../components/AllCocktails";
import { useGlobalContext } from "../context";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {FaUserCircle, FaChevronUp,FaChevronDown} from "react-icons/fa"

function Home() {
  const {loggedIn, setLoggedIn, setUsername,username}= useGlobalContext()
  let navigate= useNavigate()
  const[dropDown, setDropDown] = useState(false)

  axios.defaults.withCredentials=true;
  function handleLogOut(e){
    e.preventDefault()
    axios.get("https://mealapp-api-2.onrender.com/logout").then((response)=>{           
           if(response.data.status){
               navigate("/login")
               setLoggedIn(false)
           } 
    }).catch(err =>{
        console.log(err)
    })
}
useEffect(()=>{
 axios.get("https://mealapp-api-2.onrender.com/verify")
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
    <main>
      <div className="welcomeIntro">

           <h3>Meal recipes </h3>
             {loggedIn==true?
                <main>
                  <span style={{color:"white"}} ><FaUserCircle/>{username}</span>
                  <span onClick={()=>setDropDown(!dropDown)} style={{color:"whitesmoke",background:"black", borderRadius:"100%", padding:"10px"}}>{dropDown?<FaChevronUp/>:<FaChevronDown/>}
                  </span>
                 {dropDown ?<div style={{backround:"white", padding:"10px", width:"fit-content"}}>
                  <button onClick={handleLogOut}>Logout</button></div>:null}
               </main>
               :
                <div >

                  <button onClick={()=>navigate("/login")}>Log in</button>
                </div>
            
     } 
           <br/>

<p style={{textAlign:"center"}}>Looking for recipe to make your own delicious meal? we got you!


</p>


      </div>
      <main style={{textAlign:"center"}}>

<SearchForm />
      </main>
<AllCocktails />
       
    
     
    </main>
  );
}

export default Home;