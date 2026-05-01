export const chefexaDetails = {
  overview:
    "Chefexa is a React-based AI recipe recommendation web app for home cooks and kitchens, featuring ingredient input forms, dynamic AI-generated recipes using Gemini/DeepSeek, markdown-rendered displays, and a clean, intuitive interface built for quick meal discovery and reducing food waste.",
  sections: [
    {
      title: "My Approach",
      body:
        "Chefexa was designed as a practical tool for everyday users who want instant recipe ideas from whatever ingredients they have on hand. The approach emphasizes simplicity, real-time AI integration, and responsive React components. Every feature, from ingredient addition to recipe generation, was crafted to deliver value without complexity, leveraging modern tools like Vite for fast development and deployment."
    },
    {
      title: "Vision and Innovation",
      body:
        "The vision for Chefexa is to make cooking accessible by turning available ingredients into actionable recipes via AI. It combines a minimalistic UI with powerful generative AI, including Gemini 2.5 Flash via Google Generative AI, allowing users to build an ingredient list and generate tailored Markdown recipes on demand. Features like live ingredient lists and loading states ensure a smooth, engaging experience, while extensibility supports future AI model swaps such as DeepSeek migration."
    },
    {
      title: "Identifying Unique Challenges",
      body:
        "Home cooks often struggle with the question, what can I make with these ingredients, without structured tools. Traditional recipe sites require browsing, while AI solutions can feel overwhelming or error-prone. Chefexa solves this with a focused workflow: add ingredients, generate recipe, and view formatted output, while handling API errors gracefully and supporting environment-based configuration."
    },
    {
      title: "Resolving Complex Problems",
      body:
        "Integrating AI APIs such as Gemini, with planned support for DeepSeek/Groq, while managing async states, errors, and Markdown rendering posed challenges. Chefexa resolves this with a centralized ai.js module for API calls, React hooks for ingredients, recipe, and loading state, and react-markdown for rich display. Vite ensures fast builds, ESLint maintains code quality, and dynamic updates through aria-live improve accessibility."
    },
    {
      title: "User-Centric Design",
      body:
        "Chefexa prioritizes ease: add ingredients through a simple form, preview the list, then click Get a recipe for AI-powered results. The navbar with chef logo adds personality, responsive CSS keeps it mobile-friendly, and the experience avoids account walls or login friction so users can get instant utility."
    },
    {
      title: "Meeting User Needs",
      body:
        "For busy cooks, Chefexa saves time and minimizes food waste. For developers, it provides a starter template with AI integration, environment variables such as VITE_GEMINI_API_KEY, and Vercel-ready configuration through vercel.json. Its open-source structure invites future contributions and expansion."
    }
  ],
  pages: [
    "Home - Single-page app experience with Chefexa branding, chef image, ingredient input form, live ingredient list, recipe CTA, and Markdown-rendered AI output.",
    "Header.jsx - Navbar with Chefexa branding and a hover-interactive chef image using chef2.webp.",
    "Main.jsx - Central logic for state management, form handling, AI recipe calls through getRecipeFromMistral, and conditional rendering.",
    "IngredientsList.jsx - Dynamic list of user ingredients with accessible aria-live updates.",
    "ClaudeRecipe.jsx - AI recipe display using ReactMarkdown, with a loading state.",
    "ai.js - API wrapper for Gemini with a Chefexa-focused prompt and error handling for keys, billing, and demand."
  ],
  features: [
    "Ingredient input workflow for quick meal discovery",
    "Dynamic AI-generated recipes using Gemini and planned DeepSeek/Groq support",
    "Markdown-rendered recipe output with react-markdown",
    "Centralized AI API wrapper for cleaner integration",
    "Async loading and error states for smoother feedback",
    "Accessible live ingredient list with aria-live updates",
    "Responsive React components for mobile-friendly use",
    "Vite-powered development and fast production builds",
    "ESLint setup for code quality",
    "Vercel-ready deployment configuration"
  ],
  conclusion:
    "Chefexa is a modern React/Vite template for AI-driven recipe apps, empowering users to cook smarter with on-hand ingredients. With robust state management, seamless AI integration, and clean code, it provides a scalable foundation for kitchen tech projects. Whether for personal use or expansion through multi-model support and saved recipes, Chefexa delivers practical innovation in a lightweight package."
};
