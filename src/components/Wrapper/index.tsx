import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import Ornaments from "./Ornaments";
import RibbonH from "./RibbonH";
import RibbonV from "./RibbonV";

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  const screenSmallerThan768 = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        padding: "2rem 3rem",
        position: "relative",
      }}
    >
      {children}
      {screenSmallerThan768 && (
        <>
          <RibbonV />
          <RibbonH />
        </>
      )}
      <Ornaments />
    </Box>
  );
};

export default Wrapper;
