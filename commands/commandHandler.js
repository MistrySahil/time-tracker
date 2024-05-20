const jwt = require('jsonwebtoken')
const { ClientException } = require('./exceptions/ClientException')
const { UserErrors } = require('../constants/ErrorCodes')
const { UserMessagesErrors } = require('../constants/ErrorMessages')

const generateJWTToken = async (
  extraData,
  expiresIn = process.env.JWT_EXPIRES_IN,
) => {
  const token = jwt.sign({ ...extraData }, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  })
  return token
}

const verifyJWTToken = (token, lang) => {
  try {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET)
    return isVerified
  } catch (error) {
    throw new ClientException(
      UserErrors.INVALID_TOKEN,
      UserMessagesErrors.INVALID_TOKEN,
      403,
    )
  }
}

module.exports = {
  generateJWTToken,
  verifyJWTToken,
}
