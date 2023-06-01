"use client";

import Link from "next/link";

import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

import Profile from "@/components/Profile";

import { Container, Socials } from "./styled";

const Navbar = () => {
  return (
    <Container>
      <Profile />
      <Socials>
        <Link href="mailto:duniandewon@gmail.com">
          <FaEnvelope color="#fff" size="20px" />
        </Link>
        <Link
          href="https://www.github.com/duniandewon"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <FaGithub color="#fff" size="20px" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/duniandeown/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <FaLinkedin color="#fff" size="20px" />
        </Link>
      </Socials>
    </Container>
  );
};

export default Navbar;
