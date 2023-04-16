import { Link } from "react-router-dom";

export type NavbarItemProps = {
  text: string;
} & ({ href: string } | { to: string });

export default function NavbarItem(props: NavbarItemProps) {
  const path = "to" in props ? props.to : props.href;
  const isInternaLink = "to" in props;

  const linkItem = (
    <li>
      <span
        class={`w-max btn normal-case active:btn-outline ${
          location.pathname.endsWith(path) ? "btn-outline btn-primary" : "btn-ghost"
        }`}
      >
        {props.text}
      </span>
    </li>
  );

  if (isInternaLink) {
    return <Link to={path}>{linkItem}</Link>;
  } else {
    return <a href={path}>{linkItem}</a>;
  }
}
