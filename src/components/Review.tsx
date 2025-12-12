import React from "react";
import type { Answer } from "../App";

type Q = { id: number; question: string; options: string[]; answer: number };

type Props = {
  questions: Q[];
  answers: Answer[];
  onClose: () => void;
  onHome: () => void;
};

export default function Review({ questions, answers, onClose, onHome }: Props) {
  return (
    <div className="review-screen">
      <div className="card review">
        <header className="review-header">
          <h2>Review Answers</h2>
          <div className="review-controls">
            <button className="btn" onClick={onHome}>Home</button>
            <button className="btn" onClick={onClose}>Close</button>
          </div>
        </header>

        <main>
          {questions.map((q) => {
            const a = answers.find(x => x.qid === q.id);
            const selected = a?.selected;
            const correct = q.answer;
            const isCorrect = a?.correct;
            return (
              <div key={q.id} className={`review-row ${isCorrect ? "correct" : "wrong"}`}>
                <div className="review-q">{q.id}. {q.question}</div>
                <ul className="review-options">
                  {q.options.map((opt, i) => (
                    <li key={i} className={`review-option ${i === selected ? "chosen" : ""} ${i === correct ? "answer" : ""}`}>
                      <span className="opt-text">{opt}</span>
                    </li>
                  ))}
                </ul>
                <div className="review-note">
                  {isCorrect ? <span className="ok">Correct</span> : <span className="bad">Wrong — correct: {q.options[correct]}</span>}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}
