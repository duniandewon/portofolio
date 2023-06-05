"use client";

import { useRouter } from "next/navigation";

import { useCallback, useEffect, useRef, useState } from "react";

import EditorJS from "@editorjs/editorjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Project } from "@prisma/client";

import { postPatchSchema } from "@/lib/validation/post";

import { Button } from "../UI";

import { Container, Header, Main, Textarea } from "./styled";

import "@/styles/editor.css";

interface Props {
  post: Pick<Project, "id" | "title" | "content" | "published">;
}

type FormData = z.infer<typeof postPatchSchema>;

const Editor = ({ post }: Props) => {
  const ref = useRef<EditorJS>();

  const router = useRouter();

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  });

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const initEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const List = (await import("@editorjs/list")).default;
    const Code = (await import("@editorjs/code")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;

    const body = postPatchSchema.parse(post);

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
        },
      });
    }
  }, [post]);

  const handleGoBack = () => router.push("/bait");

  const handlePublishPost = async (data: FormData) => {
    setIsSaving(true);

    const blocks = await ref.current?.save();

    const res = await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        content: blocks,
      }),
    });

    setIsSaving(false);

    if (!res?.ok) {
      return console.log("something went wrong!");
    }

    router.refresh();

    router.push("/bait");
  };

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
    <form onSubmit={handleSubmit(handlePublishPost)}>
      <Container>
        <Header>
          <Button type="button" onClick={handleGoBack}>
            Back
          </Button>
          <Button variant="contained" type="submit">
            publish
          </Button>
        </Header>
        <Main>
          <Textarea
            autoFocus
            id="title"
            defaultValue={post.title}
            placeholder="Post title"
            {...register("title")}
          />
          <div id="editor" className="min-h-[500px]" />
        </Main>
      </Container>
    </form>
  );
};

export default Editor;
