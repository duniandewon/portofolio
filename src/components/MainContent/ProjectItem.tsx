import { MouseEvent, useState } from "react";

import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

interface Props {
  name: string;
  image?: string;
}

const ProjectItem = ({ name, image }: Props) => {
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
        onClick={() => alert(name)}
        sx={{
          minWidth: { lg: 157, xl: 216 },
          height: { lg: 108, xl: 120 },
          mb: 2,
          backgroundColor: "lightcoral",
          cursor: "pointer"
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
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{name}</Typography>
        
      </Popover>
    </>
  );
};

export default ProjectItem;
