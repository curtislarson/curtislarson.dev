export interface IconProps {
  src: string;
  tooltip?: string;
}

export default function Icon({ src, tooltip }: IconProps) {
  if (tooltip) {
    return (
      <div className={`tooltip tooltip-bottom normal-case`} data-tip={tooltip}>
        <img src={src} className="h-5 w-5 sm:h-7 sm:w-7" />
      </div>
    );
  }
  return <img src={src} className="h-5 w-5 sm:h-7 sm:w-7" />;
}
