const fs = require('fs');

const filePath = 'message.txt';
const message = 'Hello, this is a message written using Node.js!';

// Write to a file (creates the file if it doesn’t exist)
fs.writeFile(filePath, message, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('Message written successfully!');

    // Read the file after writing
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('Message read from file:', data);
    });
});

const logger = require('./logger.js'); // Import the logger module

// Call the log function from logger.js
logger.log();

// Print the version from logger.js
console.log('Logger version:', logger.version);
