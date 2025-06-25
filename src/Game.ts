export const GRID_SIZE = 4;

export interface GameState {
  grid: boolean[][];
  movesCount: number;
  hasWon: boolean;
}

export const initializeGrid = () => {
  return Array(GRID_SIZE)
    .fill(null)
    .map(() =>
      Array(GRID_SIZE)
        .fill(null)
        .map(() => Math.random() < 0.5),
    );
};

export const initialGameState: GameState = {
  grid: initializeGrid(),
  movesCount: 0,
  hasWon: false,
};

export type GameAction =
  | { type: "NEW_GAME" }
  | { type: "TOGGLE_CELL"; row: number; column: number };

const toggleCell = (
  grid: boolean[][],
  row: number,
  column: number,
): boolean[][] => {
  const newGrid = structuredClone(grid);

  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (row === r || column === c) {
        newGrid[r][c] = !newGrid[r][c];
      }
    }
  }

  return newGrid;
};

export const gameReducer = (
  state: GameState,
  action: GameAction,
): GameState => {
  switch (action.type) {
    case "NEW_GAME":
      return {
        grid: initializeGrid(),
        movesCount: 0,
        hasWon: false,
      };

    case "TOGGLE_CELL": {
      if (state.hasWon) {
        return state;
      }

      const newGrid: boolean[][] = toggleCell(
        state.grid,
        action.row,
        action.column,
      );
      const newMovesCount = state.movesCount + 1;
      const hasWon = newGrid.every((row) => row.every((cell) => cell));

      return {
        grid: newGrid,
        movesCount: newMovesCount,
        hasWon,
      };
    }
  }
};
