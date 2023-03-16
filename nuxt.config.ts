// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            bodyAttrs: {
                class: 'demo'
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            titleTemplate: '%s | Crypto Tracker',
            meta: [
                {
                    name: 'author',
                    content: 'Arm Portfolio'
                }
            ]
        }
    },
    css: [
        '@/assets/css/main.css',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
