/**
 * To add custom success and error respose hander for every request
 * This will add two function to every request's response object
 * 1. success
 * 2. error
 * @type { import('express').Handler }
 */
function customResponseHandler(request, response, next) {
  response.success = function (data, code = 200) {
    return response.status(code).json({
      message: data?.message || 'No message.',
      success_code: data?.success_code || 'SUCCESS',
      data: data?.data || {},
    })
  }
  response.error = function (data, error = '', code = 400) {
    return response.status(code).json({
      message: data?.message || 'No message',
      error_code: data?.error_code || 'ERROR',
      error: [error],
      data: data.data || {},
    })
  }
  next()
}

module.exports = { customResponseHandler }
