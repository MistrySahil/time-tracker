const coreJoi = require('joi')
const joiDate = require('@joi/date')
const joi = coreJoi.extend(joiDate)

const Login = joi.object({
  username: joi.string().required(),
  password: joi
    .string()
    .min(8)
    .max(30)
    .required()
    .pattern(
      new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?])(?=.{8,})',
      ),
    )
    .message(
      'password should be at least 8 characters long with min 1 special character, 1 lower case and 1 upper case.',
    ),
})

const SignUp = joi.object({
  username: joi.string().required(),
  name: joi.string().required(),
  password: joi
    .string()
    .min(8)
    .max(30)
    .required()
    .pattern(
      new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?])(?=.{8,})',
      ),
    )
    .message(
      'password should be at least 8 characters long with min 1 special character, 1 lower case and 1 upper case.',
    ),
})

module.exports = {
  Login,
  SignUp,
}
