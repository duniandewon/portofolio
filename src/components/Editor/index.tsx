"use client"

import {useCallback, useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";

import {ChevronLeft} from "lucide-react";
import {Post, PostUpdateInput} from "@prisma/client";

import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
// @ts-ignore
import List from "@editorjs/list";

import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

import './editor.css'

interface Props {
    post: Post,
    updatePost: (id: number, postUpdateInput: PostUpdateInput) => void
}

export default function Editor(props: Props) {
    const {updatePost, post} = props;

    const ref = useRef<EditorJS>();
    const isFirsLoad = useRef(true)

    const [title, setTitle] = useState(post.title)

    const router = useRouter()

    const onClickBack = () => {
        router.back()
    }

    const handleSaveEditor = async () => {
        const content = await ref.current?.save()

        if (content) {
            updatePost(post.id, {
                title,
                content,
                published: false,
            })
        } else {
            console.log("Did not save!")
        }
    }

    const initEditor = useCallback(() => {
        if (ref.current) {
            return
        }

        const editor = new EditorJS({
            holder: "editorjs",
            onReady() {
                ref.current = editor
            },
            async onChange() {
            },
            placeholder: "Type here to write your post...",
            inlineToolbar: true,
            data: post.content || undefined,
            tools: {
                header: Header,
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }

                }
            }
        })
    }, [post.content])

    useEffect(() => {
        if (isFirsLoad.current) {
            initEditor()
        }

        isFirsLoad.current = false

        return () => {
            ref.current?.destroy();
            ref.current = undefined;
        }
    }, [initEditor])

    return (
        <div className="grid grid-cols-[1fr_auto] grid-rows-[min-content] h-screen w-screen overflow-hidden">
            <header className="col-span-2 p-4 flex items-center gap-4 border-b-2">
                <Button variant="link" className="mr-auto p-0" onClick={onClickBack}>
                    <ChevronLeft size={16} className="mr-2"/>
                    Go Back
                </Button>
                <Button variant="outline" onClick={handleSaveEditor}>
                    Save
                </Button>
                <Button>Publish</Button>
            </header>
            <main className="w-full h-full overflow-y-auto p-8">
                <div className="max-w-2xl mx-auto">
                    <Textarea value={title} onChange={e => {
                        setTitle(e.target.value)
                    }}/>
                    <div id='editorjs'></div>
                </div>
            </main>
            <aside className="border-l-2 p-8">sidebar</aside>
        </div>
    );
}