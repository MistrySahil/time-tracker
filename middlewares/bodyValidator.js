const { GeneralErrors } = require('../constants/ErrorCodes')
const { GeneralErrorsMessages } = require('../constants/ErrorMessages')

/**
 * valid request body with provide joi schema
 * request will contine if required parameters are present else it will be rejected
 * @param  {ObjectSchema} schema schema against which body to be validated
 */
function bodyValidatorMiddleware(schema, schemaName) {
  return (req, res, next) => {
    let requestpayload = { ...req.body, ...req.query, ...req.params }
    const { error, value } = schema.validate(requestpayload, {
      abortEarly: false,
      convert: true,
    })
    req.__rawBody = { ...req.body, ...req.query, ...req.params }
    req.body = value
    req.__rawBody = { ...req.body, ...req.query, ...req.params }
    console.log('body', req.body);
    if (!error) {
      return next()
    }
    const { details } = error
    const messages = details.map((errorMsg) => {
      /**
       * @type { string }
       */
      const message = errorMsg.message
      const words = message.split('"')
      if (words.length === 0) return message
      words[1] = words[1]
        ?.split('_')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
        )
        .join(' ')

      return words.join('')
    })
    return res.status(400).json({
      message: GeneralErrorsMessages.INVALID_REQUEST_BODY,
      error_code: GeneralErrors.INVALID_REQUEST_BODY,
      error: messages,
      data: {},
    })
  }
}
module.exports = { bodyValidatorMiddleware }
