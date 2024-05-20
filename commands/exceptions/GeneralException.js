/**
 * @param  { string } errorCode internal custom error code
 * @param  { string } message message/error
 * @param  { number } statusCode status code to be send along with error response
 * @param  { string } type type of exception for global error handling
 * @param  { {} } data extra data to send along with response
 */
function GeneralException(
  errorCode,
  message = '',
  statusCode = 500,
  type = 'UNKNOWN_EXCEPTION_OCCURED',
  data = {},
) {
  return {
    errorCode: errorCode,
    message: message,
    type: type,
    statusCode: statusCode,
    data: data,
  }
}

// eslint-disable-next-line no-undef
module.exports = {
  GeneralException,
}
