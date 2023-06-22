import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CalendarCard from "../partials/CalendarCard";
import { tokens } from "../theme";

const Timetable = () => {
  const colors = tokens();
  return (
    <Box m="150px 20px">
      <Typography
        variant="h3"
        fontFamily="Space Mono"
        color={colors.primary[500]}
        fontWeight="700"
      >
        Timetable
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs="12" md="3">
            <CalendarCard
              date="Monday"
              description="Introduction to the hackathon for candidates, mentors and volunteers."
              activities={[
                "Morning Registration",
                "Opening Ceremony",
                "Team Introduction",
                "Networking",
                "Hacking",
              ]}
            />
          </Grid>
          <Grid item xs="12" md="6">
            <CalendarCard
              date="Tuesday-Thursday"
              description="Now each team should be deep into hacking, they should have their problem statement and solution in mind. As part of the process they will have the option of attending skills seminars that will be crucial to their final presentations as well as sponsor presentations for them to introduce their business to the candidates."
              activities={[
                "Hacking",
                "Sponsor Presentations",
                "Skills Seminars",
              ]}
            />
          </Grid>
          <Grid item xs="12" md="3">
            <CalendarCard
              date="Friday"
              description="The final day for candidates to show off and present their hard work during the week."
              activities={[
                "Closing Ceremony",
                "Careers Fair",
                "Final Presentation",
              ]}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Timetable;
