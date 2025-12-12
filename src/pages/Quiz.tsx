import { useState, useMemo, useEffect, useRef } from "react";
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

  const progressPct = useMemo(
    ()=> Math.round(((index+1)/total)*100),
    [index, total]
  );

  const optionsRef = useRef<HTMLDivElement|null>(null);

  useEffect(()=> {
    optionsRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
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

  return (
    <div className="page">
      <div className="main-card">
        <header>
          <h2 className="title">Test Your Knowledge</h2>
          <div className="progress-row">
            <div className="progress-track">
              <div className="progress-fill" style={{ width:`${progressPct}%`}} />
            </div>
            <div>{index+1}/{total}</div>
          </div>
        </header>

        <main>
          <div className="question">{index+1}. {current.question}</div>

          <div className="options" ref={optionsRef}>
            {current.options.map((opt,i)=>(
              <button
                key={i}
                className={`option ${selected===i ? "selected":""}`}
                onClick={()=>choose(i)}
              >
                {opt}
              </button>
            ))}
          </div>
        </main>

        <footer className="nav-row">
          <button className="btn" onClick={onHome}>Home</button>
          <div>
            <button className="btn" onClick={prev} disabled={index===0}>←</button>
            <button className="btn primary" onClick={nextOrSubmit} disabled={selected===null}>
              {index===total-1 ? "Finish" : "Next →"}
            </button>
          </div>
        </footer>
      </div>

      <CatPaw
        show={current.question.toLowerCase().includes("cat")}
        message="Good luck!"
        size={110}
      />
    </div>
  );
}
