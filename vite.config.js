import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { minifyHtml, injectHtml } from 'vite-plugin-html';

export default defineConfig(({ command }) => {
    const config = {
        plugins: [
            vue(),
            minifyHtml(),
            injectHtml({
                data: {
                    title: 'Vue-Calculate'
                }
            })
        ],

        base: command === 'serve' ? '/' : 'no_repo'
    };

    return config;
});
