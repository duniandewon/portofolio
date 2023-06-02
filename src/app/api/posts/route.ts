import * as z from "zod";

import { prisma } from "@/lib/db";

const postCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
});

export async function GET() {
  try {
    const projects = await prisma.project.findMany();

    return new Response(JSON.stringify(projects));
  } catch (error) {
    console.log("Get projects error: ", error);
    return new Response(null, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = postCreateSchema.parse(json);

    const projects = await prisma.project.create({
      data: {
        title: body.title,
        content: body.content,
      },
      select: {
        id: true,
      },
    });

    return new Response(JSON.stringify(projects));
  } catch (error) {
    console.log("Create project error: ", error);
    return new Response(null, { status: 500 });
  }
}
