// import React from 'react'
import useLocalStorage from "use-local-storage"
import FavourtiData from "../Components/FavourtieData";
import { Box,  Grid,  Typography } from "@mui/material";


const Home = () => {
    const [Favourtis, setFavourties] = useLocalStorage("Favourtis", "[]");

    return (
        <>
            <Box p={4}>
                <Typography variant="h5" textAlign="center">Welcome To The Movies Hub</Typography>
                <hr />
                <Grid container spacing={2}>
                    
                    {JSON.parse(Favourtis).map((el, i) => {
                        return <FavourtiData id={el} key={i} />



                    })}


                    </Grid>
            </Box>


        </>
    )
}

export default Home;