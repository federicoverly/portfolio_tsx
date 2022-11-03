import { Typography } from "@mui/material";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  text: string;
}

export const ButtonAnswer = ({ text }: IProps) => {
  return (
    <Typography
      variant="h5"
      fontFamily="Raleway"
      fontWeight={200}
      sx={{
        fontSize: { xs: 9, md: 18 },
        color: Colors.secondary,
        marginBottom: 1,
        textAlign: "center",
      }}
    >
      {text}
    </Typography>
  );
};

ButtonAnswer.displayName = "ButtonAnswer";
