import React, { useState } from 'react';
import './Notification.css';
import { RiNotification3Line } from 'react-icons/ri';

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  
  const handleSetReminder = () => {
    if (task && dueDate) {
      setNotifications([...notifications, { task, dueDate }]);
      setTask('');
      setDueDate('');
    }
  };

  const handleSnooze = (index) => {
    // Snooze logic to be implemented
  };

  const handleDismiss = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  return (
    <div className="notification-app">
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <RiNotification3Line className="notification-icon" />
      </header>
      <nav className="navigation">
        {/* Navigation tabs goes here */}
      </nav>
      <main className="main-content">
        <div className="task-form">
          <input
            type="text"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={handleSetReminder} className="set-reminder-btn">
            Set Reminder
          </button>
        </div>
        <ul className="notifications-list">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              <span>{notification.task} - {notification.dueDate}</span>
              <button onClick={() => handleSnooze(index)} className="snooze-btn">Snooze</button>
              <button onClick={() => handleDismiss(index)} className="dismiss-btn">Dismiss</button>
            </li>
          ))}
        </ul>
      </main>
      <footer className="footer">
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}

export default Notification;
