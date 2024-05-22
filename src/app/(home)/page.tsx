import Image from "next/image";
import prisma from "@/lib/prisma-client";

export default async function Home() {
    const posts = await prisma.post.findMany()

    return (
        <>
            posts count: {posts.length}
        </>
    );
}
