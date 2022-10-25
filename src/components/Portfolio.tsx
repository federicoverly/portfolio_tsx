import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Colors } from "../styles/globalStyles";

export const Portfolio = () => {
  return (
    <Box id="portfolio">
      <Typography
        fontFamily="Raleway"
        fontWeight={800}
        variant="h1"
        sx={{ fontSize: { xs: 14, md: 24 }, color: Colors.secondary }}
      >
        PORTFOLIO
      </Typography>
    </Box>
  );
};
