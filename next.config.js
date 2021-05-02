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
        source: '/articole/:slug*',
        destination: '/articles/:slug*',
      }
    ]
  }
}