import { GRID_SIZE, type Grid, type Move } from "./Game";

type GridHash = number;
type CurrentState = { grid: GridHash; moves: Move[] };

const isWon = (grid: GridHash): boolean => {
  const winHash = (1 << (GRID_SIZE * GRID_SIZE)) - 1;
  return grid === winHash;
};

const hash = (grid: Grid): number => {
  let result = 0;

  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (grid[r][c]) {
        result |= 1 << (r * GRID_SIZE + c);
      }
    }
  }

  return result;
};

const toggleCell = (grid: GridHash, row: number, column: number): GridHash => {
  let newGrid = grid;

  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (row === r || column === c) {
        newGrid = newGrid ^ (1 << (r * GRID_SIZE + c));
      }
    }
  }

  return newGrid;
};

export const solve = (grid: Grid): Move[] => {
  const gridHash = hash(grid);

  const queue: CurrentState[] = [];
  queue.push({ grid: gridHash, moves: [] });

  const visited: Set<number> = new Set();
  visited.add(gridHash);

  while (queue.length) {
    const { grid, moves } = queue[0];
    queue.shift();

    if (isWon(grid)) {
      return moves;
    }

    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        const newGrid = toggleCell(grid, r, c);
        if (!visited.has(newGrid)) {
          visited.add(newGrid);
          queue.push({
            grid: newGrid,
            moves: moves.concat({ row: r, column: c }),
          });
        }
      }
    }
  }

  throw new Error("puzzle should always have a solution");
};
