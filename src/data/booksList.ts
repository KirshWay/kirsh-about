import { BookType, Status } from '@/types';

import type { ListItem } from '@/types';

export const booksItems: ListItem[] = [
  {
    id: 'ElonMusk',
    title: 'Elon Musk by Walter Isaacson ',
    typeBook: BookType.AUDIOBOOK,
    status: Status.IN_PROGRESS,
    image: '/src/assets/images/books/Elon_Musk_Isaacson .jpg',
  },
];
