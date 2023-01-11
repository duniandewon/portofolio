import Box from "@mui/material/Box";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "@mui/material";

const Navbar = () => {
  const socialLinks = [
    {
      link: "https://www.github.com/duniandewon",
      icon: <GitHubIcon />,
    },
    {
      link: "https://www.linkedin.com/in/duniandeown",
      icon: <LinkedInIcon />,
    },
    {
      link: "https://www.twitter.com/duniandewon",
      icon: <TwitterIcon />,
    },
  ];

  const SocialLinks = () => {
    return (
      <Box
        component="ul"
        sx={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          gap: 5,
          padding: 0,
          margin: 0,
          gridArea: "navbar",
        }}
      >
        {socialLinks.map((sl) => (
          <Box key={sl.link} component="li">
            <Link href={sl.link} target="_blank" color="#000">{sl.icon}</Link>
          </Box>
        ))}
      </Box>
    );
  };
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>logo</div>
      {SocialLinks()}
    </Box>
  );
};

export default Navbar;
