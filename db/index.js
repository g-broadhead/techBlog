const { Sequelize } = require('sequelize')
require('dotenv').config()

module.exports = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost:3306/techBlog_db')
