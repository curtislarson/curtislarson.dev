import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { NavbarItemProps } from "./components/NavbarItem";
import GithubIcon from "./icons/Github.svg";

const NAVBAR_ITEMS: NavbarItemProps[] = [
  { href: "https://curtislarson.dev/projects", text: "Projects" },
  {
    href: "https://nomadlist.com/@curtis",
    text: "Travel",
  },
  {
    href: "https://beers.curtislarson.dev",
    text: "Beers",
    active: true,
  },
  {
    href: "https://github.com/curtislarson",
    image: GithubIcon,
    align: "right",
    tooltip: "GitHub",
  },
];

export default function Layout() {
  return (
    <div>
      <Navbar
        logo={new URL("../public/quack.png", import.meta.url).pathname}
        title="curtislarson.dev"
        href="/"
        items={NAVBAR_ITEMS}
      />
      <Outlet />
    </div>
  );
}
