export type ListItem = {
  id: string;
  title: string;
  status: GameStatus;
  rating?: number;
  image?: string;
  typeBook?: 'audiobook' | 'book';
  year?: number;
  review?: string;
  recommendationEmoji?: '👍' | '😐' | '🔥' | '👎' ;
}

export type Project = {
  name: string;
  description: string;
  url: string;
  tech: {
    id: string;
    name: string;
    color: Variant;
  }[];
}

export type MediaType = 'games' | 'books' | 'films';

export type GameStatus = 'completed' | 'in progress' | 'planned';

export type Variant =
  | "main"
  | "green"
  | "gray"
  | "yellow"
  | "blue"
  | "black"
  | "lightBlue"
  | "lightGreen"
  | "pink"
  | "red"
  | "orange";
