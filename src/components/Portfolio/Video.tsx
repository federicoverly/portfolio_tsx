import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  videoKey: number;
  title: string;
  video: string;
  windowSize: WindowSize;
}

export type WindowSize = {
  innerWidth: number;
  innerHeight: number;
};

export const Video = ({ videoKey, title, video, windowSize }: IProps) => {
  return (
    <Box
      key={videoKey}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: { xs: 2, md: 4 },
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
          marginBottom: { xs: 2, md: 4 },
        }}
      >
        {title}
      </Typography>
      <video
        src={video}
        width={windowSize.innerWidth < 500 ? "300" : "550"}
        height={windowSize.innerWidth < 500 ? "200" : "250"}
        controls
        autoPlay={false}
        title={title}
      />
    </Box>
  );
};

Video.displayName = "Video";
