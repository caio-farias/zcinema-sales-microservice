const { Model, DataTypes } = require('sequelize')

class Sale extends Model {
  static associate(models){
    this.belongsTo(models.Card, { 
      foreignKey: 'card_id', 
      as: 'user-cards',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  static init(connection){
    super.init({
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }
    ,{
      modelName: 'Sale',
      sequelize: connection,
    })
  }
}

module.exports = Sale