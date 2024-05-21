const { verifyJWTToken } = require('../commands/commandHandler')
const { sequelize } = require('../commands/dbConnection')
const { ClientException } = require('../commands/exceptions/ClientException')
const { UserErrors } = require('../constants/ErrorCodes')
const { UserErrorMessages } = require('../constants/ErrorMessages')
const DataTypes = sequelize.DataTypes;
const User = require('../models/user')(sequelize, DataTypes);

/**
 * @param  {Request} req
 * @param  {Response} res
 * @param  {} next
 */
async function handler(req, res, next, role) {
  const token = req.headers['authorization']
  if (!token)
    throw new ClientException(
      UserErrors.TOKEN_NOT_FOUND,
      UserErrorMessages.TOKEN_NOT_FOUND,
      401,
    )
  const tokenDetails = verifyJWTToken(token)
  if (!tokenDetails)
    throw new ClientException(
      UserErrors.TOKEN_NOT_FOUND,
      UserErrorMessages.INVALID_TOKEN,
      401,
    )
  let user = await User.findOne({ where: { id: tokenDetails.id } })
  if (!user)
    throw new ClientException(
      UserErrors.USER_NOT_FOUND,
      UserErrorMessages.INVALID_USER_DETAILS,
      401,
    )
  req.user = user
  return next()
}

/**
 * An Auth middleware, to check if user is authorized to access a route or not.
 * check authorization based on user role
 * @param  {string[]} roles roles to be checked
 */
function authMiddleware(roles) {
  return (req, res, next) => {
    return Promise.resolve(handler(req, res, next, roles)).catch(next)
  }
}

module.exports = {
  authMiddleware,
}
