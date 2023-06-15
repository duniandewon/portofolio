import { Project } from "@prisma/client";

declare module "@prisma/client" {
  interface Project {
    id: number;
    title: string;
    image: string | null;
    content?: { blocks: IPostBlock[]; time: number; version: string };
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
}
