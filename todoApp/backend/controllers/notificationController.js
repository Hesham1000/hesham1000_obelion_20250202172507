const Notification = require('../models/Notification');

// Fetch all notifications
const getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.findAll();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve notifications' });
    }
};

// Create a new notification
const createNotification = async (req, res) => {
    const { task, dueDate } = req.body;
    try {
        const newNotification = await Notification.create({ task, dueDate });
        res.status(201).json(newNotification);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create notification' });
    }
};

// Update a notification (Snooze functionality)
const updateNotification = async (req, res) => {
    const { id } = req.params;
    const { dueDate } = req.body;
    try {
        const notification = await Notification.findByPk(id);
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        notification.dueDate = dueDate;
        await notification.save();
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update notification' });
    }
};

// Delete a notification
const deleteNotification = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Notification.destroy({ where: { id } });
        if (result === 0) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete notification' });
    }
};

module.exports = {
    getAllNotifications,
    createNotification,
    updateNotification,
    deleteNotification
};
