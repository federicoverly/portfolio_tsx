import { Box } from "@mui/material";
import { useState } from "react";
import { AboutButton } from "./AboutButton";
import { ButtonAnswer } from "./ButtonAnswer";

export const ButtonsContainer = () => {
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: { xs: 300, md: 600 },
      }}
    >
      <AboutButton
        text="What are my qualifications?"
        onClick={setOpen1}
        value={!open1}
      />
      {open1 && (
        <ButtonAnswer text=" I have taken certified courses in React JS, React Native, Python, Django, and Node JS" />
      )}
      <AboutButton
        text="Which is my developer experience?"
        onClick={setOpen2}
        value={!open2}
      />
      {open2 && (
        <ButtonAnswer
          text="I am working as a Frontend developer for Hydrogrid. Before, I have worked for the Ianu team as a freelance Frontend developer
        both for React and React Native. I am also a React JS coordinator
        and tutor at CoderHouse as well!"
        />
      )}
      <AboutButton
        text="What can I do for you?"
        onClick={setOpen3}
        value={!open3}
      />
      {open3 && (
        <ButtonAnswer text="If you are looking to develope a website or a phone app, well that's me!" />
      )}
    </Box>
  );
};

ButtonsContainer.displayName = "ButtonsContainer";
