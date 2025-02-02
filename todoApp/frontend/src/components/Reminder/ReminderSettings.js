import React, { useState } from 'react';
import './ReminderSettings.css';

const ReminderSettings = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminderTime, setNewReminderTime] = useState('');

  const addReminder = () => {
    if (newReminderTime) {
      setReminders([...reminders, newReminderTime]);
      setNewReminderTime('');
    }
  };

  const editReminder = (index, time) => {
    const updatedReminders = reminders.slice();
    updatedReminders[index] = time;
    setReminders(updatedReminders);
  };

  const deleteReminder = (index) => {
    setReminders(reminders.filter((_, i) => i !== index));
  };

  return (
    <div className="reminder-settings">
      <header className="header">
        <img 
          src="https://obelion-heart.s3.amazonaws.com/agents/dev/19374d58-ea21-4ed2-9e50-46468d8c15b5.png" 
          alt="Company Logo" 
          className="logo" 
        />
        <nav className="nav-tabs">
          <div className="nav-tab active">Reminders</div>
          <div className="nav-tab">Settings</div>
        </nav>
      </header>
      <main className="main-content">
        <form className="reminder-form">
          <input 
            type="time" 
            value={newReminderTime} 
            onChange={(e) => setNewReminderTime(e.target.value)} 
            className="reminder-input"
          />
          <button 
            type="button" 
            onClick={addReminder} 
            className="add-reminder-button"
          >
            Add Reminder
          </button>
        </form>
        <ul className="reminder-list">
          {reminders.map((reminder, index) => (
            <li key={index} className="reminder-item">
              <input 
                type="time" 
                value={reminder} 
                onChange={(e) => editReminder(index, e.target.value)} 
                className="reminder-edit-input"
              />
              <button 
                type="button" 
                onClick={() => deleteReminder(index)} 
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button type="button" className="save-button">
          Save Settings
        </button>
      </main>
      <footer className="footer">
        Company Info | Terms of Service | Privacy Policy
      </footer>
    </div>
  );
};

export default ReminderSettings;
