import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const Statbox = ({ stat, statTitile, includePlus = true }) => {
  const colors = tokens();
  return (
    <Box>
      <Box p={{ md: "0 10px" }}>
        <Typography
          variant="h2"
          fontFamily="Archivo Black"
          fontSize={{ xs: "80px", md: "200px" }}
          display="inline"
          color={colors.primary[200]}
        >
          {stat}
          {includePlus && "+"}
        </Typography>
        <Typography
          variant="p"
          fontFamily="Rubik"
          fontSize={{ xs: "15px", md: "45px" }}
          fontWeight="bold"
          color={colors.primary[500]}
        >
          {statTitile}
        </Typography>
      </Box>
      <Divider sx={{ borderBottomWidth: 10 }} />
    </Box>
  );
};

export default Statbox;
