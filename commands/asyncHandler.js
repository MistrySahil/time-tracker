/**
 * this is function to handle async await function for the error handling
 * any thrown error, in promise or setTimeout it'll be handled by this function
 * it helps to avoid try catch block in every async function
 *
 * @param  {} fn async function, request handler
 * @param  {} req incomging request
 * @param  {} res request response
 * @param  {} next next middleware
 */
const asyncRouteHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next)
}

module.exports = {
  asyncRouteHandler,
}
