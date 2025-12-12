
import OptionButton from "./OptionButton";

type Q = { id:number; question:string; options:string[]; answerIndex?: number };
type Props = {
  q: Q;
  onSelect: (index:number) => void;
  selectedIndex: number | null;
  disabled?: boolean;
};

export default function QuestionCard({ q, onSelect, selectedIndex, disabled }: Props) {
  return (
    <div>
      <div className="text-center text-lg font-semibold mb-6">{q.question}</div>
      <div className="space-y-3" role="list" aria-label={`Options for ${q.question}`}>
        {q.options.map((opt, i) => (
          <div role="listitem" key={i}>
            <OptionButton
              id={`opt-${q.id}-${i}`}
              label={opt}
              onClick={() => onSelect(i)}
              selected={selectedIndex === i}
              disabled={disabled}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
