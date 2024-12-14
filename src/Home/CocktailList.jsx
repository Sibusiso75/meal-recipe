import {  useNavigate } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from "@mui/material";
import { Button } from "react-bootstrap";

function CocktailList({ id, name, image }) {
  let navigate = useNavigate()
  return (
    <Card sx={{  maxWidth: 345 }} key={id} onClick={()=>navigate(`/meal/${id}`)}>
          <CardActionArea >
          <CardMedia
        component="img"

        className="itemsContainer"
        image={image}
        title={name}
      /> 
     <CardContent className="glassAndInfo">
      
       <Typography >
       {name}
       </Typography>
     </CardContent>
     <CardActions className="glassAndInfo">
       <Button onClick={()=>navigate(`/meal/${id}`)}>More details</Button>
     </CardActions>
          </CardActionArea>
    
       
  </Card>
  );
}

export default CocktailList;