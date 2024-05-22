import * as React from "react";

import {Profile} from "@/components/Profile";
import {Socials} from "@/components/Socials";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="w-screen h-screen overflow-hidden lg:grid grid-cols-[auto_1fr]">
        <aside className="max-lg:border-b-2 lg:border-r-2 py-4 px-8">
            <div className="flex items-center justify-between lg:flex-col gap-4">
                <Profile/>
                <Socials/>
            </div>
        </aside>
        <main className="h-full w-full p-4">
            {children}
        </main>
    </div>
}