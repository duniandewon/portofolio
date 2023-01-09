import Box from "@mui/material/Box";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Navbar = () => {
  const socialLinks = [
    {
      link: "githutb",
      icon: <GitHubIcon />,
    },
    {
      link: "linkedin",
      icon: <LinkedInIcon />,
    },
    {
      link: "twwitter",
      icon: <TwitterIcon />,
    }
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
            {sl.icon}
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
