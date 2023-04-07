import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../images/heroBackground.svg";
import Header from "../partials/Header";
import { tokens } from "../theme";
import rocket from "../images/rocket.svg";
const Hero = () => {
  const colors = tokens();
  return (
    <Box height={{ lg: "100vh" }}>
      {/* Header */}
      <Header />
      {/* Hero Content */}
      <Box
        m={{ xs: "20px", md: "50px" }}
        padding={{ xs: "20px 0 200px 0", md: "100px 0 200px 0" }}
        justifyContent="left"
        alignContent="left"
      >
        <Typography
          variant="h2"
          color={colors.primary[500]}
          fontSize={{ xs: "25px", md: "35px" }}
          fontFamily="Space Mono"
          fontStyle="italic"
          textAlign="left"
          fontWeight="bold"
        >
          PRESENTS...
        </Typography>

        <Typography
          width="100%"
          variant="h1"
          color={colors.whiteAccent[200]}
          fontFamily="Archivo Black"
          fontSize={{ xs: "55px", md: "100px", lg: "130px" }}
          display="block"
          marginTop="20px"
          textAlign="left"
        >
          University of
          <span
            style={{
              color: `${colors.primary[500]}`,
            }}
          >
            {" "}
            Abuja{" "}
          </span>
          hackweek 20<span style={{ color: `${colors.primary[500]}` }}>23</span>
          .
        </Typography>

        <Box
          sx={{
            bgcolor: "#008000",
            borderRadius: 1,
            boxShadow: 3,
          }}
          display="inline-block"
          padding="5px 10px"
          marginTop="10px"
          justifyContent="center"
        >
          <Typography
            variant="p"
            fontSize={{ xs: "13px", md: "20px" }}
            color={colors.whiteAccent[200]}
            textAlign="center"
          >
            W/B November 6th 2023 · Airport Road, Abuja, Nigeria
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
