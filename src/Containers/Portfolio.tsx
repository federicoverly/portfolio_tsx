import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { SectionSubtitle } from "../components/Common/SectionSubtitle";
import { SectionTitle } from "../components/Common/SectionTitle";
import { DeploysContainer } from "../components/Portfolio/DeploysContainer";
import { VideosContainer } from "../components/Portfolio/VideosContainer";

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
      <VideosContainer windowSize={windowSize} />
      <SectionSubtitle title="Try some live projects" />
      <DeploysContainer />
    </Box>
  );
};

Portfolio.displayName = "Portfolio";
