"use server"

import prisma from "@/lib/prisma-client";
import {PostUpdateInput} from "@prisma/client";

export async function updatePost(id: number, postUpdateInput: PostUpdateInput) {
    try {
        await prisma.post.update({
            where: {id},
            data: postUpdateInput
        });
    } catch (e) {
        console.log("Update post went wrong: ", e)
    }
}