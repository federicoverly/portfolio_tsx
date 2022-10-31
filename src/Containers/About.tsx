import { Box } from "@mui/material";
import React from "react";

export const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "90vw",
      }}
    ></Box>
  );
};

About.displayName = "About";
