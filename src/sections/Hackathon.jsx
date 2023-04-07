import React from "react";
import { Box, Typography } from "@mui/material";
import { tokens } from "../theme";
import { motion } from "framer-motion";

const Hackathon = () => {
  const colors = tokens();
  const HightlightedText = ({ text }) => (
    <span style={{ color: "#ffdf00" }}> {text} </span>
  );
  return (
    <Box m="400px 20px">
      <Box
        width={{ md: "60%" }}
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
          What to expect
        </Typography>
        <Typography
          variant="p"
          fontSize="24px"
          color={colors.whiteAccent[300]}
          marginTop="50px"
          display="inline-block"
          fontFamily="Rubik"
        >
          Throughout a scheduled week, students will compete as teams to
          <HightlightedText text="strategize" /> and create a product dedicated
          to addressing <HightlightedText text="specific needs" /> within
          Nigeria. On the final day, their products will be presented to a panel
          of <HightlightedText text="qualified professionals" /> in the
          <HightlightedText text="technology sector" />. Throughout the week we
          aim to provide the candidates with seminars and lectures from our
          partners to further their learning in{" "}
          <HightlightedText text="software" /> and{" "}
          <HightlightedText text="product development" />.
        </Typography>
        <Typography
          variant="p"
          fontSize="24px"
          color={colors.whiteAccent[300]}
          marginTop="20px"
          display="inline-block"
          fontFamily="Rubik"
        >
          Many of our candidates are ready to take the next leap in their career
          progression, whether it be through an{" "}
          <HightlightedText text="internship" /> or a{" "}
          <HightlightedText text="full-time role" />
          this event will serve as their first step into the industry.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hackathon;
