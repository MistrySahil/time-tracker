const { DatabaseErrorsMessages } = require('../constants/ErrorMessages')

/**
 * @param  {} error
 * @param  {Request} req
 * @param  {Response} res
 */

function errorHandler(error, req, res, next) {
  console.error('Error: ', error.message, error)
  switch (error.type) {
    case 'SERVER_SIDE_ERROR_EXCEPTION':
      return res.error(
        {
          message: DatabaseErrorsMessages[req.headers.lang].SERVER_SIDE_ERROR,
          error_code: error.errorCode,
          data: {
            ...error.data,
          },
        },
        error.message,
        error.statusCode || 500,
      )
    case 'CLIENT_SIDE_ERROR_EXCEPTION':
      return res.error(
        {
          message: DatabaseErrorsMessages[req.headers.lang].SERVER_SIDE_ERROR,
          error_code: error.errorCode,
          data: {
            ...error.data,
          },
        },
        error.message,
        error.statusCode || 400,
      )
    default:
      return res.error(
        {
          message:
            DatabaseErrorsMessages[req.headers.lang].SOMETHING_WENT_WRONG,
          error_code: error.errorCode || 'UNKNOWN_EXCEPTION_OCCURED',
          data: {
            ...error.data,
          },
        },
        error.message,
        500,
      )
  }
}

module.exports = {
  errorHandler,
}
