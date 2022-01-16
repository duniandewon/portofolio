import { SocialsList } from "./styles";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Socials = () => {
  const socials = [
    {
      icon: <FaFacebookSquare size={18} color="#064663" />,
      link: "https:www.facebook.com",
    },
    {
      icon: <FaInstagramSquare size={18} color="#064663" />,
      link: "https:www.instagram.com",
    },
    {
      icon: <FaTwitterSquare size={18} color="#064663" />,
      link: "https:www.twitter.com",
    },
    {
      icon: <FaGithubSquare size={18} color="#064663" />,
      link: "https:www.github.com",
    },
    {
      icon: <FaLinkedin size={18} color="#064663" />,
      link: "https:www.linkedin.com",
    },
  ];
  return (
    <SocialsList>
      {socials.map((social) => (
        <a href={social.link} target="_blank" key={social.link}>
          {social.icon}
        </a>
      ))}
    </SocialsList>
  );
};

export default Socials;
