import { Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Colors } from "../../styles/globalStyles";
import { CustomDrawer } from "./CustomDrawer";
import { DrawerLink } from "./DrawerLink";
import { DrawerLinksContainer } from "./DrawerLinksContainer";
import { MenuIconButton } from "./MenuIconButton";
import { NavbarLink } from "./NavbarLink";
import { NavbarLinksContainer } from "./NavbarLinksContainer";
import { NavbarLogo } from "./NavbarLogo";

export const NavbarContainer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [show, handleShow] = useState<boolean>(false);

  const handleWindowChange = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowChange);
    return () => {
      window.removeEventListener("scroll", handleWindowChange);
    };
  }, []);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: show ? Colors.secondary : Colors.primary,
        color: show ? Colors.primary : Colors.secondary,
        transition: (theme) =>
          theme.transitions.create("background-color", {
            easing: "ease-in",
            duration: 500,
          }),
      }}
    >
      <NavbarLogo show />
      <NavbarLinksContainer>
        <NavbarLink
          show
          to={"portfolio"}
          title={"Portfolio"}
          offset={-80}
          toggleDrawer={toggleDrawer}
        />
        <NavbarLink
          show
          to={"about"}
          title={"About"}
          toggleDrawer={toggleDrawer}
        />
        <NavbarLink
          show
          to={"contact"}
          title={"Contact"}
          offset={-80}
          toggleDrawer={toggleDrawer}
        />
      </NavbarLinksContainer>
      <MenuIconButton show toggleDrawer={toggleDrawer} />
      <CustomDrawer open={open} toggleDrawer={toggleDrawer(false)}>
        <DrawerLinksContainer>
          <DrawerLink
            to={"portfolio"}
            title={"Portfolio"}
            offset={-40}
            toggleDrawer={toggleDrawer(false)}
          />
          <DrawerLink
            to={"about"}
            title={"About"}
            toggleDrawer={toggleDrawer(false)}
          />
          <DrawerLink
            to={"contact"}
            title={"Contact"}
            toggleDrawer={toggleDrawer(false)}
          />
        </DrawerLinksContainer>
      </CustomDrawer>
    </Toolbar>
  );
};

NavbarContainer.displayName = "NavbarContainer";
