import { Outlet } from "react-router-dom";
import GithubIcon from "../icons/Github.svg";
import { isMainSite } from "../utilities/url.ts";
import { NavbarItemProps } from "./NavbarItem.tsx";
import Navbar from "./Navbar.tsx";

const NAVBAR_ITEMS: NavbarItemProps[] = [
  {
    id: "projects",
    href: isMainSite() ? "/projects" : "https://curtislarson.dev/projects",
    text: "Projects",
    active: window.location.pathname === "/projects",
  },
  {
    id: "travel",
    href: "https://nomadlist.com/@curtis",
    text: "Travel",
  },
  {
    id: "beers",
    href: "https://beers.curtislarson.dev",
    text: "Beers",
  },
  {
    id: "github",
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
