import { Box } from "@mui/system";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Colors } from "../styles/globalStyles";

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
      <TypeAnimation
        sequence={[
          "Hey! This is Federico, web developer",
          1000,
          "Scroll down to check my portfolio and some other interesting stuff!",
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em", color: Colors.secondary }}
      />
    </Box>
  );
};
