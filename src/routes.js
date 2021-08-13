const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserController')
const CardController = require('./controllers/CardController')
const SaleController = require('./controllers/SaleController')

routes.post('/sales/users', UserController.createUser)
routes.patch('/sales/users/:id', UserController.updateUser)
routes.delete('/sales/users/:id', UserController.deleteUser)

routes.post('/sales/cards/:user_id', CardController.createCard)
routes.get('/sales/cards/:user_id', CardController.getAllUserCards)

routes.post('/sales/:card_id/:booking_id', SaleController.createSale)
routes.get('/sales/:user_id/', SaleController.getUserSales)

module.exports = routes