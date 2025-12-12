import type { Answer } from "../App";

type Q = { id:number; question:string; options:string[]; answer:number };

type Props = {
  questions: Q[];
  answers: Answer[];
  onClose: ()=>void;
  onHome: ()=>void;
};

export default function Review({ questions, answers, onClose, onHome }: Props) {
  return (
    <div className="page">
      <div className="main-card" role="main" aria-label="Review answers">
        <h2 className="title">Review</h2>
        <div className="review-grid" role="list">
          {questions.map(q=>{
            const a = answers.find(x=>x.qid===q.id);
            const sel = a?.selected;
            const correct = sel === q.answer;

            return (
              <div key={q.id} className="review-row" role="listitem" aria-label={`Question ${q.id}`}>
                <div style={{ flex:"1 1 60%" }}>
                  <div style={{ fontWeight:700 }}>{q.question}</div>
                  <div style={{ color:"var(--muted-text)", marginTop:6 }}>
                    Your Answer:{" "}
                    <strong>
                      {typeof sel === "number" ? q.options[sel] : "No answer"}
                    </strong>
                  </div>
                </div>

                <div style={{ textAlign:"right" }}>
                  <div
                    style={{
                      color: correct ? "var(--correct)" : "var(--wrong)",
                      fontWeight:800
                    }}
                  >
                    {correct ? "Correct" : "Incorrect"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display:"flex", gap:12, justifyContent:"center", marginTop:18 }}>
          <button className="btn" onClick={onClose}>Close</button>
          <button className="btn" onClick={onHome}>Home</button>
        </div>
      </div>
    </div>
  );
}
