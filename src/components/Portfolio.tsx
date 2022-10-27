import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Colors } from "../styles/globalStyles";
import { videos } from "../utils/data";

export const Portfolio = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <Box
      id="portfolio"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "90vw",
      }}
    >
      <Typography
        fontFamily="Raleway"
        fontWeight={800}
        variant="h1"
        sx={{
          fontSize: { xs: 14, md: 24 },
          color: Colors.secondary,
          marginBottom: 10,
        }}
      >
        PORTFOLIO
      </Typography>
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
        {videos.map((video, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 4,
              flexDirection: "column",
            }}
          >
            <Typography
              fontFamily="Raleway"
              fontWeight={400}
              variant="body2"
              sx={{
                fontSize: { xs: 12, md: 18 },
                color: Colors.secondary,
                marginBottom: 4,
              }}
            >
              {video.title}
            </Typography>
            <video
              src={video.video}
              width={windowSize.innerWidth < 500 ? "200" : "550"}
              height="250"
              controls
              autoPlay={false}
              title={video.title}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
