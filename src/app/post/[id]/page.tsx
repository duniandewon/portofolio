import {notFound} from "next/navigation";
import {Post} from "@prisma/client";

import Editor from "@/components/Editor";

import prisma from "@/lib/prisma-client";

import {updatePost} from "./actions";

interface Props {
    params: { id: string };
}

export default async function PostEditor({params: {id}}: Props) {
    const post = (await prisma.post.findFirst({where: {id: Number(id)}})) as Post

    if (!post) {
        return notFound()
    }

    return (
        <Editor updatePost={updatePost} post={post}/>
    )
}