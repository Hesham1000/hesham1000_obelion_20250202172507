CREATE TABLE Tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    dueDate DATE NOT NULL,
    priority ENUM('Low', 'Medium', 'High') NOT NULL DEFAULT 'Low'
);

-- Insert a task
INSERT INTO Tasks (title, description, dueDate, priority) 
VALUES ('Sample Task', 'Description for the sample task', '2023-12-31', 'Medium');

-- Retrieve all tasks
SELECT * FROM Tasks;

-- Retrieve a task by id
SELECT * FROM Tasks WHERE id = 1;

-- Update a task
UPDATE Tasks
SET title = 'Updated Task', 
    description = 'Updated description', 
    dueDate = '2023-11-30', 
    priority = 'High'
WHERE id = 1;

-- Delete a task
DELETE FROM Tasks WHERE id = 1;
