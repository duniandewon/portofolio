import { Project } from "@prisma/client";

import { prisma } from "@/lib/db";

import ProjectItem from "@/components/ProjectItem";
import ProjectList from "@/components/ProjectsList";

export default async function Home() {
  const data = (await prisma.project.findMany()) as Project[];

  const renderProjects = () =>
    data.map(
      (project) =>
        project.published && <ProjectItem {...project} key={project.id} />
    );

  return <ProjectList>{renderProjects()}</ProjectList>;
}
