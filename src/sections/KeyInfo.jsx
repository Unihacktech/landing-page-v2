import { Box, Grid } from "@mui/material";
import React from "react";
import Statbox from "../partials/Statbox";
import { motion } from "framer-motion";

const KeyInfo = () => {
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
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <Box
      m="400px 20px"
      display="flex"
      justifyContent={{ xs: "left", md: "center" }}
    >
      <Box width={{ xs: "100%", md: "75%" }}>
        <Grid
          container
          spacing={2}
          component={motion.dev}
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <Grid item xs="12" component={motion.div} variants={item}>
            <Statbox stat={100} statTitile="participants" />
          </Grid>
          <Grid item xs="12" component={motion.div} variants={item}>
            <Statbox stat={20} statTitile="teams" />
          </Grid>
          <Grid item xs="12" component={motion.div} variants={item}>
            <Statbox stat={120} statTitile="hours" includePlus={false} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default KeyInfo;
