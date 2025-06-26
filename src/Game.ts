import { solve } from "./Solver";

export const GRID_SIZE = 4;

export type Grid = boolean[][];
export type Move = { row: number; column: number };

export interface GameState {
  grid: {
    initial: Grid;
    current: Grid;
  };
  solver: {
    initial: Move[];
    current: Move[];
  };
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

export const initialGameState = (): GameState => {
  const grid = initializeGrid();
  const moves = solve(grid);
  return {
    grid: {
      initial: structuredClone(grid),
      current: grid,
    },
    solver: {
      initial: structuredClone(moves),
      current: moves,
    },
    movesCount: 0,
    hasWon: false,
  };
};

export type GameAction =
  | { type: "NEW_GAME" }
  | { type: "RESET_GAME" }
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
      return initialGameState();

    case "RESET_GAME":
      return {
        grid: {
          initial: structuredClone(state.grid.initial),
          current: state.grid.initial,
        },
        solver: {
          initial: structuredClone(state.solver.initial),
          current: state.solver.initial,
        },
        movesCount: 0,
        hasWon: false,
      };

    case "TOGGLE_CELL": {
      if (state.hasWon) {
        return state;
      }

      const newGrid: boolean[][] = toggleCell(
        state.grid.current,
        action.row,
        action.column,
      );
      const newMovesCount = state.movesCount + 1;
      const hasWon = newGrid.every((row) => row.every((cell) => cell));
      const moves = solve(newGrid);

      return {
        grid: {
          initial: state.grid.initial,
          current: newGrid,
        },
        solver: {
          initial: state.solver.initial,
          current: moves,
        },
        movesCount: newMovesCount,
        hasWon,
      };
    }
  }
};
