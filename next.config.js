module.exports = {
  env:{
    CLIENT_KEY: "KEYIOOOO"
  },
  i18n:{
    locales: ['ro'],
    defaultLocale: 'ro',
  },
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: '/articles',
      },
      {
        source: '/:slug',
        destination: '/articles',
      },
      {
        source: '/:slug/articol/:id*',
        destination: '/:slug/article/:id*',
      }
    ]
  }
}