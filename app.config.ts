export default defineAppConfig({
  cover: '/cover.jpg',
<<<<<<< HEAD
  socials: {}
=======
  socials: {
    twitter: 'SoftagonBR',
    website: 'https://softagon.com.br',
    contact: 'https://fale.softagon.app'
  }
>>>>>>> wind
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    cover?: string,
    socials?: {
      twitter?: string
<<<<<<< HEAD
      github?: string
    }
  }
}
=======
      website?: string
      contact?: string
    }
  }
}
>>>>>>> wind
