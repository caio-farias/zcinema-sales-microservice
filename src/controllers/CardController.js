const Card = require('../models/Card')
const User = require('../models/User')

module.exports = {
  async createCard(req, res){
    const { user_id } = req.params
    const { number, secret, card_banner } = req.body
    
    const isSameCard = await Card.findOne({ where: { user_id: user_id, number, card_banner } })

    if(isSameCard)
      return res.status(409).json({ message: "Usuário já possui este cartão" })
    
    const transactions_history = []
    
    const card  = await Card.create({
      user_id,
      number,
      secret,
      card_banner,
      transactions_history
    })

    return res.json({ card })
  },
  async getAllUserCards(req, res){
    const { user_id } = req.params

    const user = await User.findByPk(
      user_id,
      {
        include: {
           association: "cards",
        }
      }
    )
    console.log(user)
    if(!user)
      return res.status(409).json({ message: "Ocorreu um erro tente novamnete" })
    
    return res.json({ cards: user.cards })
  }
}