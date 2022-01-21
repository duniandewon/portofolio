import Link from "next/link";
import {useRouter} from 'next/router';

import { Container, NavItem } from "./styles";


const Navigation = () => {
  const router = useRouter();

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
          <NavItem active={nav.href === router.pathname}>{nav.label}</NavItem>
        </Link>
      ))}
    </Container>
  );
};

export default Navigation;
