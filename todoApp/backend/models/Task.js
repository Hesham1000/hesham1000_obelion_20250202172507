const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
});

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        dueDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        priority: {
          type: DataTypes.ENUM('Low', 'Medium', 'High'),
          allowNull: false,
          defaultValue: 'Low',
        },
      },
      {
        sequelize,
        modelName: 'tasks',
        timestamps: false,
      }
    );
  }
}

Task.init(sequelize);

module.exports = Task;