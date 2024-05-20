const router = require('express').Router()
const { bodyValidatorMiddleware } = require('../middlewares/bodyValidator')
const { asyncRouteHandler } = require('../commands/asyncHandler')
const { authMiddleware } = require('../middlewares/authMiddleware')
const { signUp, login } = require('../controllers/authController')
const { SignUp, Login } = require('../validators/authValidator')

router.post(
  '/user/signup',
  /*
        #swagger.tags = ['User']
        #swagger.description = 'Endpoint to register user'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'User information.',
            required: true,
            schema: { $ref: "#/definitions/signUp" }
        }
        #swagger.responses[400] = {
            description: 'Client error',
            schema: { $ref: "#/definitions/response400" }
        }
        #swagger.responses[500] = {
            description: 'Internal server error',
            schema: { $ref: "#/definitions/response500" }
        }
        #swagger.responses[200] = {
            description: 'Success',
            schema: { $ref: "#/definitions/response200" }
        }
    */
  bodyValidatorMiddleware(SignUp),
  asyncRouteHandler(signUp),
)

router.post(
  '/user/login',
  /*
        #swagger.tags = ['User']
        #swagger.description = 'Endpoint to login user'
        #swagger.security = [{
            "bearerAuth": {
                "type": "apiKey",
                "in": "header",
                "name": "Authorization",
                "bearerFormat": "JWT",
                "description": "provide JWT token"
            }
        }]
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'User information.',
            required: true,
            schema: { $ref: "#/definitions/login" }
        }
        #swagger.responses[400] = {
            description: 'Client error',
            schema: { $ref: "#/definitions/response400" }
        }
        #swagger.responses[500] = {
            description: 'Internal server error',
            schema: { $ref: "#/definitions/response500" }
        }
        #swagger.responses[200] = {
            description: 'Success',
            schema: { $ref: "#/definitions/response200" }
        }
    */
  bodyValidatorMiddleware(Login),
  authMiddleware(),
  asyncRouteHandler(login),
)

module.exports = router
