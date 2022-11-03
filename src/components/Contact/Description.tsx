import { Box, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Colors } from "../../styles/globalStyles";

export const Description = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        fontFamily="Raleway"
        fontWeight={300}
        textAlign="center"
        sx={{
          color: Colors.secondary,
          fontSize: { xs: 12, md: 18 },
          marginBottom: { xs: 2, md: 3 },
          display: "flex",
          alignItems: "center",
        }}
      >
        Take a look at
        <LinkedInIcon
          onClick={() =>
            window.open("https://www.linkedin.com/in/federicoverly/")
          }
          sx={{
            fontSize: { xs: 12, md: 18 },
            marginLeft: { xs: 1, md: 2 },
            marginRight: { xs: 1, md: 2 },
            cursor: "pointer",
            textAlign: "center",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        />
        <GitHubIcon
          onClick={() => window.open("https://github.com/federicoverly")}
          sx={{
            fontSize: { xs: 12, md: 18 },
            cursor: "pointer",
          }}
        />
      </Typography>

      <Typography
        fontFamily="Raleway"
        fontWeight={300}
        variant="h6"
        textAlign="center"
        sx={{
          color: Colors.secondary,
          fontSize: { xs: 12, md: 18 },
        }}
      >
        You can also email me at: federicoverly@gmail.com
      </Typography>
    </Box>
  );
};

Description.displayName = "ContactDescription";
