import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Container } from "@mui/system";
import React from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import welcome from "../../assets/welcome.png";
const Welcome = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(0),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#fff",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#FED801", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#000",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to ABC Restorent
            </Typography>
            <Title variant="h1">Discover a place where you'll Love to Eat!!.</Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              facere eveniet recusandae asperiores in quod sunt accusamus illo
              eius. Blanditiis iusto nam magni possimus officia dolorem sint
              porro a ad?
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More Aout Us"
              welcomeBtn={true}
            />
          </Box>
          <Box sx={{ flex: "1.25" }}>
            <img
              src={welcome}
              alt="Welcome"
              style={{ maxWidth: "100%", marginButtom: "2yrem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Welcome;
