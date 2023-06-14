"use client";

import { useRouter } from "next/navigation";

import { useCallback, useEffect, useRef, useState } from "react";

import EditorJS from "@editorjs/editorjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Project } from "@prisma/client";

import { postPatchSchema } from "@/lib/validation/post";

import { Button, Sidebar } from "../UI";

import FileUploder from "../FileUploader";

import {
  Aside,
  Container,
  EditorButtons,
  EditorWrapper,
  Header,
  Main,
  Textarea,
} from "./styled";

import "@/styles/editor.css";

interface Props {
  // post: Pick<Project, "id" | "title" | "content" | "image" | "published">;
  post: Project;
}

type FormData = z.infer<typeof postPatchSchema>;

const cloudName = "ndewon";

const Editor = ({ post }: Props) => {
  const ref = useRef<EditorJS>();

  const router = useRouter();

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  });

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [featuredImage, setFeaturedImage] = useState(post.image);

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

  const handleUpdatehPost = async (data: FormData) => {
    setIsSaving(true);

    const blocks = await ref.current?.save();

    const res = await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        image: featuredImage,
        content: blocks,
      }),
    });

    setIsSaving(false);

    if (!res?.ok) {
      return console.log("something went wrong!");
    }

    router.refresh();
  };

  const handleUploadImage = async (
    image: File
  ): Promise<string | undefined> => {
    // upload to cloaudinary
    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", "portofolio");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.error) {
        /** @TODO: create an alert */
        console.log(data.error.message);
        return;
      }

      setFeaturedImage(data.secure_url)

      return data.secure_url;
    } catch (err) {
      /** @TODO: create an alert */
      console.log("Something went wrong: ", err);
      return;
    }

    // update post with new featured image
    // const res = await fetch(`/api/posts/${post.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ image: "" }),
    // });
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
    <Container onSubmit={handleSubmit(handleUpdatehPost)}>
      <Header>
        <EditorButtons>
          <Button
            type="button"
            onClick={handleGoBack}
            style={{ marginInlineEnd: "auto" }}
          >
            Back
          </Button>
          <Button variant="contained">Save Draft</Button>
          <Button variant="contained">publish</Button>
        </EditorButtons>
      </Header>
      <Main>
        <EditorWrapper>
          <Textarea
            autoFocus
            id="title"
            defaultValue={post.title}
            placeholder="Post title"
            {...register("title")}
          />
          <div id="editor" className="min-h-[500px]" />
        </EditorWrapper>
      </Main>
      <Aside>
        <Sidebar.Sidebar>
          <Sidebar.Item>
            <Sidebar.Title>Featured Image</Sidebar.Title>
            <Sidebar.Content>
              <FileUploder onUpload={handleUploadImage} featuredImage={featuredImage} />
            </Sidebar.Content>
          </Sidebar.Item>
        </Sidebar.Sidebar>
      </Aside>
    </Container>
  );
};

export default Editor;
