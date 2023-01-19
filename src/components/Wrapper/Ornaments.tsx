import Box from "@mui/material/Box";

import OrnamentLeft from "./OrnamentLeft";
import OrnamentTop from "./OrnamentTop";

const Ornaments = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -3,
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", top: -318, left: 0 }}>
        <OrnamentTop />
      </Box>
      <Box sx={{ position: "absolute", top: 0, left: -585 }}>
        <OrnamentLeft height="80vh" />
      </Box>
    </Box>
  );
};

export default Ornaments;
