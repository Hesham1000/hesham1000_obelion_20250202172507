const express = require('express');
const { getAllNotifications, createNotification, updateNotification, deleteNotification } = require('../controllers/notificationController');

const router = express.Router();

router.get('/notifications', getAllNotifications);

router.post('/notifications', createNotification);

router.put('/notifications/:id', updateNotification);

router.delete('/notifications/:id', deleteNotification);

module.exports = router;
