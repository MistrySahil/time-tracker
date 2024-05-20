'use strict'
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      task_name: DataTypes.STRING,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      is_running: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
    },
    {},
  )

  Task.associate = function (models) {
    // associations can be defined here
    Task.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
  }

  return Task
}
