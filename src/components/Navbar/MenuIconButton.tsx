import { IconButton } from "@mui/material";
import { MouseEventHandler } from "react";
import { Colors } from "../../styles/globalStyles";
import MenuIcon from "@mui/icons-material/Menu";

export interface IProps {
  show: boolean;
  toggleDrawer: (input: boolean) => MouseEventHandler;
}

export const MenuIconButton = ({ show, toggleDrawer }: IProps) => {
  return (
    <IconButton
      edge="end"
      aria-label="open drawer"
      onClick={toggleDrawer(true)}
      sx={{
        mr: 2,
        display: { xs: "block", sm: "none" },
        alignItems: "center",
        justifyContent: "center",
        color: `${show ? Colors.primary : Colors.secondary}`,
      }}
    >
      <MenuIcon />
    </IconButton>
  );
};

MenuIconButton.displayName = "MenuIconButton";
