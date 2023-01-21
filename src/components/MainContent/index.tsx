import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import BestProjects from "./BestProjects";
import Intro from "./Intro";

const MainContent = () => {
  const screenBiggerThan1020 = useMediaQuery("(min-width: 1020px)");
  const screenBiggerThan1400 = useMediaQuery("(min-width: 1400px)");

  return (
    <Box
      component="main"
      sx={{
        ml: "auto",
        pt: screenBiggerThan1400 ? 6.2 : screenBiggerThan1020 ? 6 : 3,
        width: screenBiggerThan1020 ? "50%" : "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "95%",
      }}
    >
      <Intro />
      <BestProjects />
    </Box>
  );
};

export default MainContent;
