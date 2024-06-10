import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import houseCard from "../../assets/ambience.jpg";
import { CiTextAlignCenter } from "react-icons/ci";

const Ambience = () {
    const CustomBox = styled(Box)(({ theme })=>({
        display: "flex",
        gap:theme.spacing(10),
        alignItems:"center",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            CiTextAlign:"center",
        },
    }));
  return (
    <div>
      
    </div>
  )
}

export default Ambience
