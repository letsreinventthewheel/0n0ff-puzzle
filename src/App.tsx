import "./App.css";
import { GameField } from "./GameField";
import { GameHeader } from "./GameHeader";
import { GameInfo } from "./GameInfo";
import { GameSolution } from "./GameSolution";

function App() {
  return (
    <>
      <GameHeader />
      <GameInfo />
      <GameField />
      <GameSolution />
    </>
  );
}

export default App;
