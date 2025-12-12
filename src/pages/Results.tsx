import React, { useEffect, useState } from "react";
import type { Answer } from "../App";

type Q = { id:number; question:string; options:string[]; answer:number };

type Props = {
  questions: Q[];
  answers: Answer[];
  onRetry: ()=>void;
  onHome: ()=>void;
  onReview: ()=>void;
};

export default function Results({ questions, answers, onRetry, onHome, onReview }: Props) {
  const total = questions.length;
  const correctCount = answers.filter(a=>{
    const q = questions.find(q=>q.id===a.qid);
    return q && a.selected === q.answer;
  }).length;

  const percent = Math.round((correctCount/total) * 100);

  // rolling counter
  const [display, setDisplay] = useState(0);
  useEffect(()=>{
    let start = 0;
    const duration = 1200; // ms
    const steps = 40;
    const stepTime = Math.max(12, duration/steps);
    const increment = (n:number)=> {
      const now = Date.now();
      const end = start + duration;
    };
    let current = 0;
    const id = setInterval(()=>{
      current += Math.ceil((percent - current) / 6);
      if(current >= percent){ current = percent; clearInterval(id); }
      setDisplay(current);
    }, stepTime);
    return ()=> clearInterval(id);
  }, [percent]);

  return (
    <div className="page">
      <div className="main-card results-center" role="main" aria-live="polite">
        <div className="results-title">Your Result</div>
        <div className="rolling-number" aria-hidden>{display}%</div>
        <div style={{ marginBottom:18, color:"var(--muted-text)" }}>{correctCount} out of {total} correct</div>
        <div style={{display:"flex", gap:12, justifyContent:"center"}}>
          <button className="btn" onClick={onHome}>Home</button>
          <button className="btn" onClick={onRetry}>Retry</button>
          <button className="btn primary" onClick={onReview}>Review</button>
        </div>
      </div>
    </div>
  );
}
