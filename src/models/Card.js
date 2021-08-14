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
      foreignKey: 'card_id', 
      as: 'sales',
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
    }
    ,{
      modelName: 'Card',
      sequelize: connection,
    })
  }
}

module.exports = Card