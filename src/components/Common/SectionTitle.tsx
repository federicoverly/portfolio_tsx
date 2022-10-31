import { Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  title: string;
}

export const SectionTitle = ({ title }: IProps) => {
  return (
    <Typography
      fontFamily="Raleway"
      fontWeight={800}
      variant="h1"
      sx={{
        fontSize: { xs: 14, md: 24 },
        color: Colors.secondary,
        marginBottom: 10,
        textTransform: "uppercase",
      }}
    >
      {title}
    </Typography>
  );
};

SectionTitle.displayName = "SectionTitle";
