import { Box, Grid, Typography, Stack } from "@mui/material";
import React from "react";
import Organiser from "../partials/Organiser";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { tokens } from "../theme";
import yomi from "../images/yomi.JPG";
import abdullah from "../images/abdullah.JPG";
import habeeb from "../images/habeeb.JPG";
import { Link } from "react-router-dom";

const Footer = () => {
  const colors = tokens();
  return (
    <Box m="250px 50px" display="flex" justifyContent="center">
      <Box width={{ md: "75%" }}>
        <Grid container spacing={2}>
          <Grid item xs="12" md="6">
            <Typography
              variant="p"
              fontFamily="Space Mono"
              fontSize="20px"
              fontWeight="bold"
              color={colors.primary[500]}
            >
              Organisers
            </Typography>
            <Box marginTop="20px">
              <Organiser
                img={yomi}
                name="Abayomi Atiko"
                linkedIn="https://www.linkedin.com/in/yomi-atiko/"
              />
              <Organiser
                img={abdullah}
                name="Abdullah Muhammad-Kamal"
                linkedIn="https://www.linkedin.com/in/abdullah-m-2a1677167/"
              />
              <Organiser
                img={habeeb}
                name="Habeeb Muhammad-Kamal"
                linkedIn="https://www.linkedin.com/in/habeeb-kamal-b31716166/"
              />
            </Box>
          </Grid>
          <Grid item xs="12" md="6">
            <Box display="flex" justifyContent={{ md: "right" }}>
              <Stack>
                <Typography
                  variant="h3"
                  fontFamily="Space Mono"
                  fontSize="20px"
                  color={colors.primary[500]}
                  fontWeight="bold"
                >
                  Follow us here
                </Typography>
                <Box>
                  <InstagramIcon
                    fontSize="large"
                    sx={{
                      marginRight: "5px",
                      marginTop: "5px",
                      color: colors.whiteAccent[200],
                    }}
                  />
                  <TwitterIcon
                    fontSize="large"
                    sx={{
                      marginRight: "5px",
                      marginTop: "5px",
                      color: colors.whiteAccent[200],
                    }}
                  />
                </Box>

                <Typography
                  variant="p"
                  fontSize={{ xs: "20px", md: "16px" }}
                  color="#008000"
                  textAlign="left"
                  fontFamily="Rubik"
                >
                  <Link to="/about-us" color={colors.primary[500]}>
                    Contact Us
                  </Link>
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
