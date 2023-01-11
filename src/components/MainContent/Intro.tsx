import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Intro = () => {
  return (
    <Box sx={{ pt: { lg: 15, xl: 23 } }}>
      <Typography variant="h6">Hi there,</Typography>
      <Typography variant="h2" fontSize={{ lg: 80, xl: 100 }} fontWeight={900}>
        I am Abolfaz
      </Typography>
      <Typography variant="h6" fontSize={{ lg: 34, xl: 40 }}>I create websites and apps</Typography>
      <Button variant="contained" sx={{ mt: 3 }} size="large">
        Contact Me
      </Button>
    </Box>
  );
};

export default Intro;
