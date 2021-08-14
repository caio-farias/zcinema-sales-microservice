const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static associate(models){
    this.hasMany(models.Card, { foreignKey: 'user_id', as: 'cards' })
  }
  async addCredit(incomingCredit){
    this.credit += incomingCredit
    await User.update({
      credit: this.credit,
    }, { where: { id: this.id } })
  }
  async addDebit(debit){
    this.credit -= debit
    await User.update({
      credit: this.credit,
    }, { where: { id: this.id } })
  }
  static init(connection){
    super.init({
      first_name:  {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name:   {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile:      {
        type: DataTypes.STRING,
        allowNull: false,
      },
      credit: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      email:      {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
    }
    ,{
      modelName: 'User',
      sequelize: connection,
    })
  }
}

module.exports = User