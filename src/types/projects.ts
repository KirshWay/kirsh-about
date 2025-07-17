import type { Variant } from './common';

export type Project = {
  name: string;
  description: string;
  url: string;
  tech: {
    id: string;
    name: string;
    color: Variant;
  }[];
};
