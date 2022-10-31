import { Typography } from "@mui/material";
import React, { MouseEventHandler } from "react";
import { Link } from "react-scroll";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  to: string;
  offset?: number;
  show: boolean;
  title: string;
  toggleDrawer: (input: boolean) => MouseEventHandler;
}

export const NavbarLink = ({
  show,
  to,
  offset,
  title,
  toggleDrawer,
}: IProps) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      style={{
        display: "flex",
        alignItems: "center",
        outline: "none",
        marginRight: 35,
        textDecoration: "none",
        color: `${show ? Colors.primary : Colors.secondary}`,
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
        onClick={toggleDrawer(false)}
      >
        {title}
      </Typography>
    </Link>
  );
};

NavbarLink.displayName = "NavbarLink";
