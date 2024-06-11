import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import houseCard from "../../assets/ambience.jpg";

const Ambience = () => {
    const CustomBox = styled(Box)(({ theme })=>({
        display: "flex",
        gap:theme.spacing(10),
        alignItems:"center",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            CiTextAlign:"center",
        },
    }));
    const ImgContainer = styled(Box)(({ theme}) =>({
      width:"100%",
      [theme.breakpoints.down("md")]:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
      },
    }));
    const LargText = styled(Typography)(({ theme }) => ({
      fontSize:"64px",
      color:"#000",
      fontWeight:"700",
      [theme.breakpoints.down("md")]:{
        fontSize:"32px",
      }, 
    }));
    const SmallText = styled(Typography)(({ theme }) => ({
      fontSize:"18px",
      color:"#7B8087",
      fontWeight:"500",
      [theme.breakpoints.down("md")]:{
        fontSize:"14px",
      }, 
    }));
    const TextFlexbox = styled(Box)(({ theme }) => ({
      marginTop:theme.spacing(7),
      display:"flex",
      justifyContent:"space-between",
      padding: theme.spacing(0,5,0,5),
      [theme.breakpoints.down("sm")]:{
        flexDirection:"column",
        gap: theme.spacing(5),
      },
    }));

    const Divider = styled("div")(({ theme }) => ({
      width:"13%",
      height:"5px",
      backgroundColor:"#000339",
      [theme.breakpoints.down("md")]:{
        marginLeft:"auto",
        marginRight:"auto",
      },
    }));

  return (
    <Box sx={{ py:10 }}>  
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={houseCard} alt="house"  style={{ maxWidth:"100%"}}/>
          </ImgContainer>

          <Box>
            <Divider/>

            <Typography
             sx={{
              fontSize:"35px",
              color:"#000339",
              fontWeight:"700",
              my:3,
             }}
            >
              You've get the best experience``
            </Typography>
            <Typography
            sx={{ 
              fontSize:"16px",
              color:"#5A6473",
              lineHeight:"27px",
            }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat excepturi obcaecati ipsa tenetur aliquam alias perferendis officia neque quasi optio doloremque quod ratione, rem velit voluptate, aut qui odit nulla.
            </Typography>
          </Box>
        </CustomBox>

        <TextFlexbox>
            <Box
            sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
            }}>
              <LargText>300+</LargText>
              <SmallText>Trusted Clients</SmallText>
            </Box>

            <Box
            sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
            }}>
              <LargText>250+</LargText>
              <SmallText>Dishes</SmallText>
            </Box>

            <Box
            sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
            }}>
              <LargText>550+</LargText>
              <SmallText>Delivery Per Day</SmallText>
            </Box>
        </TextFlexbox>
      </Container>
    
    </Box>
  )
}

export default Ambience;
