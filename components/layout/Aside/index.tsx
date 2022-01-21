import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Container, Socials } from "./styles";

const Aside = () => {
  const socials = [
    {
      href: "https://www.github.com/duniandewon",
      icon: <FaGithub />,
    },
    {
      href: "www.linkedin.com/in/mohammad-baragbah",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://www.twitter.com/duniandewon",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.facebook.com/siralpha",
      icon: <FaFacebook />,
    },
  ];
  return (
    <Container>
      <p>logo</p>
      <Socials>
        {socials.map((social) => (
          <a href={social.href} target="_blank">
            {social.icon}
          </a>
        ))}
      </Socials>
    </Container>
  );
};

export default Aside;
