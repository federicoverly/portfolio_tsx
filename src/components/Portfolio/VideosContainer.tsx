import { Box } from "@mui/system";
import { videos } from "../../utils/data";
import { Video } from "./Video";

export interface IProps {
  windowSize: WindowSize;
}

export type WindowSize = {
  innerWidth: number;
  innerHeight: number;
};

export const VideosContainer = ({ windowSize }: IProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap",
        flexDirection: windowSize.innerWidth < 500 ? "column" : "row",
      }}
    >
      {videos.map((video, index) => (
        <Video
          key={index}
          title={video.title}
          video={video.video}
          windowSize={windowSize}
        />
      ))}
    </Box>
  );
};

VideosContainer.displayName = "VideosContainer";
