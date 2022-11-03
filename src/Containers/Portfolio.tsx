import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { SectionSubtitle } from "../components/Common/SectionSubtitle";
import { SectionTitle } from "../components/Common/SectionTitle";
import { DeploysContainer } from "../components/Portfolio/DeploysContainer";
import { Video } from "../components/Portfolio/Video";
import { VideosContainer } from "../components/Portfolio/VideosContainer";
import { deploys, videos } from "../utils/data";
import { Deploy } from "../components/Portfolio/Deploy";

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
            videoKey={index}
            title={video.title}
            video={video.video}
            windowSize={windowSize}
          />
        ))}
      </VideosContainer>
      <SectionSubtitle title="Try some live projects" />
      <DeploysContainer>
        {deploys.map((deploy, index) => (
          <Deploy deployKey={index} title={deploy.title} url={deploy.link} />
        ))}
      </DeploysContainer>
    </Box>
  );
};

Portfolio.displayName = "Portfolio";
