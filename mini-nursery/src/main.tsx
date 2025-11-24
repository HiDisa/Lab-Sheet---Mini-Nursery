import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import type { Plant } from "./types.ts";

const plants: Plant[] = [
  {
    id: 1,
    name: "Snake Plant",
    scientific: "Sansevieria trifasciata",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    rarity: "Common",
    description: "Tolerant to low light; great for beginners."
  },
  {
    id: 2,
    name: "String of Pearls",
    scientific: "Senecio rowleyanus",
    difficulty: "Medium",
    light: "Bright",
    water: "Moderate",
    rarity: "Uncommon",
    description: "Trailing succulent that loves bright light and well-drained soil."
  },
  {
    id: 3,
    name: "Monstera",
    scientific: "Monstera deliciosa",
    difficulty: "Medium",
    light: "Medium",
    water: "Moderate",
    rarity: "Uncommon",
    description: "Iconic split-leaf plant; prefers bright, indirect light."
  }
];

createRoot(document.getElementById("root")!).render(
  <App initialPlants={plants} />
);