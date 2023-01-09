import Box from "@mui/material/Box";

import BestProjects from "./BestProjects";
import Intro from "./Intro";

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{
        ml: "auto",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Intro />
      <BestProjects />
    </Box>
  );
};

export default MainContent;
