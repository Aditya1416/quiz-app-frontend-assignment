import React, { useState, useMemo, useEffect, useRef } from "react";
import CatPaw from "../components/CatPaw";
import type { Answer } from "../App";

type Q = { id:number; question:string; options:string[]; answer:number };

type Props = {
  questions: Q[];
  answers: Answer[];
  onAnswer: (qid:number, selectedIndex:number)=>void;
  onFinish: ()=>void;
  onHome: ()=>void;
};

export default function Quiz({ questions, answers, onAnswer, onFinish, onHome }: Props) {
  const total = questions.length;
  const [index, setIndex] = useState(0);
  const current = questions[index];
  const selected = answers.find(a=>a.qid===current.id)?.selected ?? null;
  const progressPct = useMemo(()=> Math.round(((index+1)/total)*100), [index, total]);
  const optionsRef = useRef<HTMLDivElement|null>(null);

  useEffect(()=> {
    // focus first option on question change for keyboard users
    const el = optionsRef.current?.querySelector<HTMLButtonElement>("button");
    el?.focus();
  }, [index]);

  function choose(opt:number){
    onAnswer(current.id, opt);
  }

  function nextOrSubmit(){
    if(index < total - 1) setIndex(i=> i+1);
    else onFinish();
  }

  function prev(){
    if(index > 0) setIndex(i=> i-1);
  }

  // keyboard handling for Enter to move forward
  useEffect(()=> {
    function handler(e:KeyboardEvent){
      if(e.key === "Enter" && selected !== null){
        nextOrSubmit();
      }
    }
    window.addEventListener("keydown", handler);
    return ()=> window.removeEventListener("keydown", handler);
  }, [selected, index]);

  return (
    <div className="page">
      <div className="main-card" role="main" aria-labelledby="quizTitle">
        <header className="quiz-header">
          <h2 id="quizTitle" className="title">Test Your Knowledge</h2>
          <div className="progress-row" aria-hidden>
            <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressPct}>
              <div className="progress-fill" style={{ width:`${progressPct}%`}} />
            </div>
            <div className="progress-count" aria-live="polite">{index+1}/{total}</div>
          </div>
        </header>

        <main className="quiz-main">
          <div className="question-box">
            <div className="question" aria-live="polite">{index+1}. {current.question}</div>

            <div className="options" ref={optionsRef}>
              {current.options.map((opt,i)=>(
                <button key={i}
                        onClick={()=>choose(i)}
                        className={`option ${selected===i ? "selected":""}`}
                        aria-pressed={selected===i}
                        aria-label={`Option ${i+1}: ${opt}`}
                        >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </main>

        <footer className="quiz-footer nav-row" role="navigation" aria-label="Quiz controls">
          <div style={{ marginRight:"auto" }}>
            <button className="btn" onClick={onHome}>Home</button>
          </div>

          <div style={{ display:"flex", gap:12 }}>
            <button className="btn" onClick={prev} disabled={index===0} aria-disabled={index===0} aria-label="Previous">←</button>
            <button className="btn primary" onClick={nextOrSubmit} disabled={selected===null} aria-disabled={selected===null} aria-label="Next or Finish">
              {index===total-1 ? "Finish" : "Next →"}
            </button>
          </div>
        </footer>
      </div>

      {/* show paw only for the question containing 'cat' OR index 0 as fallback */}
      <CatPaw show={current.question.toLowerCase().includes("cat") || current.id === 1} message="Good luck!" size={110} />
    </div>
  );
}
