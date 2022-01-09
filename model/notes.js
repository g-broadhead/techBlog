const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Notes extends Model { }
Notes.init({
  body: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'notes' })

module.exports = Notes