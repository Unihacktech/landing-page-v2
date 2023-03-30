import { Box, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const AimsCard = ({ image, title, paragraph }) => {
  const colors = tokens();
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <img alt="aim" src={image} width="200px" />
      </Box>
      <Box m="10px 40px" component="span" sx={{ display: "block" }}>
        <Typography
          variant="p"
          fontSize="24px"
          color={colors.whiteAccent[200]}
          fontFamily="Rubik"
        >
          <span style={{ color: "#ffdf00", fontFamily: "Space Mono" }}>
            {title}
          </span>{" "}
          {paragraph}
        </Typography>
      </Box>
    </Box>
  );
};

export default AimsCard;
