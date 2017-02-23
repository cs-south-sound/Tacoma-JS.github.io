const handlebars = require('handlebars')
const extender = require('handlebars-layouts')

module.exports = handlebars.registerHelper(extender(handlebars))
