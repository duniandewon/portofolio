import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import CodeIcon from "@mui/icons-material/Code";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import useMediaQuery from "@mui/material/useMediaQuery";

import { IProject } from "./ProjectItem";

interface Props {
  open: boolean;
  onClose: () => void;
  project: IProject | null;
}
const ProjectModal = ({ open, onClose, project }: Props) => {
  const screenBiggerThan1020 = useMediaQuery("(min-width: 1020px)");

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: screenBiggerThan1020 ? "80%" : "90%",
          height: screenBiggerThan1020 ? "80%" : "90%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
        }}
      >
        <Box
          sx={{
            display: screenBiggerThan1020 ? "flex" : "block",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: screenBiggerThan1020 ? "50%" : "100%",
              height: screenBiggerThan1020 ? "100%" : "35%",
            }}
          >
            {/* TODO: Project Image */}
          </Box>
          <Box
            sx={{
              p: 2,
              width: screenBiggerThan1020 ? "50%" : "100%",
              height: screenBiggerThan1020 ? "100%" : "65%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2" fontWeight={900} fontSize={40}>
              {project?.title}
            </Typography>
            <Typography
              variant="body1"
              fontSize={20}
              sx={{
                my: 2,
                borderRadius: 1,
                width: "80%",
              }}
            >
              {project?.description}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: "auto" }}>
              {project?.techs.map((tech) => (
                <Typography
                  key={tech}
                  variant="body1"
                  sx={{
                    py: 1,
                    px: 2,
                    backgroundColor: "#cdcdcd",
                    borderRadius: 1,
                  }}
                >
                  {tech}
                </Typography>
              ))}
            </Box>
            <Box>
              {project?.srcCode && (
                <Button
                  variant="contained"
                  startIcon={<CodeIcon />}
                  sx={{ mr: 2 }}
                  onClick={() => window.open(project.srcCode, "_blank")}
                >
                  Code
                </Button>
              )}
              {project?.live && (
                <Button
                  variant="contained"
                  startIcon={<PlayArrowIcon />}
                  onClick={() => window.open(project.live, "_blank")}
                >
                  Live
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
