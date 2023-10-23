import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// resolve: {
	// 	alias: {
	// 		'@components': 'src/components',
	// 		'@assets': 'src/assets',
	// 		'@hooks': 'src/hooks',
	// 		'@services': 'src/services',
	// 		'@store': 'src/store',
	// 		'@types': 'src/types',
	// 		'@utils': 'src/utils',
	// 	},
	// },
})
