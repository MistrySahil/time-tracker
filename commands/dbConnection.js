const Sequelize = require('sequelize')

const connect = async () => {
  const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_DIALECT } = process.env
  const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
  })
  sequelize
    .authenticate()
    .then(() => {
      console.log(
        'Connection to the database has been established successfully.',
      )
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error)
    })
}
module.exports.connect = connect
