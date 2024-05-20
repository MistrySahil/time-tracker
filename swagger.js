const options = {
  openapi:          '3.0.0',     // Enable/Disable OpenAPI.                        By default is null
  language:         'en-US',     // Change response language.                      By default is 'en-US'
  disableLogs:      false,    // Enable/Disable logs.                           By default is false
  autoHeaders:      true,    // Enable/Disable automatic headers recognition.  By default is true
  autoQuery:        true,    // Enable/Disable automatic query recognition.    By default is true
  autoBody:         true,    // Enable/Disable automatic body recognition.     By default is true
  writeOutputFile:  true     // Enable/Disable writing the output file.        By default is true
};

const swaggerAutogen = require('swagger-autogen')(options)
const schemas = require('./schemas/index')

console.log('scheams', schemas);

const response400 = {
  message: 'There is some error from your side',
  error_code: 'unique error code',
  error: ['Array of error messages'],
  data: {},
};

const response401 = {
  message: 'You\'re not authorized to access this resource',
  error_code: 'unique error code',
  error: ['Array of error messages'],
  data: {},
};

const response500 = {
  message: 'There is some error on our side',
  error_code: 'unique error code',
  error: ['Array of error messages'],
  data: {},
};

const response200 = {
  message: 'success message',
  success_code: 'unique success code',
  data: {}, // other data if any
};

const doc = {
  // openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Time tracker APIs Docs.',
    description: 'Docs for APIs',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      in: 'header', // can be "header", "query" or "cookie"
      name: 'Authorization', // name of the header, query parameter or cookie
      bearerFormat: 'JWT',
      description: 'provide JWT token',
    },
  },
  definitions: { ...schemas, response500, response400, response401, response200 },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/*.js', './routes/*/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
// import('./index.js'); // Your project's root file
});