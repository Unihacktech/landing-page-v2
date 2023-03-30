import React from "react";
import { Box, Button, Typography } from "@mui/material";
import logo from "../images/logo.png";
import { tokens } from "../theme";
import { Link } from "react-router-dom";

const Header = ({ includeContactUs = true }) => {
  const colors = tokens();
  return (
    <Box display="flex" justifyContent="space-between">
      <Box m="50px" display="flex">
        <Link to="/">
          <img alt="logo" width="200px" src={logo} />
        </Link>
      </Box>
      <Box m="50px">
        {/* <Box
          sx={{
            bgcolor: "#008000",
            borderRadius: 1,
            boxShadow: 3,
          }}
          padding="5px 10px"
          display="flex"
          justifyContent="center"
          width="120px"
        >
          <Typography
            variant="p"
            fontSize={{ xs: "13px", md: "20px" }}
            color={colors.whiteAccent[200]}
            textAlign="center"
            fontWeight="bold"
          >
            Contact Us
          </Typography>
        </Box> */}
        {includeContactUs && (
          <Link style={{ textDecoration: "none" }} to="/about-us">
            <Button
              variant="contained"
              sx={{ bgcolor: "#008000", textTransform: "none" }}
            >
              <Typography
                variant="p"
                fontSize={{ xs: "13px", md: "20px" }}
                color={colors.whiteAccent[200]}
                textAlign="center"
                fontWeight="bold"
              >
                Contact Us
              </Typography>
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Header;
