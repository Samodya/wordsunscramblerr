# Unscramble.it - Lexical Processing Engine

A high-performance English word unscrambler built with React and TypeScript. This application uses a pre-indexed dictionary of over 370,000 words to find anagrams in milliseconds.

## Features

- **Blazing Fast**: Local browser-based lookup with zero server latency.
- **Brutalist Design**: A bold, distinctive UI that stands out.
- **Comprehensive Lexicon**: Indexed by word length and character frequency.
- **Privacy First**: No personal data collection, designed for AdSense compliance.
- **Mobile Responsive**: Fully adaptive layout for all devices.

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
