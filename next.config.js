const path = require('path')

module.exports = {
  env:{
    CLIENT_KEY: "KEYIOOOO"
  },
  i18n:{
    locales: ['ro'],
    defaultLocale: 'ro',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}