import { useGame } from "./GameContext";
import "./GameHeader.css";

export const GameHeader: React.FC<Record<never, never>> = () => {
  const {
    state: { movesCount, solver },
  } = useGame();

  return (
    <div id="game-header">
      <div id="game-title">
        <h1>0n0FF</h1>
      </div>
      <div className="counter">
        <div className="counter-title">Moves</div>
        <div className="counter-value">{movesCount}</div>
      </div>
      <div className="counter">
        <div className="counter-title">Best</div>
        <div className="counter-value">
          {solver.current.length} ({solver.initial.length})
        </div>
      </div>
    </div>
  );
};
