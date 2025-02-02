CREATE TABLE Notifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(255) NOT NULL,
  dueDate DATE NOT NULL
);

INSERT INTO Notifications (task, dueDate) VALUES
('Task 1', '2023-12-01'),
('Task 2', '2023-12-02');

SELECT * FROM Notifications;

UPDATE Notifications
SET dueDate = '2023-12-05'
WHERE id = 1;

DELETE FROM Notifications
WHERE id = 2;
