import { Link, useLocation } from "react-router-dom";

export type NavbarItem = {
  text: string;
} & ({ href: string } | { to: string });

export interface NavbarProps {
  logo: string;
  title: string;
  /** @default "/" */
  href?: string;
  items?: NavbarItem[];
}

export default function Navbar(props: NavbarProps) {
  const location = useLocation();

  return (
    <div class="navbar bg-base-200">
      <div class="flex-none">
        <a href={props.href ?? "/"} class="btn-ghost btn text-xl normal-case">
          <img src={props.logo} alt={`${props.title} Logo`} class="h-8 w-8" />
          <span class="ml-5">{props.title}</span>
        </a>
      </div>
      <div class="flex-none">
        {props.items && (
          <ul class="menu menu-horizontal px-1">
            {props.items.map((item, idx) => {
              const path = "to" in item ? item.to : item.href;
              return (
                <li key={idx}>
                  <span
                    class={`btn normal-case active:btn-outline ${
                      location.pathname.endsWith(path) ? "btn-outline btn-primary" : "btn-ghost"
                    }`}
                  >
                    {"to" in item ? (
                      <Link to={item.to} id={`navbar-item-${idx}`}>
                        {item.text}
                      </Link>
                    ) : (
                      <a href={item.href} id={`navbar-item-${idx}`}>
                        {item.text}
                      </a>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
