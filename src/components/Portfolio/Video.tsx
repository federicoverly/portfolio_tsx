import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  key: number;
  title: string;
  video: string;
  windowSize: WindowSize;
}

export type WindowSize = {
  innerWidth: number;
  innerHeight: number;
};

export const Video = ({ key, title, video, windowSize }: IProps) => {
  return (
    <Box
      key={key}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 4,
        flexDirection: "column",
      }}
    >
      <Typography
        fontFamily="Raleway"
        fontWeight={400}
        variant="body2"
        sx={{
          fontSize: { xs: 12, md: 18 },
          color: Colors.secondary,
          marginBottom: 4,
        }}
      >
        {title}
      </Typography>
      <video
        src={video}
        width={windowSize.innerWidth < 500 ? "200" : "550"}
        height="250"
        controls
        autoPlay={false}
        title={title}
      />
    </Box>
  );
};

Video.displayName = "Video";
