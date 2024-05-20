const { GeneralException } = require('./GeneralException')

/**
 * @param  { string } errorCode internal custom error code
 * @param  { string } message message/error
 * @param  { number } statusCode status code to be send along with error response
 * @param  { {} } data extra data to send along with response
 */
function ServerException(errorCode, message, statusCode = 400, data = {}) {
  return GeneralException(
    errorCode,
    message,
    statusCode,
    'SERVER_SIDE_ERROR_EXCEPTION',
    data,
  )
}

// eslint-disable-next-line no-undef
module.exports = {
  ServerException,
}
