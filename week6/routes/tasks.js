const express = require("express");
const router = express.Router();
const { getAllTasks, findTask } = require('../db');
const {objectId} = require('mongodb');

// Route to get all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await getAllTasks();
        res.render('tasks', { tasks });
    } catch (error) {
        console.error('Error fetching tasks:', error.message);
        res.status(500).send('Error fetching tasks');
    }
});

// Route to get a specific task by ID
router.get("/:taskId", async (req, res) => {
    const taskId = req.params.taskId;
    try {
        const task = await findTask({ _id: new ObjectId(taskId) });
        if (!task) {
            return res.status(404).send('Task not found');
        }
        res.render('task', {
            id: taskId,
            title: task.title,
            completed: task.completed ? 'Completed' : 'Not completed',
            dueDate: task.date || 'No due date',
            userName: task.userName || 'Unknown'
        });
    } catch (error) {
        console.error('Error fetching task details:', error.message);
        res.status(500).send('Error fetching task details');
    }
});

// Export the router
module.exports = router;
