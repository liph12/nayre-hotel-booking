import React from "react";
import { Box } from "@mui/material";

const HomeBackgroundImage = ({ imageUrl }) => {
  return (
    <Box
      sx={{
        height: { xs: "50vh", sm: "60vh", md: "70vh", lg: "80vh" },
        width: "100%",
        position: "relative",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Adds a slight dark overlay
        },
      }}
    />
  );
};

export default HomeBackgroundImage;
