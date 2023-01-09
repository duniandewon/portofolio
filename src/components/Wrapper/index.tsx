import Box from "@mui/material/Box";

import Ornaments from "./Ornaments";
import RibbonH from "./RibbonH";
import RibbonV from "./RibbonV";

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
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
      <RibbonV />
      <RibbonH />
      <Ornaments/>
    </Box>
  );
};

export default Wrapper;
