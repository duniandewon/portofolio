import { Fragment, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ProjectItem, { IProject } from "./ProjectItem";
import ProjectModal from "./ProjectModal";

const BestProjects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const projectList: IProject[] = [
    {
      id: "my-protofolio",
      title: "My Protofolio",
      description:
        "A simple website created using react with vite to show case my favorite projects and apps I have worked on before.",
      image: "",
      techs: ["React", "TypeScript", "Material UI"],
      srcCode: "https://github.com/duniandewon/protofolio",
      live: "https://venerable-gumption-415796.netlify.app/",
    },
    {
      id: "jex",
      title: "JEX (Jelamprang Expres) FE",
      description:
        "A dashbord for a local logistic business who wanted to monitor how many packages their customers sent, track the packeges, and have monthly reports.",
      techs: [
        "JavaScript",
        "React",
        "React-Router",
        "React-Query",
        "Material UI",
        "Soft UI Dashboard",
      ],
      image: "",
      srcCode: "https://github.com/duniandewon/jlamprangexpress-fe",
      live: "https://benevolent-pithivier-3e3dbd.netlify.app/",
    },
    {
      id: "nhft",
      title: "NikaHanFazTrack",
      description:
        "A simple website to invite people to my wedding online, and have them also send their wished from this website.",
      image: "",
      techs: ["JavaScript", "React", "NextJS", "CSS", "SCSS", "Vercel"],
      srcCode: "https://github.com/duniandewon/nikahanfaztrack",
      live: "https://nikahanfaztrack-dj80dfbkp-duniandewon.vercel.app/",
    },
  ];

  const handleOpenModal = (project: IProject) => {
    setSelectedProject(project);
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  return (
    <Fragment>
      <ProjectModal
        open={openModal}
        onClose={handleCloseModal}
        project={selectedProject}
      />
      <Box>
        <Typography variant="h5" component="p" fontWeight={900}>
          My favorite projects
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            py: 2,
            px: 0.5,
          }}
        >
          {projectList.map((project) => (
            <div key={project.id} onClick={() => handleOpenModal(project)}>
              <ProjectItem project={project} />
            </div>
          ))}
        </Box>
      </Box>
    </Fragment>
  );
};

export default BestProjects;
