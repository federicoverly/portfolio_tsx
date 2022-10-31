import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../components/Common/SectionTitle";
import { Video } from "../components/Portfolio/Video";
import VideosContainer from "../components/Portfolio/VideosContainer";
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
      <SectionTitle title="Portfolio" />
      <VideosContainer windowSize={windowSize}>
        {videos.map((video, index) => (
          <Video
            key={index}
            title={video.title}
            video={video.video}
            windowSize={windowSize}
          />
        ))}
      </VideosContainer>
    </Box>
  );
};

Portfolio.displayName = "Portfolio";
