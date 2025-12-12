import React from "react";
import RollingNumber from "./RollingNumber";
import CatPaw from "./CatPaw";
import type { Answer } from "../App";

type Q = { id: number; question: string; options: string[]; answer: number };
export default function Results({ questions, answers, onRetry, onHome, onReview }:
  { questions: Q[]; answers: Answer[]; onRetry: ()=>void; onHome: ()=>void; onReview: ()=>void }) {

  const correctCount = answers.filter(a => a.correct).length;
  const percent = Math.round((correctCount / questions.length) * 100);

  return (
    <div className="main-card results fade-in">
      <div className="results-center">
        <div className="site-sub">Keep Learning!</div>
        <h2 className="results-title">Your Final score is</h2>
        <div className="rolling-number">
          <RollingNumber value={percent} duration={1600} />
          <span style={{ fontSize: 40, marginLeft: 8 }}>%</span>
        </div>
        <div style={{ marginTop: 8, color: "#264b51", fontWeight: 600 }}>
          {correctCount} correct of {questions.length}
        </div>

        <div style={{ marginTop: 28 }}>
          <button className="btn" onClick={onReview}>Review Answers</button>
          <button className="btn primary" onClick={onRetry} style={{ marginLeft: 12 }}>Retry</button>
          <button className="btn" onClick={onHome} style={{ marginLeft: 12 }}>Home</button>
        </div>
      </div>

      {/* cat paw bottom-left on results */}
      <CatPaw message="Nice work!" autoWave={false} />
    </div>
  );
}
