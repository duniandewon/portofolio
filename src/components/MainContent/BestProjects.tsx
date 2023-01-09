import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProjectItem from "./ProjectItem";

const BestProjects = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const projectsLkist = [
    "My Portofolio",
    "JEX (Jelamprang Expres)",
    "NikahanFazTrack",
  ];

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="body1" fontWeight={900}>
          My favorite projects
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
        }}
      >
        {projectsLkist.map((project) => (
          <ProjectItem key={project} name={project} />
        ))}
      </Box>
    </Box>
  );
};

export default BestProjects;
