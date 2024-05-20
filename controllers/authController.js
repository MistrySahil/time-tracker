const bcrypt = require('bcrypt')
const { UserErrors } = require('../constants/ErrorCodes')
const { UserMessagesErrors } = require('../constants/ErrorMessages')
const { ClientException } = require('../commands/exceptions/ClientException')
const { generateJWTToken } = require('../commands/commandHandler')
const User = require('../models/user')

const signUp = async (req, res) => {
  const { name, username, password } = req.body

  // Check if the username is already taken
  const existingUser = await User.findOne({ where: { username } })
  if (existingUser) {
    throw new ClientException(
      UserErrors.USER_ALREADY_EXIST,
      UserMessagesErrors.USER_ALREADY_EXIST,
    )
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = await User.create({
    name,
    username,
    password: hashedPassword,
  })
  return res.success(
    {
      success_code: UserSuccess.USER_REGISTERED_SUCCESSFULLY,
      message: UserSuccessMessages.USER_REGISTERED_SUCCESSFULLY,
      data: newUser,
    },
    201,
  )
}

const login = async (req, res) => {
  const { username, password } = req.body

  // Find the user by username
  const user = await User.findOne({ where: { username } })
  if (!user) {
    throw new ClientException(
      UserErrors.USER_NOT_FOUND,
      UserMessagesErrors.USER_NOT_FOUND,
      400,
    )
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new ClientException(
      UserErrors.INVALID_EMAIL_PASSWORD,
      UserMessagesErrors.INVALID_EMAIL_PASSWORD,
      400,
    )
  }
  const token = await generateJWTToken({
    id: user.id,
  })
  return res.success(
    {
      success_code: UserSuccess.LOGIN_SUCCESSFULLY,
      message: UserSuccessMessages.LOGIN_SUCCESSFULLY,
      data: {
        user,
        token,
      },
    },
    200,
  )
}

module.exports = {
  signUp,
  login,
}
