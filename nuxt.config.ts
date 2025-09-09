// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', ],
    css: ['~/assets/css/main.css'],
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        },
        cdnURL: "https://zkus-chemii.pages.dev/"
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            autoSubfolderIndex: false,
            routes: [
                "/robots.txt"
            ],
        },
    },
    ssr: true,
    site: {
        url: 'https://zkus-chemii.pages.dev',
        name: 'Zkus Chemii!'
    },
    image: {
        dir: 'assets',
        presets: {
            cardImage: {
                modifiers: {
                    format: "jpg",
                    width: 400,
                    quality: 50,
                    fit: "cover"
                }
            }
        }
    },
})