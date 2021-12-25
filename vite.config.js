import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { minifyHtml, injectHtml } from 'vite-plugin-html';

const productionBase = '/vue-calculate/';

export default defineConfig(({ command }) => {
    const config = {
        plugins: [
            vue(),
            minifyHtml(),
            injectHtml({
                data: {
                    title: 'VueJS-Calculate'
                }
            })
        ],

        base: command === 'serve' ? '/' : productionBase
    };

    return config;
});
