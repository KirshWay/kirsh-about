import type { Project } from '.';

export const projectList: Project[] = [
  {
    name: 'Orgatime',
    description:
      'Enterprise-grade task management system with drag-and-drop planning and CI/CD deployment',
    url: 'https://github.com/KirshWay/orgatime',
    tech: [
      {
        id: 'ts',
        name: 'TypeScript',
        color: 'blue',
      },
      {
        id: 'react',
        name: 'React',
        color: 'lightBlue',
      },
      {
        id: 'nest',
        name: 'NestJS',
        color: 'red',
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        color: 'lightGreen',
      },
      {
        id: 'prisma',
        name: 'Prisma',
        color: 'pink',
      },
      {
        id: 'docker',
        name: 'Docker',
        color: 'blue',
      },
    ],
  },
  {
    name: 'Kirsh Vault',
    description: 'Offline-capable collection management system',
    url: 'https://github.com/KirshWay/kirsh_vault',
    tech: [
      {
        id: 'ts',
        name: 'TypeScript',
        color: 'blue',
      },
      {
        id: 'next',
        name: 'Next.js',
        color: 'black',
      },
      {
        id: 'pw',
        name: 'PWA',
        color: 'lightBlue',
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        color: 'lightGreen',
      },
      {
        id: 'motion',
        name: 'Motion',
        color: 'pink',
      },
    ],
  },
  {
    name: 'Structify',
    description: 'Interactive CLI for documenting & archiving project file structure to Markdown',
    url: 'https://github.com/KirshWay/structify',
    tech: [
      {
        id: 'ts',
        name: 'TypeScript',
        color: 'blue',
      },
    ],
  },
];
