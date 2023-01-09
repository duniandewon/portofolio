import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SideBar = () => {
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
        gap: {
          lg: 10,
          xl: 20
        },
        position: "absolute",
        transform: "rotate(-90deg) translateY(-50%)",
        top: "50%",
        left: {
          lg: -210,
          xl: -290
        },
      }}
    >
      {personalInfo.map((pi) => (
        <Box>
          <Typography variant="h4" component="h5">
            {pi.title}
          </Typography>
          <Typography variant="body1" component="h5">
            {pi.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SideBar;
