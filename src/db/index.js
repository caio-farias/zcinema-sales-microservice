const Sequelize = require('sequelize')
const User = require('../models/User')
const Card = require('../models/Card')
const Sale = require('../models/Sale')
const dbConfig = require('./config')

const connection = new Sequelize(dbConfig)

User.init(connection)
Card.init(connection)
Sale.init(connection)

User.associate(connection.models)
Card.associate(connection.models)
Sale.associate(connection.models)

module.exports = connection