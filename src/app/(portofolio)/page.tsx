import { Project } from "@prisma/client";

import { prisma } from "@/lib/db";

import ProjectItem from "@/components/ProjectItem";
import ProjectList from "@/components/ProjectsList";

export default async function Home() {
  const data: Project[] = await prisma.project.findMany();

  const renderProjects = () =>
    data.map((project) => <ProjectItem {...project} key={project.id} />);

  return <ProjectList>{renderProjects()}</ProjectList>;
}
