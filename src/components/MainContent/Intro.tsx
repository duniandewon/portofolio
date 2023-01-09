import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Intro = () => {
  return (
    <Box 
    sx={{ pt: { lg: 27, xl: 38 } }}
    >
      <Typography variant="h6">Hi there,</Typography>
      <Typography variant="h2" fontWeight={900}>
        I am Abolfaz
      </Typography>
      <Typography variant="h6">I create websites and apps</Typography>
      <Button variant="contained" sx={{ mt: 2 }}>
        Contact Me
      </Button>
    </Box>
  );
};

export default Intro;
