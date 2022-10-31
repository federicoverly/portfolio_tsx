import { Box } from "@mui/system";
import React from "react";
import { CustomTypeAnimation } from "../components/Home/CustomTypeAnimation";

export const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <CustomTypeAnimation />
    </Box>
  );
};

Home.displayName = "Home";
