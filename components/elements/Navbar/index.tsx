import Link from "next/link";
import { FaAddressBook, FaAddressCard, FaPhone } from "react-icons/fa";

import { Container, NavLink } from "./styles";

const Navbar = () => {
  const navItems = [
    {
      href: "/",
      label: "About Me",
      icon: <FaAddressBook size={24} />,
    },
    {
      href: "/resume",
      label: "Resume",
      icon: <FaAddressCard size={24} />,
    },
    {
      href: "/contact-me",
      label: "Contact Me",
      icon: <FaPhone size={24} />,
    },
  ];

  const _renderNavItem = () => {
    return navItems.map((navItem) => (
      <Link href={navItem.href} key={navItem.label}>
        <NavLink>
          {navItem.icon}
        </NavLink>
      </Link>
    ));
  };

  return <Container>{_renderNavItem()}</Container>;
};

export default Navbar;
