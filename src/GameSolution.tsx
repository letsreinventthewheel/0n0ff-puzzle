import { GRID_SIZE } from "./Game";
import { useGame } from "./GameContext";

import "./GameSolution.css";

export const GameSolution: React.FC<Record<never, never>> = () => {
  const {
    state: { solver },
  } = useGame();

  const nextMove = solver.current[0];
  if (!nextMove) {
    return null;
  }

  return (
    <div id="game-solution-container">
      <div id="game-solution">
        {Array(GRID_SIZE)
          .fill(null)
          .map((_, rowIdx) => (
            <div className="solution-row" key={`solution-row-${rowIdx}`}>
              {Array(GRID_SIZE)
                .fill(null)
                .map((_, cellIdx) => (
                  <div
                    className={`solution-cell ${nextMove.row === rowIdx && nextMove.column === cellIdx ? "next-move" : ""}`}
                    key={`solution-cell-${rowIdx}-${cellIdx}`}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};
