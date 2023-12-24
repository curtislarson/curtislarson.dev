export interface TagBadgeProps {
  text: string;
}

export default function TagBadge(props: TagBadgeProps) {
  return <div class="badge badge-accent badge-outline p-3">{props.text}</div>;
}
