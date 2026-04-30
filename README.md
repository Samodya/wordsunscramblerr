# Word Puzzle Solver — Multi-Constraint Lexical Engine

A high-performance smart word solver built with React and TypeScript. Designed for puzzle enthusiasts, NYT Crossword solvers, and Wordle players.

## Core Features
- **Constraints Engine**: Filter by length, known letters (scrambled), and excluded characters.
- **Position Pinning**: Lock letters into specific slots for instant refinement.
- **Blazing Fast**: Local browser-based lookup with zero server latency.
- **Offline Ready**: Dictionary cached locally for uninterrupted play.
- **AdSense Optimized**: Privacy-first design with all legal-required pages.

## Local Setup

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Fetch word list**:
   The word list is required for the application to function. Run:
   ```bash
   node fetch_words.js
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```

## Technology Stack

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS 4
- **Animation**: Motion
- **Icons**: Lucide React
- **Routing**: React Router 7
- **Dictionary Source**: dwyl/english-words
