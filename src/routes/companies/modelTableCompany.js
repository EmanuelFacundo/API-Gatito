const Sequelize = require('sequelize')
const instance = require('../../database')

const columns = {
  company: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM('ração', 'brinquedos'),
    allowNull: false
  }
}

const options = {
  freezeTableName: true,
  tableName: 'companies',
  timestamps: true
}

module.exports = instance.define('companies', columns, options)