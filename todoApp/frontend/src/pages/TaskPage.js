import React, { useState } from 'react';
import './TaskPage.css';
import logo from '../assets/logo.png';

const TaskPage = ({ onLoginSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, dueDate, priority };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Low');
  };

  return (
    <div className="task-page">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" onClick={() => window.location.href = '/'} />
        <nav className="navigation">
          <button>Home</button>
          <button>Tasks</button>
          <button>Profile</button>
        </nav>
      </header>

      <main>
        <form className="task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="textarea"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="date"
            className="input"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <select
            className="select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit" className="primary-button">Add Task</button>
        </form>

        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
              <p>Priority: {task.priority}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className="footer">
        <div>© 2023 Your Company</div>
        <div className="footer-links">
          <a href="#">Contact</a>
          <a href="#">About</a>
        </div>
      </footer>
    </div>
  );
};

export default TaskPage;
