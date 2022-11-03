import { Box } from "@mui/system";
import { deploys } from "../../utils/data";
import { Deploy } from "./Deploy";

export const DeploysContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
      {deploys.map((deploy, index) => (
        <Deploy key={index} title={deploy.title} url={deploy.link} />
      ))}
    </Box>
  );
};

DeploysContainer.displayName = "DeploysContainer";
