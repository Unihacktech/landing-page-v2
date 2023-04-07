import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const Organiser = ({ img, name, linkedIn }) => {
  const colors = tokens();
  return (
    <Box>
      <Grid container spacing={{ md: 2 }}>
        <Grid item xs="2">
          <img src={img} width="50px" alt="organiser" />
        </Grid>
        <Grid item xs="10">
          <Typography fontFamily="Rubik" color={colors.whiteAccent[200]}>
            <Link href={linkedIn}>{name}</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Organiser;
