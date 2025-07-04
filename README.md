# 🧩 0n0FF: A Tiny Puzzle Game with a Builtin Solver

A colorful 4×4 logic puzzle built in **React and TypeScript** where every move toggles an entire row and column. The goal is to make the whole board green. In the second part of this project we go a step further and **teach the game how to solve itself** using **bit manipulation** and **Breadth First Search (BFS)**.

![YouTube Video](https://img.shields.io/badge/Watch%20on-YouTube-red?logo=youtube)

> 🔗 [[Part 1] 0n0FF: A Flipping Puzzle in React](https://www.youtube.com/watch?v=2N2PKKOFhkw)

> 🔗 [[Part 2] 0n0FF: Teaching a Puzzle to Solve Itself](https://www.youtube.com/watch?v=w7-x7hvT3Uo)

---

## ✨ What It Does

- Interactive 4×4 puzzle where each click flips a full row and column
- Builtin optimal solver shown beneath the grid
- React Context + Reducer pattern for clean state management
- Real time solution computation using BFS and 16 bit board hashing
- Automatically updates the solver after every move

---

## 🧠 Features

- 🔄 Randomized puzzle generation
- 🧮 BFS solver with perfect move sequence
- 🎯 Win detection and visual feedback
- 🕶️ Subtle gray toned solution hint display
- ♻️ "New Game" and "Reset" mechanics

---

## 🧰 Technologies Used

- React + TypeScript
- Vite
- CSS Modules
- BFS pathfinding
- Bitwise grid encoding

---

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/letsreinventthewheel/0n0ff-puzzle.git
cd 0n0ff-puzzle
yarn
```

### 2. Start Development Server

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Extend It

- Animate the full solution path step by step
- Let players request a hint only when needed
- Track player vs solver efficiency
- Add different grid sizes or random move obfuscation

---

## 🌐 External Resources

- [Breadth-First Search](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Breadth First Search or BFS for a Graph](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)
- [Bitwise operation](https://en.wikipedia.org/wiki/Bitwise_operation)
- [Bit Manipulation](https://sassafras13.github.io/BitManipulation/)
- [React: useReducer Hook](https://react.dev/reference/react/useReducer)
- [React: Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)

---

## 🙌 Acknowledgments

UI inspired by the [2048 game](https://2048game.com/)
