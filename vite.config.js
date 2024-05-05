import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@uiKits': path.resolve(__dirname, './src/uiKits'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@components': path.resolve(__dirname, './src/components'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@typings': path.resolve(__dirname, './src/typings'),
            '@store': path.resolve(__dirname, './src/store'),
            '@configs': path.resolve(__dirname, './src/configs'),
            '@api': path.resolve(__dirname, './src/api'),
            '@slices': path.resolve(__dirname, './src/slices'),
            '@providers': path.resolve(__dirname, './src/providers'),
            '@themes': path.resolve(__dirname, './src/themes'),
        },
    },
});