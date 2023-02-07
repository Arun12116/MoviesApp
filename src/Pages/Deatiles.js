import { useParams } from "react-router-dom";
import axios from 'axios';
import { omdb } from "../utiles";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { Box, Chip, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import useLocalStorage from "use-local-storage"


const Deatiles = _ => {
    const [pdata, setPdata] = useState({});
    const [flag, setFlag] = useState("false");
    const { id } = useParams();
    const navigate = useNavigate();
    const [Favourtis, setFavourties] = useLocalStorage("Favourtis", "[]");
    const [isFavourti, setFavourtie] = useState(false);

    useEffect(_ => {
        const favs = JSON.parse(Favourtis);
        if (favs.includes(id)) {
            setFavourtie(true);
        } else {
            setFavourtie(false);
        }

    }, [Favourtis, id]);

    const toggleFavourite = _ => {
        const favs = JSON.parse(Favourtis);
        if (isFavourti) {
            const idx = favs.indexOf(id);
            favs.splice(idx, 1);
            setFavourtie(false);
        } else {
            favs.push(id);
            setFavourtie(true);
        }
        setFavourties(JSON.stringify(favs));
    }


    useEffect(_ => {
        (async _ => {
            const response = await omdb.get(`?i=${id}&plot=full`);
            // console.log(response);
            if (response.data.response === "False") {
                navigate("/404");
            } else {
                console.log(response.data);
                setPdata(response.data)
            }
        })()
    }, [id]);

    useEffect(_ => {
        if (pdata.Country?.length > 0) {
            (async _ => {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${pdata.Country}?fullText=true`)
                setFlag(response.data[0]?.flags?.svg);
            })()
        }
    
    }, [pdata])


return (
    <>
        <Box p={5}>
            <Stack spacing={3}>
                <Stack direction="row" spacing={2}>
                    <img src={pdata.Poster} alt="ima" />
                    <Box>
                        <Typography variant="h4" >
                            {pdata.Title}
&nbsp;
                            <IconButton size="large" color="error" onClick={toggleFavourite}>
                            {isFavourti ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
                            </IconButton>
                        </Typography>
                        <Typography variant="45" spacing={2}>
                            Released:{pdata.Year}
                        </Typography>
                        <Typography variant="h5" mt={2}>Crew</Typography>
                        <Stack direction="row" gap={2} mt={1} sx={{ flexWrap: "wrap" }} justifyContent="flex-start" alignItems="flex-start" align="justify">

                            {pdata.Actors?.split(",").map((e, i) => {
                                return <Chip key={i} label={e} />

                            })}

                            {pdata.Writer?.split(",").map((e, i) => {
                                return <Chip key={i} label={e} />

                            })}
                            <Chip label={pdata.Director} />
                        </Stack>

                        <Stack direction="row" mt={3} spacing={2} alignItems="center" >
                            <img alt="logo" src={flag} height={35} spacing={5} style={{ outline: "1px solid black", outlineOffset: "1px" }} />
                            <Typography variant="overline">
                                {pdata.Country}
                            </Typography>
                        </Stack>

                    </Box>
                </Stack>
                <Typography variant="h4" mt={20}>Plot:</Typography>
                <Typography align="justify">
                    {pdata.Plot}

                </Typography>
            </Stack>
        </Box>
        /</>
)
}
export default Deatiles;