import { prisma } from "@/lib/db";

import ProjectItem from "@/components/ProjectItem";
import ProjectList from "@/components/ProjectsList";
import { IProject } from "@/types";

export default async function Home() {
  const data = (await prisma.project.findMany()) as IProject[];

  const renderProjects = () =>
    data.map((project) => <ProjectItem {...project} key={project.id} />);

  return <ProjectList>{renderProjects()}</ProjectList>;
}
