export default defineNuxtConfig({
    ssr: false,
    components: true,
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [// https://icones.js.org/collection/all
    // https://fonts.nuxt.com/
    // https://www.radix-vue.com
    ['unplugin-icons/nuxt', { autoInstall: true }],
        '@nuxt/fonts',
        'radix-vue/nuxt',
        'shadcn-nuxt'
    ],
    vite: {
        clearScreen: false,
        envPrefix: ['VITE_', 'TAURI_'],
        server: {
            strictPort: true
        }
    }
})