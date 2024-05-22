import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {Github, Linkedin, Mail} from "lucide-react";
import * as React from "react";

export function Socials() {
    return (
        <ul className="flex items-center">
            <li>
                <Link href="https://www.github.com/duniandewon" target="_blank" referrerPolicy="no-referrer"
                      className={buttonVariants({variant: "ghost"})}>
                    <Github size={18}/>
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/duniandeown" target="_blank" referrerPolicy="no-referrer"
                      className={buttonVariants({variant: "ghost"})}>
                    <Linkedin size={18}/>
                </Link>
            </li>
            <li>
                <Link href="mailto:duniandewon@gmail.com" className={buttonVariants({variant: "ghost"})}>
                    <Mail size={18}/>
                </Link>
            </li>
        </ul>
    )
}