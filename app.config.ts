export default defineAppConfig({
  cover: '/cover.jpg',
  socials: {
    twitter: 'SoftagonBR',
    website: 'https://softagon.com.br',
    contact: 'https://fale.softagon.app'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    cover?: string,
    socials?: {
      twitter?: string
      website?: string
      contact?: string
    }
  }
}