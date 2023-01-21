import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import useMediaQuery from "@mui/material/useMediaQuery";

const SideBar = () => {
  const screenBiggerThan1020 = useMediaQuery("(min-width: 1020px)");
  const screenBiggerThan1400 = useMediaQuery("(min-width: 1400px)");

  const personalInfo = [
    {
      title: "Email",
      text: "duniandewon@gmail.com",
    },
    {
      title: "Phone",
      text: "+6285718520582",
    },
    {
      title: "Location",
      text: "Jakarta, Indonesia",
    },
  ];

  return (
    <Box
      component="aside"
      sx={{
        gridArea: "sidebar",
        display: "flex",
        justifyContent: screenBiggerThan1020 ? "center" : "space-between",
        gap: screenBiggerThan1400 ? 10 : screenBiggerThan1020 ? 20 : 0,
        position: screenBiggerThan1020 ? "absolute" : "initial",
        top: screenBiggerThan1400 ? 480 : screenBiggerThan1020 ? 460 : 0,
        left: screenBiggerThan1400 ? -330 : screenBiggerThan1020 ? -290 : 0,
        transform: screenBiggerThan1020
          ? "rotate(-90deg) translateY(-50%)"
          : "initial",
        mb: 2.5,
      }}
    >
      {personalInfo.map((pi) => (
        <Box key={pi.title}>
          {screenBiggerThan1020 ? (
            <Typography
              variant="h4"
              component="h5"
              fontWeight={900}
              fontSize={
                screenBiggerThan1400 ? 25 : screenBiggerThan1020 ? 15 : 0
              }
            >
              {pi.title}
            </Typography>
          ) : null}
          <Typography
            variant="h5"
            component="p"
            fontSize={
              screenBiggerThan1400 ? 25 : screenBiggerThan1020 ? 15 : 11
            }
          >
            {pi.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SideBar;
