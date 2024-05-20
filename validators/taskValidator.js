const coreJoi = require('joi')
const joiDate = require('@joi/date')
const joi = coreJoi.extend(joiDate)

const EndTaskValidator = joi.object({
  task_id: joi.number().integer().required(),
  end_time: joi.date().iso().required(),
})

const CreateTaskValidator = joi.object({
  task_name: joi.string().required(),
  start_time: joi.date().iso().required(),
})

const DeleteTaskValidator = joi.object({
  task_id: joi.number().integer().required(),
})

module.exports = {
  EndTaskValidator,
  CreateTaskValidator,
  DeleteTaskValidator,
}
