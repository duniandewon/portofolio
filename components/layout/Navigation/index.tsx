import Link from "next/link";

import { Container, NavItem } from "./styles";

const Navigation = () => {
  const navs = [
    {
      href: "/",
      label: "home",
    },
    {
      href: "/my-works",
      label: "my works",
    },
    {
      href: "/contact-me",
      label: "contact me",
    },
  ];

  return (
    <Container>
      {navs.map((nav) => (
        <Link href={nav.href} key={nav.label}>
          <NavItem>{nav.label}</NavItem>
        </Link>
      ))}
    </Container>
  );
};

export default Navigation;
