import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import rocket from "../images/rocket.svg";
import { tokens } from "../theme";
import { motion } from "framer-motion";

const AboutUsCondenced = () => {
  const colors = tokens();
  const HightlightedText = ({ text }) => (
    <span style={{ color: "#ffdf00" }}> {text} </span>
  );
  return (
    <Box m="20px" height={{ xs: "inherit", md: "50vh" }}>
      <Grid container spacing="2">
        <Grid item xs="12" md={7}>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <Typography
              variant="h3"
              fontFamily="Space Mono"
              color={colors.primary[500]}
              fontWeight="700"
            >
              About unihack
            </Typography>
            <Typography
              variant="p"
              fontSize="24px"
              color={colors.whiteAccent[300]}
              marginTop="50px"
              display="inline-block"
              fontFamily="Rubik"
            >
              Welcome to unihack! We are a company dedicated to in providing
              <HightlightedText text="innovative" /> and
              <HightlightedText text="engaging" />
              learning and career solutions for{" "}
              <HightlightedText text="early-career talent" />. Whether you are a
              student looking to enhance your learning, or a recent graduate
              looking for new and effective ways to further your career
              prospects. We offer a wide range of{" "}
              <HightlightedText text="resources" /> and{" "}
              <HightlightedText text="events" />
              that will help you achieve your goals and reach your{" "}
              <HightlightedText text="full potential" />. We look forward to
              helping you excel in your career!
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs="12"
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            alt="team"
            width={{ xs: "200px", md: "400px" }}
            src={rocket}
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: -500 }}
            // transition={{ ease: "easeOut", duration: 1.5, delay: 1 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsCondenced;
