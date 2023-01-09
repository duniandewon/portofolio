import { Fragment } from "react";

import Box from "@mui/material/Box";

import OrnamentLeft from "../../assets/OrnamentLeft";
import OrnamentTop from "../../assets/OrnamentTop";

const Ornaments = () => {
  return (
    <Fragment>
      <Box sx={{ position: "absolute", top: -318, left:0, zIndex: -3 }}>
        <OrnamentTop />
      </Box>
      <Box sx={{ position: "absolute", top: 0, left: -585, zIndex: -3 }}>
        <OrnamentLeft height="80vh" />
      </Box>
    </Fragment>
  );
};

export default Ornaments;
