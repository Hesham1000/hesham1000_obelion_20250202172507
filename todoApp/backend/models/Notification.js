const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('todo', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false
});

class Notification extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      task: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true
        }
      }
    }, {
      sequelize,
      modelName: 'Notifications',
      timestamps: false
    });
  }
}

Notification.init(sequelize);

module.exports = Notification;