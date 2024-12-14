import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FaHome } from "react-icons/fa";
function SingleCocktail() {
  const { id } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const [cocktail, setCocktail] = useState([]);
  let navigate = useNavigate()
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
                    <button onClick={()=>navigate("/")} style={{color:"white",margin:"5px", background:"green", fontWeight:"bold"}}>
                      Go back <FaHome/>
                      </button>             
   
       <div style={{ margin:"30px",border:"none"}}>

          <CardMedia
        component="img"
        
        sx={{ maxWidth: 200 }}
        image={image}
        title={name}
        /> 
        </div>
     <CardContent>
      
       <Typography>
    
          
       {name}
       {category} 
       {instructions} 
       {ingredients} 
       {area}
       </Typography>

     </CardContent>
   
    
       
    </div>
  );
}

export default SingleCocktail;