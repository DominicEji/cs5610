const express = require("express");
const router = express.Router();

// Route to get all tasks
router.get("/", (req, res) => {
    res.send("<h1>List of all the tasks</h1>");
});

// Route to get a specific task by ID
router.get("/:taskId", (req, res) => {
    const taskId = req.params.taskId;
    res.send(`You are viewing task ${taskId}`);
});

// Export the router
module.exports = router;
