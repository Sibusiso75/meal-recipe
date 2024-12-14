import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from "@mui/material";
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
  <Button size="large" onClick={()=>navigate("/")}>Back</Button>
    <div style={{ margin:"30px",border:"none",background:"lightslategrey" }} key={id} onClick={()=>navigate(`/meal/${id}`)}>
          <CardActionArea >
          <CardActions >
     </CardActions>
          <CardMedia
        component="img"

        sx={{ maxWidth: 345 }}
        image={image}
        title={name}
      /> 
     <CardContent className="glassAndInfo">
      
       <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    
          
       {name}
       {category} 
       {instructions} 
       {ingredients} 
       {area}
       </Typography>

     </CardContent>
   
          </CardActionArea>
    
       
  </div>
    </div>
  );
}

export default SingleCocktail;