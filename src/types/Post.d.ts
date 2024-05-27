import {OutputData} from "@editorjs/editorjs";

interface IParagraph {
    text: string;
}

interface IHeader extends IParagraph {
    level: number;
}

interface IList {
    items: string[];
    style: "ordered" | "unordered";
}

export type Block =
    | {
    type: "paragraph";
    id: string;
    data: IParagraph;
}
    | {
    type: "header";
    id: string;
    data: IHeader;
}
    | { type: "list"; id: string; data: IList };

type Content = { blocks: IPostBlock[]; };

declare module "@prisma/client" {
    interface Post {
        id: number;
        title: string;
        image: string | null;
        content?: Content;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }

    interface PostUpdateInput {
        title: string;
        image?: string;
        content?: Content;
        published: boolean;
    }
}