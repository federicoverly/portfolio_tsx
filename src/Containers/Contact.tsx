import { Box } from "@mui/material";
import { SectionTitle } from "../components/Common/SectionTitle";
import { Description } from "../components/Contact/Description";

export const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "90vw",
        flexDirection: "column",
        marginBottom: 20,
      }}
    >
      <SectionTitle title="Contact me" />
      <Description />
    </Box>
  );
};

Contact.displayName = "Contact";
