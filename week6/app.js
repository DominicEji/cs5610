const fs = require('fs');

const logger = require('./logger.js');

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
    console.log('File contents:', data);

    // Call the log function from logger module
    logger.log();

    // Access the version variable from logger module
    console.log('Logger version:', logger.version);
});
});

