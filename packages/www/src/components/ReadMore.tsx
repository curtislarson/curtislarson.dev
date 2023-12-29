export interface ReadMoreProps {
  href: string;
  title: string;
}

export default function ReadMore(props: ReadMoreProps) {
  return (
    <a class="link link-info" href={props.href} title={`Read "${props.title}"`}>
      Read More
    </a>
  );
}
