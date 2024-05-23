import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export function Profile() {
    return (
        <div className="flex items-center gap-4 lg:flex-col">
            <Avatar className="lg:w-20 lg:h-20">
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>MB</AvatarFallback>
            </Avatar>
            <div className="lg:text-center">
                <h2>Mohammad Baragbah</h2>
                <p className="text-sm text-foreground/70">Frontend Developer</p>
            </div>
        </div>
    )
}