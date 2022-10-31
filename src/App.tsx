import { Box } from "@mui/material";
import React from "react";
import { Home } from "./Containers/Home";
import { Navbar } from "./Containers/Navbar";
import { Portfolio } from "./Containers/Portfolio";
import { Colors } from "./styles/globalStyles";

export const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Home />
      <Portfolio />
    </Box>
  );
};

App.displayName = "App";
