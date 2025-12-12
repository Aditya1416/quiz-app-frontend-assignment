import React from "react";
import "./CatPaw.css";

type Props = {
  show?: boolean;
  message?: string;
  size?: number;
};

export default function CatPaw({ show = true, message = "Best of Luck!", size = 120 }: Props) {
  if (!show) return null;
  const w = size;
  const h = Math.round(size * 0.9);

  return (
    <div className="catpaw-root show" aria-hidden>
      <div className="catpaw-bubble" role="note">{message}</div>
      <svg className="catpaw-svg paw-wave" width={w} height={h} viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#062f34" floodOpacity="0.06" /></filter>
        </defs>
        <ellipse cx="98" cy="120" rx="48" ry="30" fill="#fff5f6" stroke="#e8cfd0" strokeWidth="2" filter="url(#shadow)" />
        <ellipse cx="98" cy="116" rx="44" ry="26" fill="#ffdfe0" opacity="0.65" />
        <g fill="#ffdfe0" stroke="#e8cfd0" strokeWidth="1.6">
          <ellipse cx="50" cy="70" rx="20" ry="26" />
          <ellipse cx="86" cy="46" rx="20" ry="26" />
          <ellipse cx="118" cy="46" rx="18" ry="24" />
          <ellipse cx="154" cy="66" rx="18" ry="24" />
        </g>
        <g fill="rgba(255,255,255,0.6)">
          <ellipse cx="98" cy="112" rx="22" ry="12" />
          <ellipse cx="86" cy="40" rx="8" ry="10" />
          <ellipse cx="120" cy="40" rx="6" ry="8" />
        </g>
      </svg>
    </div>
  );
}
