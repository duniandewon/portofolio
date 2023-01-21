import { Fragment, MouseEvent, useState } from "react";

import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import useMediaQuery from "@mui/material/useMediaQuery";

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
  const screenBiggerThan1024 = useMediaQuery("(min-width: 1024px)");

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handlePopoverClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <Fragment>
      <Paper
        elevation={8}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          minWidth: screenBiggerThan1024 ? 157 : 225,
          height: screenBiggerThan1024 ? 108 : 250,
          borderRadius: 3,
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
    </Fragment>
  );
};

export default ProjectItem;
