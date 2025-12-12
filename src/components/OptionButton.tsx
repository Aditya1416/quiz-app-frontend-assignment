import React, { KeyboardEvent } from "react";

type Props = { label: string; onClick: () => void; selected?: boolean; disabled?: boolean; id?: string };
export default function OptionButton({ label, onClick, selected, disabled, id }: Props) {
  function onKey(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  }

  const cls = `option-btn ${selected ? "selected" : ""}`;

  return (
    <button
      id={id}
      className={cls}
      onClick={onClick}
      onKeyDown={onKey}
      role="button"
      disabled={disabled}
      aria-pressed={!!selected}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span>{label}</span>
        {selected ? <span style={{ marginLeft: 12, fontWeight: 700 }}>✓</span> : null}
      </div>
    </button>
  );
}
