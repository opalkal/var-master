import { useState } from "react";
import { Header } from "./Header";
import { Task } from "./Task";
import "./App.css";

function App() {
  const [currentTask, setCurrentTask] = useState(1);

  function submitFunction() {
    setTimeout(() => {
      setCurrentTask(currentTask + 1);
    }, 1500);
  }

  let task;
  if (currentTask === 1) {
    task = (
      <Task
        nr={currentTask}
        desc="Löse die Gleichung."
        task="x - 7 = 3"
        correct={10}
        submitFunction={submitFunction}
      />
    );
  } else if (currentTask === 2) {
    task = (
      <Task
        nr={currentTask}
        desc="Kennst du die Lösung?"
        task="3x + 5 = 14"
        correct={3}
        submitFunction={submitFunction}
      />
    );
  } else if (currentTask === 3) {
    task = (
      <Task
        nr={currentTask}
        desc="Jetzt wird es schwerer."
        task="2(x - 4) + 3 = 9"
        correct={7}
        submitFunction={submitFunction}
      />
    );
  } else if (currentTask === 4) {
    task = (
      <Task
        nr={currentTask}
        desc="Verdienst du die 1?"
        task="2((x - 3) - 1) + ((x - 6) + 4) = 11"
        correct={7}
        submitFunction={submitFunction}
      />
    );
  } else if (currentTask === 5) {
    task = (
      <Task
        nr={currentTask}
        desc="IQ von 150+ benötigt..."
        task="2((x + 3) - (x - 2)) + 4((x - 1) - (x - 4)) - 2((x - 2) + (x - 5)) = 1674
"
        correct={420}
        submitFunction={submitFunction}
      />
    );
  } else if (currentTask === 6) {
    task = (
      <Task
        nr={currentTask}
        desc="Frage jetzt bloß nicht ChatGPT!"
        task="3((x + 5) - (x - 3)) + 6((x - 2) - (x - 7)) - 4((x - 3) + (x - 8)) + 10x^2 - 8x + 15 = 
3((x + 5) - (x - 3)) + 6((x - 2) - (x - 7)) - 4((x - 3) + (x - 8)) - 1350 + 
60((x + 5) - (x - 3)) + 7((x - 2) - (x - 7)) - 5((x - 3) + (x - 8))"
        correct={7.55}
        submitFunction={submitFunction}
      />
    );
  } else if (currentTask === 7) {
    task = (
      <Task
        nr={currentTask}
        desc="Die letzte Herausforderung..."
        task="((2/35)x + (7/28)) - ((6/49)x - (5/36)) + ((3/22)x - (8/15)) - ((4/30)x + (7/50)) + ((5/17)x - (9/42)) - ((6/19)x + (10/37)) + ((7/21)x - (11/48)) - ((8/25)x + (12/43)) + ((9/29)x - (13/44)) - ((10/31)x + (14/45)) + ((11/33)x - (15/46)) - ((12/35)x + (16/47)) + ((13/37)x - (17/48)) - ((14/39)x + (18/49)) + ((15/41)x - (19/50)) - ((16/43)x + (20/51)) + ((17/45)x - (21/52)) - ((18/47)x + (22/53)) + ((19/49)x - (23/54)) - ((20/51)x + (24/55)) + ((21/53)x - (25/56)) - ((22/55)x + (26/57)) + ((23/57)x - (27/58)) - ((24/59)x + (28/59)) + ((25/61)x - (29/60)) - ((26/63)x + (30/61)) = ((1/50)x + (1/45)) - ((2/55)x - (2/40)) + ((3/60)x - (3/35)) - ((4/65)x + (4/30)) + ((5/70)x - (5/25)) - ((6/75)x + (6/20)) + ((7/80)x - (7/15)) - ((8/85)x + (8/10)) + ((9/90)x - (9/5)) - ((10/95)x + (10/0))"
        correct={27.14}
        submitFunction={submitFunction}
      />
    );
  } else {
    task = <h2 id="winnersMessage">Du gewinnst! 👏🏆🎉🥇</h2>;
  }

  return (
    <>
      <Header />
      <main>{task}</main>
    </>
  );
}

export default App;
