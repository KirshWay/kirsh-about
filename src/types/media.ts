export enum MediaType {
  GAMES = 'games',
  BOOKS = 'books',
  FILMS = 'films',
}

export enum Status {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in progress',
  PLANNED = 'planned',
}

export enum BookType {
  AUDIOBOOK = 'audiobook',
  BOOK = 'book',
}

export enum RecommendationEmoji {
  GOOD = '👍',
  NEUTRAL = '😐',
  EXCELLENT = '🔥',
  BAD = '👎',
}

export type ListItem = {
  id: string;
  title: string;
  status: Status;
  rating?: number;
  image?: string;
  typeBook?: BookType;
  year?: number;
  review?: string;
  recommendationEmoji?: RecommendationEmoji;
};
