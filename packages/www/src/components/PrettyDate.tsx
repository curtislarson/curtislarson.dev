import CalendarIcon from "../icons/Calendar.tsx";

export interface PrettyDateProps {
  date: Date;
}

export default function PrettyDate({ date }: PrettyDateProps) {
  const isoString = date.toISOString();
  return (
    <div class="items-center flex flex-row">
      <CalendarIcon />
      <time class="ml-1" dateTime={isoString}>
        {isoString.split("T")[0]}
      </time>
    </div>
  );
}
