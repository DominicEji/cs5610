const axios = require('axios');
const express = require("express");
const router = express.Router();
const { insertTask } = require('../db');
const path = require('path');

// Route to get all tasks
router.get("/", (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.error('Error fetching tasks:', error.message);
            res.status(500).send('Error fetching tasks');
        });
    });

// Route to serve the newtask.html form
router.get('/newtask', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/newtask.html'));
    });
        
// Route to get a specific task by ID
router.get("/:taskId", async(req, res) => {
    const taskId = req.params.taskId;
    try {
        const taskResponse = await axios.get(`https://jsonplaceholder.typicode.com/todos/${taskId}`);

        if (taskResponse.status == 404) {
            return res.status(404).send('Task not found');
        }
        const task = taskResponse.data;

        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${task.userId}`);
        if (userResponse.status == 404) {
            return res.status(404).send('User not found');
        }
        const user = userResponse.data;

        const completeStatus = task.completed ? 'Completed' : 'Not completed';

        res.render('task', {
            id: taskId,
            title: task.title,
            completed: completeStatus,
            userName: user.name
        });

    } catch (error) {
        console.error('Error fetching task or user details:', error.message);
        res.status(500).send('Error fetching task or user details:');
    }
});

router.get('/newtask', (req, res) => {
    res.render('newtask');
});

router.post('/', async (req, res) => {
    try {
        const task = req.body; // Get data from the request body
        await insertTask(task); // Insert the task into the database
        res.redirect('/tasks'); // Redirect to the /tasks route
    } catch (error) {
        console.error('Error inserting task:', error.message);
        res.status(500).send('Internal Server Error');
    }
});


// Export the router
module.exports = router;
