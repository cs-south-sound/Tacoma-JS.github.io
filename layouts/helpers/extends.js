const Handlebars = require('handlebars')
const extender = require('handlebars-layouts')

module.exports = Handlebars.registerHelper(extender(Handlebars))
