const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Task = sequelize.define(
    'Task',
    {
      task_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.DATE,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
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
