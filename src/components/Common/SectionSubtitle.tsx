import { Typography } from "@mui/material";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  title: string;
}

export const SectionSubtitle = ({ title }: IProps) => {
  return (
    <Typography
      fontFamily="Raleway"
      fontWeight={600}
      variant="h4"
      sx={{
        fontSize: { xs: 10, md: 20 },
        color: Colors.secondary,
        marginBottom: 3,
        textTransform: "uppercase",
      }}
    >
      {title}
    </Typography>
  );
};

SectionSubtitle.displayName = "SectionSubtitle";
