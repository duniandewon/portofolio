"use client";

import { Project } from "@prisma/client";

import { Container, Thumbnail, Title } from "./styled";
import Image from "next/image";

const ProjectItem = ({ title, image }: Project) => {
  return (
    <Container>
      <Thumbnail>
        <Image src={image!} alt={title} fill style={{objectFit: "cover"}} />
      </Thumbnail>
    </Container>
  );
};

export default ProjectItem;
