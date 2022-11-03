import { Drawer } from "@mui/material";
import { ReactNode } from "react";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  open: boolean;
  toggleDrawer: (input: boolean) => void;
  children: ReactNode;
}

export const CustomDrawer = ({ open, toggleDrawer, children }: IProps) => {
  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={open}
      onClose={() => toggleDrawer(false)}
      sx={{
        primaryoundColor: Colors.primary,
      }}
    >
      {children}
    </Drawer>
  );
};

CustomDrawer.displayName = "Drawer";
