import { Box } from "@mui/system";
import React, { ReactNode } from "react";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  children: ReactNode;
}

export const DrawerLinksContainer = ({ children }: IProps) => {
  return (
    <Box
      sx={{
        primaryColor: Colors.primary,
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
      }}
    >
      {children}
    </Box>
  );
};

DrawerLinksContainer.displayName = "DrawerLinksContainer";
