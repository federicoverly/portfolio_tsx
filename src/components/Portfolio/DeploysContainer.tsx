import { Box } from "@mui/system";
import React, { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}

export const DeploysContainer = ({ children }: IProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

DeploysContainer.displayName = "DeploysContainer";
