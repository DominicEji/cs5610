const fs = require('fs');
const util = require('util');
const express = require('express');
const logger = require('./logger.js');
const { connectToDatabase } = require('./db');
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

// File operation using .then() and .catch()
writeFileAsync('output.txt', message, 'utf8',) 
    .then(() => {
        console.log('File written successfully!');
        return readFileAsync('output.txt', 'utf8');
    })
    .then((data) => {
        console.log('File content:', data);

        // Call the log function from logger module
        logger.log();
        
        // Access the version variable from logger module
        console.log('Logger version:', logger.version);
    })
    .catch((err) => {
        console.error('Error:', err);
    });

// File operations using async/await
async function handleFileOperations() {
    try {
        await writeFileAsync('output.txt', message, 'utf8');
        console.log('File written successfully!');

        const data = await readFileAsync('output.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error:', err);
    }
}

handleFileOperations();

// Set up a basic Express route
app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

// Add the new route
app.get('/about', (req, res) => {
    res.send('This is the about page!');
});

// This starts the express server
app.listen(port, async () => {
    console.log(`Server running on http://localhost:${port}`);
    await connectToDatabase();
});

// Logs a message to confirm the server is starting
console.log('Server starting...');

