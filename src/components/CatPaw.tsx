type Props = {
  message: string;
  show?: boolean;
  size?: number;
};

export default function CatPaw({
  message,
  show = true,
  size = 110,
}: Props) {
  if (!show) return null;

  return (
    <div
      className="catpaw-wrapper"
      style={{ width: size }}
      aria-hidden="true"
    >
      <div className="catpaw-bubble">{message}</div>

      <svg
        viewBox="0 0 120 140"
        className="catpaw-svg"
        width={size}
        height={size}
      >
        <g className="paw-wave">
          <circle cx="60" cy="80" r="38" fill="#f5c7a9" />
          <circle cx="35" cy="40" r="14" fill="#f5c7a9" />
          <circle cx="60" cy="32" r="14" fill="#f5c7a9" />
          <circle cx="85" cy="40" r="14" fill="#f5c7a9" />
        </g>
      </svg>
    </div>
  );
}
