# Kirshway

[![Demo Site](https://img.shields.io/badge/Demo-Open_Site-brightgreen?style=for-the-badge)](https://kirshway.github.io/kirsh-about/)
[![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=for-the-badge&logo=astro)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-blue?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

Modern personal website/blog built with Astro and styled with Tailwind CSS.

### �� Features

- **Fast & Content-Driven**: Built with Astro Content Collections for type-safe, optimized data management.
- **Modern Design**: Styled with Tailwind CSS.
- **Custom Fonts**: Uses Geist Mono and JetBrains Mono fonts.
- **Responsive**: Displays correctly on devices of any size.
- **GitHub Pages Deployment**: Automatic deployment via GitHub Actions.

## 📂 Project Structure

```
/
├── .github/              # GitHub Actions configuration
├── public/               # Static files
├── src/
│   ├── assets/           # Images and icons
│   ├── components/       # Reusable Astro components
│   ├── content/          # Astro Content Collections (reviews, projects)
│   │   └── config.ts     # Collection schemas (Zod)
│   ├── data/             # Static data (e.g., projectList.ts)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Site pages and routes
│   ├── styles/           # Global CSS styles
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
└── astro.config.mjs      # Astro configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `pnpm install`  | Installs dependencies                       |
| `pnpm dev`      | Starts local dev server at `localhost:4321` |
| `pnpm build`    | Build your production site to `./dist/`     |
| `pnpm preview`  | Preview your build locally before deploying |

## 🧪 Technologies

- [Astro](https://astro.build) (with Content Collections)
- [Tailwind CSS](https://tailwindcss.com)
- [Fontsource](https://fontsource.org/) - for font loading
- [GitHub Pages](https://pages.github.com/) - for hosting

## 📝 License

MIT

---

_Created with ❤️ using Astro_
