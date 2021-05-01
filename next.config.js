const path = require('path')

module.exports = {
  i18n:{
    locales: ['ro'],
    defaultLocale: 'ro',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}