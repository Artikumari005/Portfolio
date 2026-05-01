export const tenziesDetails = {
  overview:
    "Tenzies was crafted as more than just a dice game—it's a polished React application that delivers addictive gameplay with smooth animations, performance tracking, and responsive design.",
  sections: [
    {
      title: "My Approach",
      body:
        "Tenzies was crafted as more than just a dice game—it's a polished React application that delivers addictive gameplay with smooth animations, performance tracking, and responsive design. My approach centered on creating an intuitive user experience using React hooks for state management, custom Die components for visual appeal, and Vite for lightning-fast development and builds. Every roll, hold action, and win celebration was engineered to feel responsive and rewarding, turning a simple concept into an engaging web app ready for deployment."
    },
    {
      title: "Vision and Innovation",
      body:
        "The vision for Tenzies is to build a modern, browser-based take on the classic dice game, accessible to anyone with a link. It leverages React's power for real-time updates, confetti explosions on wins, and persistent best-time tracking via localStorage. Innovative touches like dice face animations, vibrant color-coded holds, and a clean minimal UI make it stand out, while modular code ensures easy customization or expansion into multiplayer modes."
    },
    {
      title: "Identifying Unique Challenges",
      body:
        "Dice games sound simple, but implementing satisfying randomness, visual feedback for holds, win detection across 10 dice, and performance metrics introduces complexity. Players expect instant rolls without lag, clear hold states, and motivation through leaderboards. Poor implementations feel clunky; Tenzies solves this with optimized re-renders, precise state logic, and celebratory effects that keep users coming back."
    },
    {
      title: "Resolving Complex Problems",
      body:
        "Synchronizing dice values, hold statuses, roll counts, and win conditions requires robust state management. Tenzies uses useEffect for auto-rolling on new games, useId for unique keys, and conditional rendering to prevent unnecessary updates. LocalStorage persists best times across sessions, while CSS transitions and libraries like react-confetti handle visuals. This component-based architecture scales effortlessly for features like difficulty levels or themes."
    },
    {
      title: "User-Centric Design",
      body:
        "Tenzies puts players first with one-click rolls, tap-to-hold dice, and prominent best-time display. The layout adapts seamlessly to mobile and desktop, with large touch targets and high-contrast visuals. Win screens burst with confetti, providing instant gratification, while subtle instructions guide new players without overwhelming the minimal aesthetic."
    },
    {
      title: "Meeting User Needs",
      body:
        "Casual gamers get quick fun sessions; competitive players chase better times; developers get clean, commented code for learning React. New game buttons reset seamlessly, instructions clarify rules upfront, and shareable best times encourage social play. It's a complete package for entertainment and education."
    }
  ],
  pages: [
    "Home/Game Screen — The core gameplay area with 10 dice, roll button, timer, best time tracker, and new game option.",
    "Dice Components — Individual Die.jsx elements showing numbers 1-6, hold states (background colors), and roll animations.",
    "Game Logic — Detects wins when all dice match, explodes confetti, updates best time if improved.",
    "Responsive UI �� Adapts to any screen size with CSS Flexbox/Grid for perfect centering.",
    "Performance Tracking — Live roll counter, best time saved to localStorage."
  ],
  features: [
    "One-click dice rolls with satisfying animations",
    "Tap-to-hold dice with color-coded visual states",
    "Real-time roll counter and timer",
    "Best time tracking via localStorage",
    "Confetti explosion on win",
    "Responsive design for mobile and desktop",
    "Smooth dice spin animations",
    "New game with instant reset",
    "Minimal and clean UI aesthetic",
    "Production-ready React code"
  ],
  conclusion:
    "Tenzies is a performant React game template perfect for portfolios, coding challenges, or fun web apps. With addictive mechanics, beautiful animations, and production-ready code, it showcases modern frontend skills while providing endless replay value. Deploy it anywhere, fork it for variants, or use it to impress in interviews— Tenzies rolls a natural 20 every time."
};
