import { Box, Grid } from "@mui/material";
import React from "react";
import Statbox from "../partials/Statbox";

const KeyInfo = () => {
  return (
    <Box
      m="250px 50px"
      display="flex"
      justifyContent={{ xs: "left", md: "center" }}
    >
      <Box width={{ xs: "100%", md: "75%" }}>
        <Grid container spacing={2}>
          <Grid item xs="12">
            <Statbox stat={100} statTitile="participants" />
          </Grid>
          <Grid item xs="12">
            <Statbox stat={20} statTitile="teams" />
          </Grid>
          <Grid item xs="12">
            <Statbox stat={120} statTitile="hours" includePlus={false} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default KeyInfo;
