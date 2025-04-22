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

export const gamesItems: ListItem[] = [
  {
    id: 'tlou2',
    title: 'The Last of Us 2',
    status: 'in progress',
    year: 2020,
    image: '/src/assets/images/games/tlou2.jpg',
  },
];
