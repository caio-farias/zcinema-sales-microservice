const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserController')
const CardController = require('./controllers/CardController')
const SaleController = require('./controllers/SaleController')
const CreditController = require('./controllers/CreditController')

routes.post('/sales/users', UserController.createUser)
routes.get('/sales/users/:id', UserController.getUser)
routes.patch('/sales/users/:id', UserController.updateUser)
routes.delete('/sales/users/:id', UserController.deleteUser)

routes.post('/sales/cards/:user_id', CardController.createCard)
routes.get('/sales/cards/:user_id', CardController.getAllUserCards)
routes.get('/sales/cards/:user_id/:card_id', CardController.getCard)

routes.post('/sales/credit/:card_id', CreditController.createCredit)

routes.post('/sales/:user_id/:card_id/:booking_id', SaleController.createSale)
routes.get('/sales/:user_id/', SaleController.getUserSales)

module.exports = routes