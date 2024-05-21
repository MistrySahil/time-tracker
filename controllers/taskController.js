const { sequelize } = require('../commands/dbConnection')
const { ClientException } = require('../commands/exceptions/ClientException')
const { TaskErrors } = require('../constants/ErrorCodes')
const { TaskErrorMessages } = require('../constants/ErrorMessages')
const { TaskSuccess } = require('../constants/SuccessCodes')
const { TaskSuccessMessage } = require('../constants/SuccessMessages')
const DataTypes = sequelize.DataTypes
const Task = require('../models/task')(sequelize, DataTypes)

const getTrackedTasks = async (req, res) => {
  const { limit = 10, offset = 0 } = req.query
  const tasks = await Task.findAndCountAll({
    where: { userId: req.user.id },
    limit: parseInt(limit),
    offset: parseInt(offset),
  })

  return res.success(
    {
      success_code: TaskSuccess.TASKS_FETCHED_SUCCESSFULLY,
      message: TaskSuccessMessage.TASKS_FETCHED_SUCCESSFULLY,
      data: tasks,
    },
    200,
  )
}

const createTask = async (req, res) => {
  // Check if any task is already running for the user
  const existingTask = await Task.findOne({
    where: {
      userId: req.user.id,
      end_time: null,
    },
  })

  if (existingTask) {
    throw new ClientException(
      TaskErrors.TASK_IS_ALREADY_RUNNING,
      TaskErrorMessages.TASK_IS_ALREADY_RUNNING,
      400,
    )
  }

  const { task_name, start_time } = req.body
  const newTask = await Task.create({
    task_name,
    start_time,
    userId: req.user.id,
  })

  return res.success(
    {
      success_code: TaskSuccess.TASK_CREATED_SUCCESSFULLY,
      message: TaskSuccessMessage.TASK_CREATED_SUCCESSFULLY,
      data: newTask,
    },
    201,
  )
}

const endTask = async (req, res) => {
  const { task_id, end_time } = req.body
  const task = await Task.findByPk(task_id)
  if (!task) {
    throw new ClientException(
      TaskErrors.TASK_NOT_FOUND,
      TaskErrorMessages.TASK_NOT_FOUND,
      404,
    )
  }

  if (task.end_time) {
    throw new ClientException(
      TaskErrors.TASK_IS_ALREADY_COMPLETED,
      TaskErrorMessages.TASK_IS_ALREADY_COMPLETED,
      400,
    )
  }

  await task.update({
    end_time,
  })
  return res.success(
    {
      success_code: TaskSuccess.TASK_ENDED_SUCCESSFULLY,
      message: TaskSuccessMessage.TASK_ENDED_SUCCESSFULLY,
      data: newTask,
    },
    200,
  )
}

const deleteTask = async (req, res) => {
  const { task_id } = req.query
  const task = await Task.findByPk(task_id)
  if (!task) {
    throw new ClientException(
      TaskErrors.TASK_NOT_FOUND,
      TaskErrorMessages.TASK_NOT_FOUND,
      404,
    )
  }

  // Delete the task
  await task.destroy()
  return res.success(
    {
      success_code: TaskSuccess.TASK_DELETED_SUCCESSFULLY,
      message: TaskSuccessMessage.TASK_DELETED_SUCCESSFULLY,
    },
    200,
  )
}

const checkRunningTask = async (req, res) => {
  const runningTask = await Task.findOne({
    where: {
      userId: req.user.id,
      end_time: null,
    },
  })

  if (runningTask) {
    return res.success(
      {
        success_code: TaskSuccess.RUNNING_TASK_FOUND,
        message: TaskSuccessMessage.RUNNING_TASK_FOUND,
        data: runningTask,
      },
      200,
    )
  } else {
    return res.success(
      {
        success_code: TaskSuccess.NO_RUNNING_TASK,
        message: TaskSuccessMessage.NO_RUNNING_TASK,
      },
      200,
    )
  }
}
module.exports = {
  getTrackedTasks,
  createTask,
  endTask,
  deleteTask,
  checkRunningTask,
}
