import React, { useState } from "react";
import Start from "./pages/Start";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Review from "./pages/Review";
import "./index.css";

export type Answer = { qid:number; selected:number|null; correct?:boolean };

export default function App(){
  const [view, setView] = useState<"start"|"quiz"|"results"|"review">("start");

  const sampleQuestions = [
    { id:1, question:"What sound does a cat make?", options:["Bhau-Bhau","Meow-Meow","Oink-Oink"], answer:1 },
    { id:2, question:"What would you probably find in your fridge?", options:["Shoes","Ice Cream","Books"], answer:1 },
    { id:3, question:"How many stars are in the sky?", options:["Two","Infinite","One Hundred"], answer:1 },
  ];

  const [questions] = useState(sampleQuestions);
  const [answers, setAnswers] = useState<Answer[]>(questions.map(q=>({ qid:q.id, selected:null, correct:false })));

  function handleAnswer(qid:number, sel:number){
    setAnswers(prev => prev.map(a => a.qid === qid ? ({ ...a, selected: sel, correct: sel === questions.find(q=>q.id===qid)!.answer }) : a));
  }

  function gotoHome(){ setView("start"); setAnswers(questions.map(q=>({ qid:q.id, selected:null, correct:false })))}
  function finishQuiz(){ setView("results"); }
  function openReview(){ setView("review"); }
  function retry(){ setAnswers(questions.map(q=>({ qid:q.id, selected:null, correct:false }))); setView("quiz"); }

  return (
    <div className="app-root">
      <div className="main-card">
        {view === "start" && <Start onStart={()=> setView("quiz")} />}
        {view === "quiz" && <Quiz questions={questions} answers={answers} onAnswer={handleAnswer} onFinish={finishQuiz} onHome={gotoHome} />}
        {view === "results" && <Results questions={questions} answers={answers} onRetry={retry} onHome={gotoHome} onReview={openReview} />}
        {view === "review" && <Review questions={questions} answers={answers} onClose={()=> setView("results")} onHome={gotoHome} />}
      </div>
    </div>
  );
}
