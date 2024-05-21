const router = require('express').Router()
const { bodyValidatorMiddleware } = require('../middlewares/bodyValidator')
const { asyncRouteHandler } = require('../commands/asyncHandler')
const { authMiddleware } = require('../middlewares/authMiddleware')
const {
  createTask,
  deleteTask,
  getTrackedTasks,
  endTask,
  checkRunningTask,
} = require('../controllers/taskController')
const {
  CreateTaskValidator,
  DeleteTaskValidator,
  EndTaskValidator,
} = require('../validators/taskValidator')

router.post(
  '/task/create',
  /*
        #swagger.tags = ['Task']
        #swagger.description = 'Endpoint to create task'
        #swagger.security = [{
            "bearerAuth": {
                "type": "apiKey",
                "in": "header",
                "name": "Authorization",
                "bearerFormat": "JWT",
                "description": "provide JWT token"
            }
        }]
    #swagger.requestBody = {
      in: 'requestBody',
      description: 'Task information',
      required: true,
      schema: { $ref: '#/definitions/createTask' }
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
  bodyValidatorMiddleware(CreateTaskValidator),
  authMiddleware(),
  asyncRouteHandler(createTask),
)

router.post(
  '/task/end',
  /*
        #swagger.tags = ['Task']
        #swagger.description = 'Endpoint to end task'
        #swagger.security = [{
            "bearerAuth": {
                "type": "apiKey",
                "in": "header",
                "name": "Authorization",
                "bearerFormat": "JWT",
                "description": "provide JWT token"
            }
        }]
    #swagger.requestBody = {
      in: 'requestBody',
      description: 'Task information',
      required: true,
      schema: { $ref: '#/definitions/endTask' }
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
  bodyValidatorMiddleware(EndTaskValidator),
  authMiddleware(),
  asyncRouteHandler(endTask),
)

router.delete(
  '/task/delete',
  /*
        #swagger.tags = ['Task']
        #swagger.description = 'Endpoint to delete task'
        #swagger.security = [{
            "bearerAuth": {
                "type": "apiKey",
                "in": "header",
                "name": "Authorization",
                "bearerFormat": "JWT",
                "description": "provide JWT token"
            }
        }]
    #swagger.requestBody = {
      in: 'requestBody',
      description: 'Task id',
      required: true,
      schema: { $ref: '#/definitions/deleteTask' }
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
  bodyValidatorMiddleware(DeleteTaskValidator),
  authMiddleware(),
  asyncRouteHandler(deleteTask),
)

router.get(
  'task/all',
  /*
        #swagger.tags = ['Task']
        #swagger.description = 'Endpoint to get all tasks'
        #swagger.security = [{
            "bearerAuth": {
                "type": "apiKey",
                "in": "header",
                "name": "Authorization",
                "bearerFormat": "JWT",
                "description": "provide JWT token"
            }
        }]
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
  authMiddleware(),
  asyncRouteHandler(deleteTask),
)

router.get(
  '/task/running',
  /*
        #swagger.tags = ['Task']
        #swagger.description = 'Endpoint to get all running tasks'
        #swagger.security = [{
            "bearerAuth": {
                "type": "apiKey",
                "in": "header",
                "name": "Authorization",
                "bearerFormat": "JWT",
                "description": "provide JWT token"
            }
        }]
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
  authMiddleware(),
  asyncRouteHandler(checkRunningTask),
)

module.exports = router
