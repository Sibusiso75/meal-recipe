import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import CocktailList from "./CocktailList";
import {useNavigate} from "react-router-dom"

function AllCocktails({}) {
  const { cocktails } = useGlobalContext();
  let navigate = useNavigate()

  
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