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
            "https://drive.google.com/file/d/1RE23Qs0DahLVxFywueUgon_IfwWbuSTy/view?usp=sharing"
          )
        }
      />
    </Box>
  );
};

Fingerprint.displayName = "FingerprintIcont";
