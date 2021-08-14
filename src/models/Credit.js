const { Model, DataTypes } = require('sequelize')

class Credit extends Model {
  static associate(models){
    this.belongsTo(models.Card, { 
      foreignKey: 'card_id', 
      as: 'cards-credit',
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
      value: {
        type: DataTypes.REAL,
        allowNull: false,
      },
    }
    ,{
      modelName: 'Credit',
      sequelize: connection,
    })
  }
}

module.exports = Credit