module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notifications', [
      { task: 'Task 1', dueDate: '2023-11-01' },
      { task: 'Task 2', dueDate: '2023-11-02' }
    ]);
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notifications', null, {});
  }
};
