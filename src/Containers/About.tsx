import { Box } from "@mui/material";
import { SectionTitle } from "../components/Common/SectionTitle";
import { ButtonsContainer } from "../components/About/ButtonsContainer";
import { Fingerprint } from "../components/About/Fingerprint";

export const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "90vw",
        marginTop: 20,
      }}
    >
      <SectionTitle title="About me" />
      <ButtonsContainer />
      <Fingerprint />
    </Box>
  );
};

About.displayName = "About";
