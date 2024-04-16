import React, { useEffect } from "react";
import Loading from "./Loading";
import  axios from "axios"
import { useGlobalContext } from "../context";
import CocktailList from "./CocktailList";
import {Link, useNavigate} from "react-router-dom"

function AllCocktails({}) {
  const { cocktails, loading, loggedIn, setLoggedIn,username } = useGlobalContext();
  let navigate = useNavigate()

  

  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return <p>No results found</p>;
  }

  return (
    <div className="itemsContainer">
   

      {cocktails.map((cocktail) => {
        
        return <CocktailList key={cocktail.id} {...cocktail} />;
        
      })}
    </div>
  );
}

export default AllCocktails;