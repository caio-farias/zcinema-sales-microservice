const { Model, DataTypes } = require('sequelize')

class Card extends Model {
  static associate(models){
    this.belongsTo(models.User, { 
      foreignKey: 'user_id', 
      as: 'user-card',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    this.hasMany(models.Sale, { 
      foreignKey: 'sale_id', 
      as: 'sale-card',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  static init(connection){
    super.init({
      number:      {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      secret:      {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      card_banner:      {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      transactions_history: {
        type: DataTypes.JSON,
        allowNull: false,
      }
    }
    ,{
      modelName: 'Card',
      sequelize: connection,
    })
  }
}

module.exports = Card