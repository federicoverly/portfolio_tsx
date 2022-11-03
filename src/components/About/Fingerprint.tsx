import { Box } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Colors } from "../../styles/globalStyles";

export const Fingerprint = () => {
  return (
    <Box>
      <FingerprintIcon
        sx={{
          color: Colors.secondary,
          cursor: "pointer",
          marginTop: 2,
          fontSize: { sm: 20, md: 40 },
        }}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1-nGG0JOmzSF5Lz5Sg1Ky_HNGU6jpZFOf/view?usp=sharing"
          )
        }
      />
    </Box>
  );
};

Fingerprint.displayName = "FingerprintIcont";
