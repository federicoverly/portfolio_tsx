import { Typography } from "@mui/material";
import React, { MouseEventHandler } from "react";
import { Link } from "react-scroll";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  to: string;
  offset?: number;
  title: string;
  toggleDrawer: (input: boolean) => MouseEventHandler | void;
}

export const DrawerLink = ({ to, offset, title, toggleDrawer }: IProps) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset && offset}
      style={{
        display: "flex",
        alignItems: "center",
        outline: "none",
        textDecoration: "none",
        color: `${Colors.secondary}`,
        height: "33vh",
        alignContent: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <Typography
        fontFamily="Raleway"
        fontWeight={300}
        variant="h6"
        textAlign="center"
        onClick={() => toggleDrawer(false)}
      >
        {title}
      </Typography>
    </Link>
  );
};
