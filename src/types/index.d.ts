import { Project } from "@prisma/client";

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

export type IPostBlock =
  | {
      type: "parapraph";
      id: string;
      data: IParagraph;
    }
  | {
      type: "header";
      id: string;
      data: IHeader;
    }
  | { type: "list"; id: string; data: IList };
