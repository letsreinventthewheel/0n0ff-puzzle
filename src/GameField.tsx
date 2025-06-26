import { useGame } from "./GameContext";

import "./GameField.css";

export const GameField: React.FC<Record<never, never>> = () => {
  const {
    state: { grid, hasWon },
    resetGame,
    toggleCell,
  } = useGame();

  return (
    <div id="game-container">
      {grid.current.map((row, rowIdx) => (
        <div className="game-row" key={`game-row-${rowIdx}`}>
          {row.map((cell, cellIdx) => (
            <div
              className={`game-cell ${cell ? "green-cell" : "red-cell"}`}
              key={`game-cell-${rowIdx}-${cellIdx}`}
              onClick={() => toggleCell(rowIdx, cellIdx)}
            />
          ))}
        </div>
      ))}

      {hasWon && (
        <div id="win-overlay">
          <p>You Won</p>
          <button onClick={resetGame}>Reset Game</button>
        </div>
      )}
    </div>
  );
};
