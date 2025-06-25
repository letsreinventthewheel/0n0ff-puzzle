import "./App.css";
import { GameField } from "./GameField";
import { GameHeader } from "./GameHeader";
import { GameInfo } from "./GameInfo";

function App() {
  return (
    <>
      <GameHeader />
      <GameInfo />
      <GameField />
    </>
  );
}

export default App;
