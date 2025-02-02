import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleAddTask = () => {
    if (title && description) {
      const newTask = {
        title,
        description,
        dueDate,
        priority,
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('Low');
    }
  };

  return (
    <div className="task-list-container">
      <header className="header">
        <div className="logo" onClick={() => window.location.href = '/'}>LOGO</div>
        <nav className="nav-tabs">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="task-form-container">
        <h1>Create New Task</h1>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="task-input"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="task-textarea"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="task-input"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="task-select"
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <button onClick={handleAddTask} className="primary-action-button">
          Add Task
        </button>
      </main>
      <section className="tasks-display">
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
              <p>Priority: {task.priority}</p>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Your Company</p>
        <nav className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
};

export default TaskList;
