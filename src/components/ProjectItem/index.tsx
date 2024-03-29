"use client";

import { createElement } from "react";
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
      <Body>
        <Date format="DD/MM/YYYY">{project.createdAt}</Date>
        <Title>{project.title}</Title>
        {renderContent()}
      </Body>
    </Container>
  );
};

export default ProjectItem;
