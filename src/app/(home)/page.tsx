import {Plus} from "lucide-react";

import prisma from "@/lib/prisma-client";

import {createNewPost} from "@/app/(home)/actions";

export default async function Home() {
    const posts = await prisma.post.findMany()

    return (
        <>
            posts count: {posts.length}
            <form action={createNewPost}>
                <button
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center absolute bottom-5 right-5">
                    <Plus size={24}/>
                </button>
            </form>

        </>
    );
}
