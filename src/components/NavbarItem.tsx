import { Link } from "react-router-dom";

export type NavbarItemProps = {
  text: string;
} & ({ href: string } | { to: string });

export default function NavbarItem(props: NavbarItemProps) {
  const path = "to" in props ? props.to : props.href;
  const isInternaLink = "to" in props;

  return (
    <li>
      <span
        class={`btn normal-case active:btn-outline ${
          location.pathname.endsWith(path) ? "btn-outline btn-primary" : "btn-ghost"
        }`}
      >
        {isInternaLink ? <Link to={path}>{props.text}</Link> : <a href={path}>{props.text}</a>}
      </span>
    </li>
  );
}
