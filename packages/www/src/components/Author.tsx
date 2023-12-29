import UserIcon from "../icons/User.tsx";

export interface AuthorProps {
  author: string;
}

export default function Author({ author }: AuthorProps) {
  return (
    <div class="items-center flex flex-row ">
      <UserIcon />
      <h4 class="ml-1">{author}</h4>
    </div>
  );
}
