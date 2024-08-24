import React from "react";
import { Link } from "react-router-dom";

function CocktailList({ id, name, image }) {
  return (
      <div className="itemsContainer">

     
      
        <Link to={`/meal/${id}`}>

          <img
            src={image}
            alt={name}
           className="photo"
          ></img>
        </Link>
        <div className="glassAndInfo">
          <p>{name}</p>
        </div>
        </div>
  );
}

export default CocktailList;