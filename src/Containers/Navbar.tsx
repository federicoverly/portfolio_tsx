import { AppBar } from "@mui/material";
import { Colors } from "../styles/globalStyles";

import { NavbarContainer } from "../components/Navbar/NavbarContainer";

export const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        primaryColor: Colors.secondary,
        marginBottom: 4,
        boxShadow: "none",
        opacity: 1,
      }}
    >
      <NavbarContainer />
    </AppBar>
  );
};

Navbar.displayName = "Navbar";
