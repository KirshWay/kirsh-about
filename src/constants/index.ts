import type { GameStatus } from "../data";

export const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const STATUS_GAME: GameStatus[] = ["completed", "in progress", "planned"];

