import React from "react";
import { Box } from "@mui/system";
import Hero from "../sections/Hero";
import backgroundImage from "../images/heroBackground.svg";
import AboutUsCondenced from "../sections/AboutUsCondenced";
import Aims from "../sections/Aims";
import Hackathon from "../sections/Hackathon";
import KeyInfo from "../sections/KeyInfo";
import Timetable from "../sections/Timetable";
import { Link, Typography } from "@mui/material";
import proposal from "../docs/proposal.pdf";
import { tokens } from "../theme";
import Footer from "../sections/Footer";

const Home = () => {
  const colors = tokens();
  return (
    <Box style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* header */}
      <Hero />
      {/* About unihack */}
      <AboutUsCondenced />
      {/* Aims */}
      <Aims />
      {/* What to expect */}
      <Hackathon />
      {/* Key Information */}
      <KeyInfo />
      {/* Timetable */}
      <Timetable />
      {/* Call to action */}
      <Box m="50" display="flex" justifyContent="center">
        <Typography
          color={colors.whiteAccent[100]}
          fontSize="15px"
          fontFamily="Rubik"
        >
          Interested in sponsoring?{" "}
          <Link href={proposal} rel="noopener noreferrer" target="_blank">
            Learn more here
          </Link>
        </Typography>
      </Box>
      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
