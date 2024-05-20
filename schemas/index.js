const AuthSchemas = require('./authSchemas')
const taskSchemas = require('./taskSchemas')

module.exports = {
  ...AuthSchemas,
  ...taskSchemas,
}
