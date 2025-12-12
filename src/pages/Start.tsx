
type Props = { onStart: ()=>void };

export default function Start({ onStart }: Props) {
  return (
    <div className="page">
      <div className="main-card" role="main" aria-labelledby="title">
        <h1 id="title" className="site-title">QuizMate</h1>
        <div className="site-sub">Interactive quiz — pixel-perfect UI</div>

        <div className="start-grid">
          <div className="start-left">
            <h2 className="title">Sharpen your knowledge</h2>
            <p style={{ color:"var(--muted-text)" }}>Complete the quiz to test core concepts. Smooth animations, accessible controls, and pixel-accurate UI.</p>
            <div className="start-cta">
              <button className="btn primary" onClick={onStart} aria-label="Start quiz">Start Quiz</button>
              <button className="btn" onClick={()=>window.scrollTo(0,document.body.scrollHeight)} aria-label="How it works">How it works</button>
            </div>
          </div>

          <div style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ width:380, padding:20, borderRadius:12, background:"linear-gradient(180deg,#fff,#fbffff)", boxShadow:"var(--soft-shadow)", border:"1px solid rgba(0,0,0,0.03)"}}>
              <h3 style={{ margin:0, color:"var(--accent-1)", fontFamily:"Playfair Display", fontSize:22 }}>Ready?</h3>
              <p style={{ color:"var(--muted-text)", marginTop:8 }}>Tap start and answer the questions. Hover states and transitions are enabled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
