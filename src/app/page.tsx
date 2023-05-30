import { Project } from "@prisma/client";

import Navbar from "@/components/Navbar";

import { prisma } from "@/lib/db";
import ProjectItem from "@/components/ProjectItem";

export default async function Home() {
  const data: Project[] = await prisma.project.findMany();

  const renderProjects = () =>
    data.map((project) => <ProjectItem {...project} key={project.id} />);

  return (
    <>
      <Navbar />
      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "2rem 1.5rem",
        }}
      >
        {renderProjects()}
      </main>
    </>
  );
}
