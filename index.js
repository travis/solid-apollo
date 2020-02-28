'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./solid-apollo.cjs.production.js')
} else {
  module.exports = require('./solid-apollo.cjs.development.js')
}
