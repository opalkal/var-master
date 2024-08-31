import { useState, useEffect } from "react";

type TaskProps = {
  desc: string;
  task: string;
  nr: number;
  correct: number;
  submitFunction: () => void;
};

export function Task({ desc, task, nr, correct, submitFunction }: TaskProps) {
  const [answer, setAnswer] = useState(false);
  const [selection, setSelection] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setAnswer(false);
    setSelection(null);
    setIsSubmitted(false);
  }, [nr]);

  const handleChange = (event: any) => {
    setSelection(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (selection == correct) {
      setAnswer(true);
      submitFunction();
    } else {
      setAnswer(false);
    }
  };

  let validator: any = <h2 id="validator">⬅️</h2>;
  if (isSubmitted) {
    if (answer) {
      validator = <h2 id="validator">✅</h2>;
    } else {
      validator = <h2 id="validator">❌</h2>;
    }
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <div className="task">
      <div className="content">
        <div className="instructions">
          <h2 id="nr">Aufgabe {nr}.</h2>
          <p id="desc">{desc}</p>
          <p id="task">{task}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="var">x = </label>
            <input
              type="number"
              id="var"
              value={selection || ""}
              placeholder="Antwort"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            {validator}
          </div>
        </form>
      </div>
    </div>
  );
}
