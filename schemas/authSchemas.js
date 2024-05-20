const authValidator = require('../validators/authValidator')
const { getParsedKeys } = require('../commands/joi')

module.exports = {
  login: getParsedKeys(authValidator.Login.describe()),
  signUp: getParsedKeys(authValidator.SignUp.describe()),
}
