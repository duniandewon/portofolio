import { MouseEvent, useState } from "react";

import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export interface IProject {
  id: string;
  title: string;
  description: string;
  techs: string[];
  image: string;
  srcCode?: string;
  live?: string;
}

interface Props {
  project: IProject;
}

const ProjectItem = ({ project: { title, image } }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handlePopoverClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <>
      <Paper
        elevation={8}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          minWidth: { lg: 157, xl: 216 },
          height: { lg: 108, xl: 120 },
          mb: 2,
          cursor: "pointer",
        }}
      >
        {/* TODO: Project image */}
      </Paper>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{title}</Typography>
      </Popover>
    </>
  );
};

export default ProjectItem;
