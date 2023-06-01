"use client";

import { Avatar } from "../UI";

import { Container, Info, Name, Role } from "./styled";

const Profile = () => {
  return (
    <Container>
      <Avatar src="/images/pp.jpg" alt="profile picture" />
      <Info>
        <Name>Mohammad Baragbah</Name>
        <Role>Frontend Developer</Role>
      </Info>
    </Container>
  );
};

export default Profile;
