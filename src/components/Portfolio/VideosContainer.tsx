import { Box } from "@mui/system";
import React, { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
  windowSize: WindowSize;
}

export type WindowSize = {
  innerWidth: number;
  innerHeight: number;
};

export const VideosContainer = ({ children, windowSize }: IProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap",
        flexDirection: windowSize.innerWidth < 500 ? "column" : "row",
      }}
    >
      {children}
    </Box>
  );
};

VideosContainer.displayName = "VideosContainer";
