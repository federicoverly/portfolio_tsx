import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  title: string;
  url: string;
}

export const Deploy = ({ title, url }: IProps) => {
  return (
    <Box>
      <Typography
        fontFamily="Raleway"
        fontWeight={200}
        sx={{
          fontSize: { xs: 9, md: 18 },
          color: Colors.secondary,
          cursor: "pointer",
          marginBottom: 1,
        }}
        onClick={() => window.open(url)}
      >
        {title}
      </Typography>
    </Box>
  );
};

Deploy.displayName = "Deploy";
