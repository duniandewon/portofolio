import * as z from "zod";

import { postPatchSchema } from "@/lib/validation/post";
import { prisma } from "@/lib/db";

const routeContextSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context);

    const json = await req.json();
    const body = postPatchSchema.parse(json);

    console.log("Content: ", body.content);

    await prisma.project.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return new Response(null, { status: 200 });
  } catch (error) {
    console.log("Update project error: ", error);
    return new Response(null, { status: 500 });
  }
}
