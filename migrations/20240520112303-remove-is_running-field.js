'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Tasks', 'is_running')
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks')
  },
}
