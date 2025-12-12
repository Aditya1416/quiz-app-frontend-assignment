import React from "react";
type Props = { current: number; total: number };
export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div style={{display:"flex", alignItems:"center", gap:12}}>
        <div style={{flex:1}}>
          <div style={{height:8, borderRadius:8, background:"#ecfeff", overflow:"hidden"}}>
            <div style={{height:8, width:`${pct}%`, background:"#06b6d4", transition:"width .4s"}} />
          </div>
        </div>
        <div style={{minWidth:64, textAlign:"center", color:"#0f172a"}}>{current}/{total}</div>
      </div>
    </div>
  );
}
