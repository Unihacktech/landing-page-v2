import React from "react";
import { Box, Chip, Divider, Typography } from "@mui/material";
import { tokens } from "../theme";

const CalendarCard = ({ date, description, activities }) => {
  const colors = tokens();
  const activityToColor = {
    "Morning Registration": "#F8D7DA",
    "Opening Ceremony": "#F9E79F",
    "Team Introduction": "#D2B4DE",
    Networking: "#D6EAF8",
    Hacking: "#D5F5E3",
    "Sponsor Presentations": "#FDEDEC",
    "Skills Seminars": "#F2D7D5",
    "Closing Ceremony": "#FADBD8",
    "Careers Fair": "#F8C471",
    "Final Presentation": "#D4E6F1",
  };
  return (
    <Box
      sx={{
        backgroundColor: colors.whiteAccent[200],
        boxShadow: 3,
        margin: "20px 0",
        padding: "10px",
      }}
      height={{ md: "200px" }}
    >
      <Typography
        varient="p"
        fontFamily="Archivo Black"
        fontStyle="italic"
        fontSize="20px"
        color="#14342B"
      >
        {date}
      </Typography>
      <Divider sx={{ marginBottom: "2px", borderBottomWidth: "3px" }} />
      <Typography
        varient="p"
        fontFamily="Rubik"
        fontSize="15px"
        marginBottom="5px"
      >
        {" "}
        {description}
      </Typography>
      <Box>
        {activities.map((activity, i) => (
          <Chip
            label={activity}
            sx={{ m: "5px", backgroundColor: activityToColor[activity] }}
            size="small"
          />
        ))}
      </Box>
    </Box>
  );
};

export default CalendarCard;
