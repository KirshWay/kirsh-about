// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isProduction = import.meta.env?.MODE === 'production';

// https://astro.build/config
export default defineConfig({
	site: 'https://kirshway.github.io',
	base: isProduction ? '/kirsh-about' : '',
	vite: {
		plugins: [tailwindcss()]
	}
});
