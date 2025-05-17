import React from "react";
import { FlipWords } from "./ui/flip-words";

export function Typer() {
  const words = ["better", "cute", "beautiful", "modern"];

  return <FlipWords words={words} />;
}
export function Typer_2() {
  const words = ["npx", "pnpm", "bunx --bun"];

  return <FlipWords words={words} />;
}
export function Typer_terminal() {
  const words = ["bash", "zsh", "fish"];

  return <FlipWords duration={1000} words={words} />;
}
