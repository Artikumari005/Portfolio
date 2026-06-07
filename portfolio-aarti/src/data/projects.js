import FF1 from "../images/devTinder1.png";
import FF2 from "../images/devTinder2.png";
import FF3 from "../images/devTinder3.png";
import Flip from "../images/flip.png";
import College from "../images/college.png";
import Chafexa from "../images/port1.png";
import Tenzien1 from "../images/tenzien1.png";
import Tenzien2 from "../images/tenzien2.png";
import Tenzien3 from "../images/tenzien3.png";

export const projects = [
  {
    id: "food-forever",
    title: "devTinder",
    category: "Friends with similar interests",
    image: FF1,
    gallery: [FF1, FF2, FF3],
    liveUrl: "https://dev-tinder-frontend-cykq71iux-aartis-projects-5f30b00f.vercel.app",
    approach: [
      "DevTinder is a full-stack developer networking platform inspired by Tinder, designed to help developers discover, connect, and communicate with like-minded professionals. The platform combines profile-based matching, connection requests, and real-time messaging to create a seamless networking experience for developers seeking collaboration, mentorship, or career opportunities."
    ]
  },
{
    id: "tenzies",
    title: "Tenzies",
    category: "React Dice Game",
    image: Tenzien1,
    gallery: [Tenzien1, Tenzien2, Tenzien3],
    liveUrl: "https://artikumari005.github.io/Tenzies-game/",
    approach: [
      "Tenzies was crafted as more than just a dice game—it's a polished React application that delivers addictive gameplay with smooth animations, performance tracking, and responsive design.",
      "My approach centered on creating an intuitive user experience using React hooks for state management, custom Die components for visual appeal, and Vite for lightning-fast development.",
      "Every roll, hold action, and win celebration was engineered to feel responsive and rewarding, turning a simple concept into an engaging web app."
    ]
  },
  {
    id: "college-platform",
    title: "College Platform",
    category: "Educational Platform",
   
    image: College,
    gallery: [College, College, College],
    liveUrl: "https://ilmec-fulgry2rt-aartis-projects-5f30b00f.vercel.app",
    approach: [
      "Created a trustworthy academic visual direction.",
      "Prioritized navigation clarity for prospective students.",
      "Structured the content around programs, admissions, and campus value."
    ]
  },
  {
    id: "chefexa",
    title: "Chefexa",
    category: "AI Recipe Recommendation Web App",
   
    image: Chafexa,
    gallery: [Chafexa, Chafexa, Chafexa],
    liveUrl: "https://chefexa-ai-generatd-recipe-gefp30x6k-aartis-projects-5f30b00f.vercel.app",
    approach: [
      "Designed Chefexa as a practical tool for everyday users who want instant recipe ideas from available ingredients.",
      "Emphasized simplicity, real-time AI integration, and responsive React components for quick meal discovery.",
      "Built the workflow around ingredient addition, recipe generation, and clean Markdown-rendered output."
    ]
  }
];
