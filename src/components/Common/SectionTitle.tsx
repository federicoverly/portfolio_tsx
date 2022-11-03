import { Typography } from "@mui/material";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  title: string;
}

export const SectionTitle = ({ title }: IProps) => {
  return (
    <Typography
      fontFamily="Raleway"
      fontWeight={800}
      variant="h1"
      textAlign="center"
      sx={{
        fontSize: { xs: 14, md: 24 },
        color: Colors.secondary,
        marginBottom: { xs: 3, md: 10 },
        marginTop: { xs: 3, md: 10 },
        textTransform: "uppercase",
      }}
    >
      {title}
    </Typography>
  );
};

SectionTitle.displayName = "SectionTitle";
