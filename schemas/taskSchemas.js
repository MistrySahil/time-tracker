const taskValidator = require('../validators/taskValidator')
const { getParsedKeys } = require('../commands/joi')

module.exports = {
  createTask: getParsedKeys(taskValidator.CreateTaskValidator.describe()),
  deleteTask: getParsedKeys(taskValidator.DeleteTaskValidator.describe()),
  endTask: getParsedKeys(taskValidator.EndTaskValidator.describe()),
}
