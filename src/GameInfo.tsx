import { useGame } from "./GameContext";
import "./GameInfo.css";

export const GameInfo: React.FC<Record<never, never>> = () => {
  const { newGame } = useGame();

  return (
    <div id="game-info">
      <div id="subtitle">
        <h2>Solve puzzle in fewest moves possible</h2>
        <p>Toggle grid cells and make them all green</p>
      </div>
      <button onClick={newGame}>New Game</button>
    </div>
  );
};
