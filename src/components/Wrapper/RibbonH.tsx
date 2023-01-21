import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";

const RibbonH = () => {
  const screenBiggerThan1020 = useMediaQuery("(min-width: 1020px)");

  return (
    <Box
      sx={{
        width: "100vw",
        height: 76,
        position: "absolute",
        left: 0,
        top: screenBiggerThan1020 ? 350 : 211,
        zIndex: -1,
        backgroundColor: "#FFF500",
      }}
    />
  );
};

export default RibbonH;
