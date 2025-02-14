const fs = require('fs');
const express = require('express');
const logger = require('./logger.js');
const app = express();
const port = 3000;

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
    res.send('<hi>List of all the tasks</h1>');
});


// Start the Express server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Logs a message to confirm the server is starting
console.log('Server starting...');
