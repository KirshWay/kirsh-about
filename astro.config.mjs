// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://kirshway.github.io',
	base: '/kirsh-about',
	vite: {
		plugins: [tailwindcss()]
	}
});
