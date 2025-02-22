const axios = require('axios');
const express = require("express");
const router = express.Router();

// Route to get all tasks
router.get("/", (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            res.status(500).send('Error fetching tasks');
        });
    });
        
// Route to get a specific task by ID
router.get("/:taskId", async(req, res) => {
    const taskId = req.params.taskId;
    try {
        const taskResponse = await axios.get(`https://jsonplaceholder.typicode.com/todos/${taskId}`);
        const task = taskResponse.data;

        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${task.userId}`);
        const user = userResponse.data;

        const completeStatus = task.completed ? 'Completed' : 'Not completed';

        res.render('task', {
            id: taskId,
            title: task.title,
            completed: completeStatus,
            userName: user.name
        });

    } catch (error) {
        res.status(500).send('Error fetching task or user details');
    }
});

// Export the router
module.exports = router;
