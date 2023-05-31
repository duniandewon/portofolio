"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import EditorJS from "@editorjs/editorjs";

import { Project } from "@prisma/client";
import { postPatchSchema } from "@/lib/validation/post";
import { Container, Header, Main, Textarea } from "./styled";

interface Props {
  post: Pick<Project, "id" | "title" | "content" | "published">;
}

const Editor = ({ post }: Props) => {
  const ref = useRef<EditorJS>();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const initEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const List = (await import("@editorjs/list")).default;
    const Image = (await import("@editorjs/image")).default;
    const Code = (await import("@editorjs/code")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;

    const body = postPatchSchema.parse(post);

    if (!ref.current) {
      if (!ref.current) {
        const editor = new EditorJS({
          holder: "editor",
          onReady() {
            ref.current = editor;
          },
          placeholder: "Type here to write your post...",
          inlineToolbar: true,
          data: body.content,
          tools: {
            header: Header,
            linkTool: LinkTool,
            list: List,
            code: Code,
            inlineCode: InlineCode,
            embed: Embed,
            image: Image,
          },
        });
      }
    }
  }, [post]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initEditor();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initEditor]);

  return (
    <Container>
      <Header>
        <button type="button">Back</button>
        <button type="button">save</button>
      </Header>
      <Main>
        <Textarea
          autoFocus
          id="title"
          defaultValue={post.title}
          placeholder="Post title"
          // {...register("title")}
        />
        <div id="editor" className="min-h-[500px]" />
      </Main>
    </Container>
  );
};

export default Editor;
