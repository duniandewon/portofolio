import Link from "next/link";

import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

import { Container } from "./styled";

const Socials = () => {
  return (
    <Container>
      <Link href="mailto:duniandewon@gmail.com">
        <FaEnvelope color="#000" size="20px" />
      </Link>
      <Link
        href="https://www.github.com/duniandewon"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <FaGithub color="#000" size="20px" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/duniandeown/"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <FaLinkedin color="#000" size="20px" />
      </Link>
    </Container>
  );
};

export default Socials;
