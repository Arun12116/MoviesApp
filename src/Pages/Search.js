import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import SingleSearchCard from '../Components/SingleSearchCard';
import { Typography } from '@mui/material';
import {omdb}  from '../utiles'
// console.log(omdb);
const Search = _ => {
const [list,setList]=useState([]);
const [param,Setparms]=useSearchParams();
const [totalData,setTotalData]=useState(0);

    useEffect(_ => {
        if(param.has("q") && param.get("q") !== ""){

        (async _ => {
            const response = await omdb.get(`?s=${param.get("q")}`);
            setTotalData(response.data.totalResults)
            // console.log(response.data);
setList(response.data.Search)
        })();
    }

    },[param])

    return (
        <>
        <Box p={4}>
        <Typography >{totalData} data Found....</Typography>
            <Stack spacing={5} mt={1}>
        {
            list.map((items,idx)=>{
                return <SingleSearchCard    data={items} key={idx}/>
            })
        }
        </Stack>
        </Box>

        </>
    )
}

export default Search;