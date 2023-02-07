import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';



const SingleSearchCard = ({ data }) => {

    return (
        <Card sx={{ display: 'flex' }}>
            <Link to={`/Deatiles/${data.imdbID}`}>
                <Stack sx={{ display: 'flex', flexDirection: "column" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={data.Poster !== "N/A" ? data.Poster : "https://media.istockphoto.com/id/529239795/vector/no-image-signs-for-web-page.jpg?s=1024x1024&w=is&k=20&c=_CG7UzX0nBGsb-mh8-LZXT_5C_HDoyXsUSs2kdYtfPg="}
                        alt="Live from space album cover" />
                </Stack>

            </Link>

            <CardContent sx={{ flex: '1 0 auto' }}>
                <Stack specing={1} alignItems="flex-start" justifyContent="flex-start">
                    <Link to={`/Deatiles/${data.imdbID}`}>
                        <Typography component="div" variant="h5">
                            {data.Title}
                        </Typography>
                    </Link>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Released {data.Year}
                    </Typography>
                    <Chip label={data.Type} sx={{ textTransform: "capitalize" }} />
                </Stack>
            </CardContent>


        </Card>
    )
}

export default SingleSearchCard


