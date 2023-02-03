import { Outlet } from "react-router-dom";
import Navbar, { NavbarItem } from "../packages/components/src/Navbar";

const NAVBAR_ITEMS: NavbarItem[] = [
  { text: "Projects", to: "/projects" },
  // { text: "Blog", href: "https://blog.curtislarson.dev" },
  { text: "Beers", href: "https://beers.curtislarson.dev" },
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
