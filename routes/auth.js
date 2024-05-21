const router = require('express').Router()
const { bodyValidatorMiddleware } = require('../middlewares/bodyValidator')
const { asyncRouteHandler } = require('../commands/asyncHandler')
const { signUp, login } = require('../controllers/authController')
const { SignUp, Login } = require('../validators/authValidator')

router.post(
  '/user/signup',
   /*
    #swagger.tags = ['User']
    #swagger.description = 'Endpoint to register user'
    #swagger.requestBody = {
        in: 'requestBody',
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
        #swagger.requestBody = {
            in: 'requestBody',
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
  asyncRouteHandler(login),
)

module.exports = router
