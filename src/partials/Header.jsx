import React from "react";
import { Box, Button, Typography } from "@mui/material";
import logo from "../images/logo.png";
import { tokens } from "../theme";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = ({ includeContactUs = true }) => {
  const colors = tokens();
  return (
    <Box display="flex" justifyContent="space-between">
      <Box m={{ xs: "20px", md: "50px" }} display="flex">
        <Link to="/">
          <img alt="logo" width="200px" src={logo} />
        </Link>
      </Box>
      <Box m={{ xs: "30px 20px", md: "50px" }}>
        {includeContactUs && (
          <Link style={{ textDecoration: "none" }} to="/about-us">
            <Button
              variant="contained"
              sx={{ bgcolor: "#008000", textTransform: "none" }}
              component={motion.div}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
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
