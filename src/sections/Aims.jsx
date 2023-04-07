import React from "react";
import { Box, Grid } from "@mui/material";
import AimsCard from "../partials/AimsCard";
import investigate from "../images/investigate.svg";
import connect from "../images/connect.svg";
import build from "../images/build.svg";
import { motion } from "framer-motion";

const Aims = () => {
  const container = {
    hidden: { rotate: 90 },
    show: {
      rotate: 0,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.7,
      },
    },
  };
  const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };
  return (
    <Box
      m="150px 50px"
      display="flex"
      justifyContent="center"
      height={{ xs: "inherit", md: "50vh" }}
    >
      <Box
        width={{ xs: "100%", md: "75%" }}
        display="flex"
        justifyContent="space-between"
      >
        <Grid
          container
          gridTemplateColumns="repeat(12, 1fr)"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs="12" md="4">
            <AimsCard
              image={investigate}
              title="investigate"
              paragraph=" opportunities for innovation in the current Nigerian market. "
            />
          </Grid>
          <Grid item xs="12" md="4">
            <AimsCard
              image={connect}
              title="connect"
              paragraph="with the top techical talent at your university as well as possible employers."
            />
          </Grid>
          <Grid item xs="12" md="4">
            <AimsCard
              image={build}
              title="build"
              paragraph="tailored solutions to the identiied problems and present this to a pannel of qualified professionals."
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Aims;
