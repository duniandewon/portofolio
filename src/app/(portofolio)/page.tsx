import { Project } from "@prisma/client";

import { prisma } from "@/lib/db";
import ProjectItem from "@/components/ProjectItem";

export default async function Home() {
  const data: Project[] = await prisma.project.findMany();

  const renderProjects = () =>
    data.map((project) => <ProjectItem {...project} key={project.id} />);

  return (
    <>
      <main
        style={{
          width: "100%",
          overflowY: "auto",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.2rem",
          padding: "1rem 2rem 0",
        }}
      >
        {renderProjects()}
      </main>
    </>
  );
}
