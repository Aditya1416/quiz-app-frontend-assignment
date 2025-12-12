import { useEffect, useState } from "react";
import type { Answer } from "../App";

type Q = {
  id: number;
  question: string;
  options: string[];
  answer: number;
};

type Props = {
  questions: Q[];
  answers: Answer[];
  onRetry: () => void;
  onHome: () => void;
  onReview: () => void;
};

export default function Results({
  questions,
  answers,
  onRetry,
  onHome,
  onReview,
}: Props) {
  const total = questions.length;

  const correctCount = answers.filter((a) => {
    const q = questions.find((q) => q.id === a.qid);
    return q && a.selected === q.answer;
  }).length;

  const percent = Math.round((correctCount / total) * 100);

  // Rolling number animation
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const steps = 40;
    const stepTime = Math.max(12, duration / steps);

    let current = 0;
    const timer = setInterval(() => {
      current += Math.ceil((percent - current) / 6);
      if (current >= percent) {
        current = percent;
        clearInterval(timer);
      }
      setDisplay(current);
    }, stepTime);

    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div className="page">
      <div className="main-card results-center" role="main" aria-live="polite">
        <h2 className="results-title">Your Result</h2>

        <div className="rolling-number">
          {display}
          <span style={{ fontSize: 40, marginLeft: 6 }}>%</span>
        </div>

        <div style={{ marginBottom: 20, color: "#264b51", fontWeight: 600 }}>
          {correctCount} out of {total} correct
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button className="btn" onClick={onHome}>
            Home
          </button>
          <button className="btn" onClick={onRetry}>
            Retry
          </button>
          <button className="btn primary" onClick={onReview}>
            Review
          </button>
        </div>
      </div>
    </div>
  );
}
