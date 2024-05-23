"use server"

import {redirect} from "next/navigation";
import {type Post} from "@prisma/client";

import prisma from "@/lib/prisma-client";

export async function createNewPost() {
    let post: Post | null = null

    try {
        post = await prisma.post.create({
            data: {
                title: "Untitled Project"
            }
        })
    } catch (e) {
        console.log("Something went wrong:", e)
    }

    if (post) {
        redirect(`/post/${post.id}`)
    }
}