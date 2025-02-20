const fs = require('fs');
const util = require('util');
const express = require('express');
const logger = require('./logger.js');
const app = express();
const port = 3000;

// Promisify fs.writeFile and fs.readFile
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

// This sets the view engine to pug
app.set('view engine', 'pug');

// This sets the views directory to the "views" folder
app.set('views', './views');

const tasksRouter = require("./routes/tasks");

app.use("/tasks", tasksRouter);

// Serve static files from the "public" folder
app.use(express.static('public'));

const message = 'Hello, this is a message written using Node.js!';

// Write to a file (creates the file if it doesn’t exist)
fs.writeFile('output.txt', message, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');

// This function uses the readFile method to read the contents of a file.
fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);

    // Call the log function from logger module
    logger.log();

    // Access the version variable from logger module
    console.log('Logger version:', logger.version);
});
});

// Set up a basic Express route
app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

// Add the new route
app.get('/about', (req, res) => {
    res.send('This is the about page!');
});

// Add the /tasks route
app.get('/tasks', (req, res) => {
    res.send('<h1>List of all the tasks</h1>');
});

// Add the /tasks/:taskId route
app.get('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    res.send(`You are viewing task ${taskId}`);
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Logs a message to confirm the server is starting
console.log('Server starting...');

