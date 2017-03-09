const Handlebars = require('handlebars')
const equals = require('handlebars-helper-strict-equal')

module.exports = Handlebars.registerHelper('equal', equals)
