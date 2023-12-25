import Icon from "./Icon";
import NavbarItem, { NavbarItemProps } from "./NavbarItem";

export interface NavbarProps {
  href?: string;
  logo: string;
  title: string;
  items?: NavbarItemProps[];
}

export default function Navbar(props: NavbarProps) {
  const { left, right } = (props.items ?? []).reduce<{ left: NavbarItemProps[]; right: NavbarItemProps[] }>(
    (acc, item) => {
      if (item.align === "right") {
        acc.right.push(item);
      } else {
        acc.left.push(item);
      }
      return acc;
    },
    { left: [], right: [] }
  );

  return (
    <div className="navbar bg-base-200">
      <div className="flex-none">
        <a href={props.href ?? "/"} className="btn-ghost btn-xs btn sm:btn-md">
          <Icon src={props.logo} tooltip="Quack" />
          <span className="ml-5 text-xl normal-case sm:block hidden">{props.title}</span>
        </a>
      </div>
      <div className="flex-1 mt-1">
        {left.length > 0 && (
          <ul className="menu menu-horizontal px-1">
            {left.map((item) => (
              <NavbarItem {...item} key={item.href} />
            ))}
          </ul>
        )}
      </div>
      <div className="flex-none justify-end">
        {right.length > 0 && (
          <ul className="menu menu-horizontal">
            {right.map((item) => (
              <NavbarItem {...item} key={item.href} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
