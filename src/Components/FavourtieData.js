import { Card, CardActionArea, CardContent, CardMedia, Grid} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { omdb } from "../utiles";
import { useNavigate } from "react-router-dom";
const FavourtiData = ({ id }) => {
const [data,setData]=useState([]);
const navigate=useNavigate();
const click=()=>{
    navigate(`/Deatiles/${id}`)
}
  

    useEffect(() => {
        (async _ => {

            const response = await omdb.get(`?i=${id}`);
            setData(response.data)
            console.log(response.data);

        })()
    }, [id])

    return (

        <>

        <Grid item xs={3} >
        <Card>
        <CardActionArea onClick={click}>
          <CardMedia  component="img"
          alt="Contemplative Reptile"
          height="200"
          image={data.Poster}/>
        
          
          <CardContent>{data.Title}</CardContent>

        </CardActionArea>
          
          </Card>
          </Grid>


        </>
    )
}

export default FavourtiData;