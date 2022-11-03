import { Box } from "@mui/system";
import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}

export const NavbarLinksContainer = ({ children }: IProps) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: { xs: "none", sm: "flex" },
      }}
    >
      {children}
    </Box>
  );
};

NavbarLinksContainer.displayName = "NavbarLinksContainer";
