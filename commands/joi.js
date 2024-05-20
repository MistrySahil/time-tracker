/**
 * accept joi schema and return parsed keys with it's type
 * @param  {Joi.Schema} schema
 */
function getParsedKeys(schema) {
  const allKeys = schema.keys
  const parsedKeys = {}
  Object.keys(allKeys).map((key) => {
    parsedKeys[key] = allKeys[key].type
  })
  return parsedKeys
}
module.exports = { getParsedKeys }
