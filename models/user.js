const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {},
  )

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Task, {
      foreignKey: 'userId',
      as: 'tasks',
    })
  }

  return User
}
