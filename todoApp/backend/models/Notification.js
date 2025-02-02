const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

class Notification extends Model {
  static init(sequelize) {
    super.init({
      time: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      }
    }, {
      sequelize,
      modelName: 'Notification',
      timestamps: false,
      tableName: 'notifications'
    });
  }
}

Notification.init(sequelize);

module.exports = Notification;
