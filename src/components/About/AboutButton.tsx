import { Button, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  text: string;
  onClick: Dispatch<SetStateAction<boolean>>;
  value: boolean;
}

export const AboutButton = ({ text, onClick, value }: IProps) => {
  return (
    <Button
      variant="outlined"
      onClick={() => onClick(value)}
      sx={{
        backgroundColor: Colors.primary,
        color: Colors.secondary,
        borderColor: Colors.secondary,
        margin: 2,
        height: 80,
        width: { xs: 300, md: 600 },
      }}
    >
      <Typography
        variant="h5"
        fontFamily="Raleway"
        fontWeight={200}
        sx={{
          fontSize: { xs: 12, md: 20 },
          color: Colors.secondary,
          marginBottom: 1,
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};

AboutButton.displayName = "AboutButton";
