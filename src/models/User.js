const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static associate(models){
    this.hasMany(models.Card, { foreignKey: 'user_id', as: 'cards' })
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