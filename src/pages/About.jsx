import { Box, Divider, Link, Typography } from "@mui/material";
import React from "react";
import Header from "../partials/Header";
import abdullah from "../images/abdullah.JPG";
import { tokens } from "../theme";

const About = () => {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <Link href={`mailto:${email}${params}`}>{children}</Link>;
  };
  const colors = tokens();
  return (
    <Box>
      <Header includeContactUs={false} />
      <Box m={{ xs: "20px", md: "50px" }}>
        <Box width={{ md: "60%" }}>
          <Typography
            variant="h2"
            color={colors.primary[500]}
            fontFamily="Space Mono"
            fontWeight="bold"
            fontSize={{ xs: "25px", md: "40px" }}
          >
            Contact Us
          </Typography>

          <Typography
            fontFamily="Rubik"
            fontSize={{ xs: "18px", md: "25px" }}
            color={colors.whiteAccent[200]}
            m="20px 0"
          >
            Thank you for your interest in supporting our organization! We are
            committed to delivering high-quality events and programs that foster
            innovation, promote diversity and inspire collaboration. We believe
            that your sponsorship would be an excellent opportunity for us to
            work together towards these goals.
          </Typography>
          <Typography
            fontFamily="Rubik"
            fontSize={{ xs: "18px", md: "25px" }}
            color={colors.whiteAccent[200]}
            m="20px 0"
          >
            As a sponsor, you will receive prominent brand exposure through our
            website, social media channels, and event-related materials. You
            will also have the opportunity to network with other sponsors,
            participants, and industry leaders. Moreover, your contribution will
            make a meaningful difference in the lives of our participants by
            providing them with the resources, mentorship, and support they need
            to succeed.
          </Typography>
        </Box>

        <Divider sx={{ borderBottomWidth: "10px" }} />

        <Box marginTop="20px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              alt="founder"
              src={abdullah}
              width={"150px"}
              style={{ boxShadow: 3, borderRadius: "50%" }}
            />
          </Box>
          <Box textAlign="center" paddingBottom="50px">
            <Typography
              variant="h2"
              fontSize="20px"
              fontFamily="Rubik"
              color={colors.whiteAccent[200]}
            >
              Abdullah Muhammad-Kamal
            </Typography>
            <Typography
              variant="h2"
              fontSize="20px"
              fontFamily="Rubik"
              color={colors.whiteAccent[200]}
            >
              CEO | Co-Founder Unihack LTD
            </Typography>
            <Typography
              variant="h2"
              fontSize="20px"
              fontFamily="Rubik"
              color={colors.whiteAccent[200]}
            >
              <Mailto email="abdullah@unihack.io" subject="Sponsorship enquiry">
                abdullah@unihack.io
              </Mailto>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
