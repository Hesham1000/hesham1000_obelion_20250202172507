module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [
    {
      email: 'john.doe@example.com',
      password: '$2b$10$V60PXyObXeOl9Xe.TwTQJ.xO9J/gh2H6N/sca/yTjd51Bg4UQ9a6e', // bcrypt hashed password
    },
    {
      email: 'jane.doe@example.com',
      password: '$2b$10$X8YpmFhsd8G/vCm0cF9Uhe/Iq0RQgSIQ5vdfLmhJZWiQVDW5lkMyy', // bcrypt hashed password
    }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {})
};
