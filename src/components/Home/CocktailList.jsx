import React from "react";
import {  useNavigate } from "react-router-dom";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
function CocktailList({ id, name, image }) {
  let navigate = useNavigate()
  return (
      <Card className="cocktails" key={id} onClick={()=>navigate(`meal/${id}`)}>

     
           <CardMedia
        component="img"

       className="photo"
        image={image}
        title={name}
      /> 
        <CardContent className="glassAndInfo">

<Typography variant="body2" >
{name}
</Typography>
</CardContent>

        </Card>
  );
}

export default CocktailList;



