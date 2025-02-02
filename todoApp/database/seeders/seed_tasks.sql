-- Create 'tasks' table
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    dueDate DATE NOT NULL,
    priority ENUM('Low', 'Medium', 'High') NOT NULL DEFAULT 'Low'
);

-- Insert dummy data into 'tasks' table
INSERT INTO tasks (title, description, dueDate, priority) VALUES
('Task 1', 'Description for Task 1', '2023-12-31', 'High'),
('Task 2', 'Description for Task 2', '2023-11-30', 'Medium'),
('Task 3', 'Description for Task 3', '2023-10-15', 'Low');

-- Retrieve all tasks
SELECT * FROM tasks;

-- Update a task
UPDATE tasks
SET title = 'Updated Task', description = 'Updated Description', dueDate = '2024-01-01', priority = 'Medium'
WHERE id = 1;

-- Delete a task
DELETE FROM tasks WHERE id = 2;

-- Seeder template
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('tasks', [
    {
      title: 'Seeder Task 1',
      description: 'Seeder Description 1',
      dueDate: '2023-12-31',
      priority: 'High'
    },
    {
      title: 'Seeder Task 2',
      description: 'Seeder Description 2',
      dueDate: '2023-11-30',
      priority: 'Medium'
    }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('tasks', null, {})
};
