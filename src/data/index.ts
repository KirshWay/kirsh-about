export { gamesItems } from './gamesList';

export type ListItem = {
  id: string;
  title: string;
  status: 'completed' | 'in progress' | 'planned';
  rating?: number;
  image?: string;
  year?: number;
  review?: string;
  recommendationEmoji?: '👍' | '😐' | '👎';
}

export type MediaType = 'games' | 'books' | 'cinema';

export type GameStatus = 'completed' | 'in progress' | 'planned';
