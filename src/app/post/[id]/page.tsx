import {notFound} from "next/navigation";

import prisma from "@/lib/prisma-client";

interface Props {
    params: { id: string };
}

export default async function Post({params: {id}}: Props) {
    const post = await prisma.post.findFirst({where: {id: Number(id)}})

    if (!post) {
        return notFound()
    }

    return <>
        <p>Post id: {post?.id}</p>
        <p>Post title: {post?.title}</p>
    </>
}