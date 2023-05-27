"use client";

import React from "react";
import { Avatar, Container, Info, Name, Role } from "./styled";

const Profile = () => {
  return (
    <Container>
      <Avatar />
      <Info>
        <Name>Mohammad Baragbah</Name>
        <Role>Frontend Developer</Role>
      </Info>
    </Container>
  );
};

export default Profile;
