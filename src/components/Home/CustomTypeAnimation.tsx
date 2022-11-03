import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Colors } from "../../styles/globalStyles";

export const CustomTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hey! This is Federico, web developer",
        1000,
        "Scroll down to check my portfolio and some other interesting stuff!",
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em", color: Colors.secondary, width: "90%" }}
    />
  );
};

CustomTypeAnimation.displayName = "TypeAnimation";
