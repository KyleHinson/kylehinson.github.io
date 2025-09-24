import { defineConfig } from 'vite';

export default defineConfig({
    base: 'https://kylehinson.github.io',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ['phaser']
                }
            }
        },
    },
    server: {
        port: 8080
    }
  
});