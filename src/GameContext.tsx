import { createContext, useContext, useMemo, useReducer } from "react";
import { gameReducer, initialGameState, type GameState } from "./Game";

interface GameContextType {
  state: GameState;
  newGame: () => void;
  resetGame: () => void;
  toggleCell: (row: number, column: number) => void;
}

export const GameContext = createContext<GameContextType | null>(null);

interface GameProviderProps {
  children: React.ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const gameState = useMemo(() => initialGameState(), []);
  const [state, dispatch] = useReducer(gameReducer, gameState);

  const newGame = () => {
    dispatch({ type: "NEW_GAME" });
  };

  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
  };

  const toggleCell = (row: number, column: number) => {
    dispatch({ type: "TOGGLE_CELL", row, column });
  };

  const value: GameContextType = {
    state,
    newGame,
    resetGame,
    toggleCell,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within GameProvider");
  }
  return context;
};
