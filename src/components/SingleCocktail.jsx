import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Home/Loading";

function SingleCocktail() {
  const { id } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    async function getCocktails() {
      try {
        const res = await fetch(`${url}`);
        const data = await res.json();
        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strCategory: category,
            strInstructions: instructions,
            strArea: area,
            strIngredient1,      
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
          
          } = data.meals[0];
         
          const ingredients = [
            strIngredient1,
            
          ", ",
            strIngredient2,
            ", ",

          
            strIngredient3,
            ", ",
           
            strIngredient4,
            ", ",
            
          
            strIngredient5,
           
          
            strIngredient6,
            
           
            strIngredient7,
          ];
          const newCocktail = {
            name,
            image,
             area,
            category,
            instructions,
            ingredients,
          
          }
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCocktails();
  }, [id]);
  

  const { name, image, category, instructions, ingredients, area} =
    cocktail;
  return (
    <div>
      <br />
      <Link to="/" className ="backHome">Back home</Link>
      <div>

      <div className="glassAndInfo">
      <p>Name: {name}</p>
      <img src={image} alt={name} className="photo"  />
    
      <p>Category: {category}</p>
      <p>Instructions: {instructions}</p>
      <p>Ingredients: {ingredients}
      <p>Area: {area}</p>
        
      
        </p>
        </div>
      </div>
    </div>
  );
}

export default SingleCocktail;