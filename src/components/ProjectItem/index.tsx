"use client";

import { createElement } from "react";
import Image from "next/image";

import { Project } from "@prisma/client";

import { IPostBlock } from "@/types";

import { Container, Date, Body, Thumbnail, Title } from "./styled";

const ProjectItem = (project: Project) => {
  const renderContent = () => {
    return project.content?.blocks.map(({ type, data }: IPostBlock) => {
      switch (type) {
        case "header":
          return createElement(`h${data.level}`, null, data.text);

        case "list":
          const items = data.items.map((item) => (
            <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
          ));
          return data.style === "ordered" ? <ol>{items}</ol> : <ul>{items}</ul>;
        default:
          return <p dangerouslySetInnerHTML={{ __html: data.text }} />;
      }
    });
  };

  return (
    <Container>
      {project.image && (
        <Thumbnail>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 2740px) calc(15.77vw - 62px), (min-width: 2340px) calc(18.95vw - 72px), (min-width: 1920px) calc(23.75vw - 88px), (min-width: 1520px) calc(31.84vw - 115px), (min-width: 1120px) calc(47.63vw - 161px), (min-width: 1040px) calc(95vw - 304px), (min-width: 800px) 47.73vw, (min-width: 400px) 95vw, calc(13.75vw + 309px)"
          />
        </Thumbnail>
      )}
      <Body>
        <Title>{project.title}</Title>
        <Date format="DD/MM/YYYY">{project.createdAt}</Date>
        {renderContent()}
      </Body>
    </Container>
  );
};

export default ProjectItem;
