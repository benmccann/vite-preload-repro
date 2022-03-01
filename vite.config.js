// @ts-check
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		cssCodeSplit: true,
		outDir: 'dist',
		minify: false,
		rollupOptions: {
			input: resolve('src/index.js'),
			output: {
				entryFileNames: '[name]-[hash].js',
				chunkFileNames: '[name]-[hash].js',
				assetFileNames: '[name]-[hash][extname]',
				format: 'es'
			}
		}
	}
};

export default config;
