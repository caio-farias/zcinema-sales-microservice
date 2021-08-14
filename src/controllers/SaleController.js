const User = require('../models/User')
const Sale = require('../models/Sale')
const Card = require('../models/Card')

module.exports = {
  async createSale(req, res){
    const { user_id, card_id, booking_id } = req.params
    const { date, type, price } = req.body

    try {
      const user = await User.findByPk(user_id)
      if(!user)
        return res.status(409).json({ message : "Usuário não existe"})
      
      const { credit } = user
      if(credit - price < 0)
        return res.status(400).json({ message : "Crédito insuficiente"})

      const card = await Card.findByPk(card_id)
      if(!card)
        return res.status(409).json({ message : "Cartão não existe"})
      
      const sale = await Sale.create({ card_id, booking_id, date, type, price, })
      user.addDebit(price)
      return res.json({ sale })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message : "Ocorreu um erro tente novamente"})
    }
  },
  async getUserSales(req, res){
    const { user_id } = req.params

    try {
      const cards = await Card.findAll({
          where: { user_id },
          include: {
            association : "sales"
          }
        })

      if(!cards)
        return res.status(409).json({ message : "Usuário não possui cartões cadastrados"})
      
      return res.json({ cards })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message : "Ocorreu um erro tente novamente"})
    }
  }
}