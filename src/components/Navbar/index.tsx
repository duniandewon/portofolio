"use client";

import Profile from "@/components/Profile";
import { Container } from "./styled";
import Socials from "../socials";

const Navbar = () => {
  return (
    <Container>
      <Profile />
      <Socials />
    </Container>
  );
};

export default Navbar;
