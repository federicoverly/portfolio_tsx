import { Box } from "@mui/material";
import React from "react";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Colors } from "./styles/globalStyles";

function App() {
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
}

export default App;
