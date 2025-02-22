import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        assetsInclude: ['**/*.png', '**/*.svg', '**/*.jpg'],
        copyPublicDir: true,
    },
    publicDir: 'public',
    server: {
        host: '0.0.0.0',
        strictPort: false,
        cors: true,
        allowedHosts: true
    }
});