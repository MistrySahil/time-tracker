/*
    #swagger.tags = ['Company', 'User']
    #swagger.description = 'Endpoint to create company'
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
      description: 'Company information.',
      required: true,
      schema: { $ref: "#/definitions/createCompanyValidator" }
    }
    #swagger.responses[400] = {
      description: 'Client error',
      schema: { $ref: "#/definitions/response400" }
    }
    #swagger.responses[500] = {
      description: 'Internal serverAsset error',
      schema: { $ref: "#/definitions/response500" }
    }
    #swagger.responses[200] = {
      description: 'Success',
      schema: { $ref: "#/definitions/response200" }
    }
*/
