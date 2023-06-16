"use client";

import { useRouter } from "next/navigation";

import { useCallback, useEffect, useRef, useState } from "react";

import EditorJS from "@editorjs/editorjs";

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
  Saving,
  Textarea,
} from "./styled";

import "@/styles/editor.css";

interface Props {
  post: Project;
}

const cloudName = "ndewon";

const Editor = ({ post }: Props) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [featuredImage, setFeaturedImage] = useState<string>(post.image || "");
  const [dirty, setDirty] = useState(false);
  const [postTitle, setPostTitle] = useState(post.title);

  const ref = useRef<EditorJS>();

  const router = useRouter();

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
        onChange() {
          setDirty(true);
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

  const handleUpdatehPost = useCallback(
    async (publish = false) => {
      console.log("published: ", publish);
      setIsSaving(true);

      const blocks = await ref.current?.save();

      const res = await fetch(`/api/posts/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postTitle,
          image: featuredImage,
          content: blocks,
          published: publish,
        }),
      });

      setIsSaving(false);
      setDirty(false);

      if (!res?.ok) {
        return console.log("something went wrong!");
      }
    },
    [post.id, featuredImage, postTitle]
  );

  const handleSaveDraft = useCallback(() => {
    handleUpdatehPost();
  }, [handleUpdatehPost]);

  const handlePublish = useCallback(() => {
    handleUpdatehPost(true);
  }, [handleUpdatehPost]);

  const handleUploadImage = async (
    image: File
  ): Promise<string | undefined> => {
    setDirty(true);
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

      setFeaturedImage(data.secure_url);

      return data.secure_url;
    } catch (err) {
      /** @TODO: create an alert */
      console.log("Something went wrong: ", err);
      return;
    }
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

  const PublishButton = useCallback(() => {
    let label;

    if (post.published) {
      label = isSaving ? "updating..." : "update";
    } else {
      label = "publish";
    }

    return (
      <Button
        variant="contained"
        disabled={!dirty || isSaving}
        onClick={handlePublish}
      >
        {label}
      </Button>
    );
  }, [post.published, isSaving, handlePublish, dirty]);

  const renderHeader = () => (
    <Header>
      <EditorButtons>
        <Button
          type="button"
          onClick={handleGoBack}
          style={{ marginInlineEnd: "auto" }}
        >
          Back
        </Button>
        {!post.published && !dirty && (
          <Saving>{isSaving ? "saveing..." : "saved"}</Saving>
        )}
        {!post.published && (
          <Button
            variant="contained"
            disabled={!dirty || isSaving}
            onClick={handleSaveDraft}
          >
            Save Draft
          </Button>
        )}
        <PublishButton />
      </EditorButtons>
    </Header>
  );

  const renderMain = () => (
    <Main>
      <EditorWrapper>
        <Textarea
          autoFocus
          id="title"
          value={postTitle}
          placeholder="Post title"
          name="title"
          onChange={(e) => {
            setPostTitle(e.target.value);
            setDirty(true);
          }}
        />
        <div id="editor" className="min-h-[500px]" />
      </EditorWrapper>
    </Main>
  );

  const renderAside = () => (
    <Aside>
      <Sidebar.Sidebar>
        <Sidebar.Item>
          <Sidebar.Title>Featured Image</Sidebar.Title>
          <Sidebar.Content>
            <FileUploder
              onUpload={handleUploadImage}
              featuredImage={featuredImage}
            />
          </Sidebar.Content>
        </Sidebar.Item>
      </Sidebar.Sidebar>
    </Aside>
  );

  return (
    <Container>
      {renderHeader()}
      {renderMain()}
      {renderAside()}
    </Container>
  );
};

export default Editor;
