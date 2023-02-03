import { Link } from "react-router-dom";

export type NavbarItem = {
  text: string;
} & ({ href: string } | { to: string });

export interface NavbarProps {
  href?: string;
  logo: string;
  title: string;
  items?: NavbarItem[];
}

export default function Navbar(props: NavbarProps) {
  return (
    <div class="navbar bg-base-200">
      <div class="flex-none">
        <a href={props.href ?? "/"} class="btn btn-ghost normal-case text-xl">
          <img src={props.logo} class="w-8 h-8" />
          <span class="ml-5">{props.title}</span>
        </a>
      </div>
      <div className="flex-none">
        {props.items && (
          <ul className="menu menu-horizontal px-1">
            {props.items.map((item) => (
              <li key={item.text}>
                {"href" in item ? <a href={item.href}>{item.text}</a> : <Link to={item.to}>{item.text}</Link>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
