// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://astro.build/config
export default defineConfig({
	site: 'https://kirshway.github.io',
	base: import.meta.env.PROD ? '/kirsh-about' : '',
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': path.resolve('./src'),
				'@components': path.resolve('./src/components'),
				'@layouts': path.resolve('./src/layouts'),
				'@assets': path.resolve('./src/assets'),
				'@styles': path.resolve('./src/styles'),
				'@utils': path.resolve('./src/utils'),
				'@data': path.resolve('./src/data'),
				'@constants': path.resolve('./src/constants'),
				'@pages': path.resolve('./src/pages')
			}
		}
	}
});
