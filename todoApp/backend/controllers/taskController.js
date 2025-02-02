const Task = require('../models/Task');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// Get a single task by ID
exports.getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  try {
    const newTask = await Task.create({ title, description, dueDate, priority });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create task' });
  }
};

// Update an existing task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, priority } = req.body;
  try {
    const [updated] = await Task.update(
      { title, description, dueDate, priority },
      { where: { id } }
    );
    if (updated) {
      const updatedTask = await Task.findByPk(id);
      res.json(updatedTask);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update task' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Task.destroy({
      where: { id }
    });
    if (deleted) {
      res.json({ message: 'Task deleted' });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

